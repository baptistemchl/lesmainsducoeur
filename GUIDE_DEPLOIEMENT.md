# Guide de Déploiement sur O2switch

Ce guide détaille pas à pas comment déployer le site "Les Mains du Cœur" sur un hébergement O2switch.

## 📋 Prérequis

- Compte O2switch actif
- Nom de domaine configuré (pointant vers O2switch)
- Accès cPanel
- Accès FTP (FileZilla recommandé)

## 🚀 Étape 1 : Préparer le projet localement

### 1.1 Build du projet

```bash
cd les-mains-du-coeur
npm install
npm run build
```

Cela créera un dossier `.next` avec les fichiers optimisés.

### 1.2 Fichiers à uploader

Vous devez uploader :
- `/app` (dossier complet)
- `/components` (dossier complet)
- `/lib` (dossier complet si vous l'avez)
- `/public` (dossier complet)
- `/types` (dossier complet si vous l'avez)
- `/.next` (dossier généré par le build)
- `/node_modules` (OU installer directement sur le serveur)
- `package.json`
- `package-lock.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `.env.local` (avec vos vraies variables)

**NE PAS uploader** :
- `.git`
- `node_modules` (si vous préférez installer sur le serveur)
- fichiers de développement

## 🖥️ Étape 2 : Configuration dans cPanel

### 2.1 Connexion à cPanel

1. Aller sur `https://votre-domaine.com/cpanel`
2. Se connecter avec vos identifiants O2switch

### 2.2 Setup Node.js Application

1. Dans cPanel, chercher **"Setup Node.js App"**
2. Cliquer sur **"Create Application"**
3. Remplir les champs :

   - **Node.js version** : Sélectionner `18.x` ou supérieur
   - **Application mode** : `Production`
   - **Application root** : `/home/votreuser/votredomaine.com` (ou sous-dossier)
   - **Application URL** : Laisser `/` ou personnaliser
   - **Application startup file** : `server.js`
   - **Environment variables** : Ajouter maintenant ou plus tard

4. Cliquer sur **"Create"**

### 2.3 Créer le fichier server.js

Via le File Manager de cPanel, créer `server.js` à la racine de votre application :

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

## 📤 Étape 3 : Upload des fichiers

### Option A : Via FTP (FileZilla)

1. Ouvrir FileZilla
2. Se connecter :
   - **Hôte** : `ftp.votredomaine.com`
   - **Utilisateur** : Votre username cPanel
   - **Mot de passe** : Votre password cPanel
   - **Port** : 21

3. Naviguer vers `/home/votreuser/votredomaine.com/`
4. Uploader tous les fichiers du projet

### Option B : Via File Manager cPanel

1. Dans cPanel > File Manager
2. Naviguer vers le dossier de votre application
3. Upload les fichiers (peut être plus lent)

## 🔐 Étape 4 : Variables d'environnement

### 4.1 Via l'interface Node.js App

1. Retourner dans **"Setup Node.js App"**
2. Cliquer sur **"Edit"** sur votre application
3. Section **"Environment variables"**
4. Ajouter une par une :

```
GOOGLE_CLIENT_ID = votre_client_id
GOOGLE_CLIENT_SECRET = votre_client_secret
GOOGLE_REDIRECT_URI = https://votredomaine.com/api/auth/callback/google
GOOGLE_REFRESH_TOKEN = votre_refresh_token
EMAIL_USER = votre.email@gmail.com
EMAIL_PASSWORD = votre_app_password
NEXT_PUBLIC_SITE_URL = https://votredomaine.com
NODE_ENV = production
```

### 4.2 Vérification

Les variables seront chargées automatiquement au démarrage de l'application.

## 📦 Étape 5 : Installation des dépendances

### Via Terminal SSH (Recommandé)

1. Dans cPanel > Terminal
2. Naviguer vers votre dossier :
```bash
cd votredomaine.com
```

3. Installer les dépendances :
```bash
npm install --production
```

### Via l'interface Node.js App

1. Dans "Setup Node.js App"
2. Cliquer sur "Run NPM Install"

## ▶️ Étape 6 : Démarrer l'application

1. Dans **"Setup Node.js App"**
2. Cliquer sur **"Stop App"** si elle tourne
3. Cliquer sur **"Start App"**
4. Vérifier le statut : doit afficher "Running"

## 🌐 Étape 7 : Configuration DNS et HTTPS

### 7.1 Configuration du domaine

1. Dans cPanel > **"Domaines"**
2. Vérifier que votre domaine pointe bien vers le bon dossier
3. Si besoin, configurer un sous-domaine

### 7.2 Activer HTTPS (SSL)

1. Dans cPanel > **"SSL/TLS Status"**
2. Chercher votre domaine
3. Cliquer sur **"Run AutoSSL"**
4. Attendre la génération du certificat (quelques minutes)

### 7.3 Redirection HTTP → HTTPS

Créer/modifier `.htaccess` à la racine :

```apache
# Redirection HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 🧪 Étape 8 : Tests

1. Visiter `https://votredomaine.com`
2. Tester toutes les pages :
   - Accueil
   - Soins
   - À propos
   - Témoignages
   - Contact
   - Prise de RDV

3. Tester la prise de rendez-vous :
   - Remplir le formulaire
   - Vérifier l'email de confirmation
   - Vérifier l'événement dans Google Calendar

## 🔧 Dépannage

### L'application ne démarre pas

1. Vérifier les logs dans cPanel > Node.js App > "Open logs"
2. Vérifier que toutes les variables d'environnement sont définies
3. Vérifier que `npm install` s'est bien exécuté

### Erreur 500

1. Vérifier les logs
2. Vérifier les permissions des fichiers (755 pour dossiers, 644 pour fichiers)
3. Vérifier le fichier `server.js`

### Images ne s'affichent pas

1. Vérifier que le dossier `/public` est bien uploadé
2. Vérifier les permissions du dossier

### Emails ne partent pas

1. Vérifier `EMAIL_USER` et `EMAIL_PASSWORD`
2. Vérifier que le mot de passe d'application Gmail est correct
3. Tester avec un email simple d'abord

### Google Calendar ne fonctionne pas

1. Vérifier tous les credentials Google
2. Vérifier que l'API Calendar est activée
3. Vérifier le refresh token
4. Vérifier l'URI de redirection

## 🔄 Mise à jour du site

Pour mettre à jour le site après modifications :

1. **En local** :
```bash
npm run build
```

2. **Upload** :
   - Uploader les fichiers modifiés
   - Uploader le nouveau dossier `.next`

3. **Redémarrer** :
   - Dans Node.js App > Stop puis Start

## 🎯 Optimisations

### Cache

Ajouter dans `.htaccess` :

```apache
# Cache navigateur
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Compression

```apache
# Compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## 📊 Monitoring

### Logs

- Accéder aux logs via cPanel > Node.js App
- Surveiller les erreurs régulièrement
- Configurer des alertes si possible

### Performance

- Utiliser Google PageSpeed Insights
- Optimiser les images si nécessaire
- Minifier CSS/JS (déjà fait par Next.js)

## 🆘 Support

- Documentation O2switch : https://faq.o2switch.fr/
- Support O2switch : ticket via l'espace client
- Documentation Next.js : https://nextjs.org/docs

## ✅ Checklist finale

- [ ] Application déployée et running
- [ ] HTTPS activé et fonctionnel
- [ ] Toutes les pages accessibles
- [ ] Formulaire de contact fonctionne
- [ ] Prise de RDV fonctionne
- [ ] Emails envoyés correctement
- [ ] Google Calendar synchronisé
- [ ] Performance satisfaisante
- [ ] SEO vérifié (meta tags, etc.)
- [ ] Tests sur mobile/tablette
- [ ] Analytics configuré (optionnel)
