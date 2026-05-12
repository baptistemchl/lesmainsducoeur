<?php
/**
 * contact.php — endpoint de réception du formulaire de contact
 * Site : https://lesmainsducoeur.com — Sarah · Les Mains du Cœur
 *
 * Stack : PHP natif, zéro dépendance, fonction mail() d'o2switch.
 * Envoie un email à lesmainsducoeur22@gmail.com avec Reply-To = visiteur.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

// CORS — même origine uniquement (lesmainsducoeur.com → lesmainsducoeur.com)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = ['https://lesmainsducoeur.com', 'https://www.lesmainsducoeur.com'];
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// ─── Parsing du body (JSON ou form-encoded) ─────────────────────────────────
$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function field(array $data, string $key): string {
    $v = $data[$key] ?? '';
    return is_string($v) ? trim($v) : '';
}
function bool_field(array $data, string $key): bool {
    $v = $data[$key] ?? false;
    return $v === true || $v === 'true' || $v === '1' || $v === 1;
}

$name    = field($data, 'name');
$email   = field($data, 'email');
$phone   = field($data, 'phone');
$service = field($data, 'service');
$message = field($data, 'message');
$rgpd    = bool_field($data, 'rgpd');
$honey   = field($data, 'botcheck');

// ─── Anti-bot 1 — honeypot ──────────────────────────────────────────────────
if ($honey !== '') {
    // Réussite silencieuse : le bot croit avoir gagné et n'insiste pas
    echo json_encode(['success' => true]);
    exit;
}

// ─── Validation ─────────────────────────────────────────────────────────────
$errors = [];
if ($name === '')                                        $errors[] = 'name';
if ($email === '')                                       $errors[] = 'email';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL))      $errors[] = 'email';
if ($message === '' || strlen($message) < 3)             $errors[] = 'message';
if (!$rgpd)                                              $errors[] = 'rgpd';

// Longueurs raisonnables (anti-flood basique)
if (strlen($name) > 120)                                 $errors[] = 'name';
if (strlen($email) > 200)                                $errors[] = 'email';
if (strlen($phone) > 30)                                 $errors[] = 'phone';
if (strlen($service) > 60)                               $errors[] = 'service';
if (strlen($message) > 5000)                             $errors[] = 'message';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs invalides', 'errors' => array_values(array_unique($errors))]);
    exit;
}

// ─── Anti-injection dans les en-têtes (CRLF) ────────────────────────────────
$sanitizeHeader = static fn(string $v): string => preg_replace('/[\r\n]+/', ' ', $v) ?? '';
$name    = $sanitizeHeader($name);
$email   = $sanitizeHeader($email);
$phone   = $sanitizeHeader($phone);
$service = $sanitizeHeader($service);

// ─── Construction du mail ───────────────────────────────────────────────────
$to      = 'lesmainsducoeur22@gmail.com';
$subject = '=?UTF-8?B?' . base64_encode("Nouveau message de {$name} — Les Mains du Cœur") . '?=';

$serviceLabel = $service !== '' ? $service : '—';
$phoneLabel   = $phone !== '' ? $phone : '—';

$body  = "Nouveau message reçu via le formulaire de lesmainsducoeur.com\n";
$body .= "================================================================\n\n";
$body .= "Nom         : {$name}\n";
$body .= "Email       : {$email}\n";
$body .= "Téléphone   : {$phoneLabel}\n";
$body .= "Soin choisi : {$serviceLabel}\n";
$body .= "\n----------------------------------------------------------------\n";
$body .= "Message :\n\n";
$body .= $message . "\n";
$body .= "\n================================================================\n";
$body .= "Envoyé le " . date('Y-m-d H:i:s') . " — IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'inconnue') . "\n";
$body .= "Pour répondre, utilisez simplement 'Répondre' — l'email part directement vers {$email}.\n";

$fromAddress = 'no-reply@lesmainsducoeur.com';
$headers  = "From: Site Les Mains du Coeur <{$fromAddress}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Sender: {$fromAddress}\r\n";
$headers .= "Return-Path: {$fromAddress}\r\n";
$headers .= "X-Mailer: lesmainsducoeur.com-form\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// L'option -f définit l'enveloppe expéditeur (utile pour SPF/DKIM côté o2switch)
$sent = @mail($to, $subject, $body, $headers, '-f' . $fromAddress);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => "L'envoi a échoué côté serveur. Réessayez ou contactez Sarah au 06 73 42 68 95.",
    ]);
    exit;
}

echo json_encode(['success' => true]);
