# Les Mains du Cœur - Site de Magnétisme et Soins Énergétiques

Site web professionnel avec prise de rendez-vous en ligne pour un magnétiseur.

## 🌟 Fonctionnalités

- ✨ Site vitrine moderne et apaisant
- 📅 Système de prise de rendez-vous en ligne
- 🔄 Synchronisation automatique avec Google Calendar
- 📧 Envoi automatique d'emails de confirmation
- 📱 Design 100% responsive (mobile, tablette, desktop)
- 🎨 Animations fluides avec Framer Motion
- ⚡ Performance optimale avec Next.js 14

## 🛠 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **API**: Google Calendar API
- **Email**: Nodemailer

## 📋 Prérequis

- Node.js 18+ et npm
- Compte Google (pour Calendar API)
- Compte Gmail (pour l'envoi d'emails)

## 🚀 Installation

1. **Cloner le projet**
```bash
cd les-mains-du-coeur
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**

Créer un fichier `.env.local` à la racine du projet :

```env
# Google Calendar API
GOOGLE_CLIENT_ID=votre_client_id
GOOGLE_CLIENT_SECRET=votre_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=votre_refresh_token

# Email configuration
EMAIL_USER=votre.email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_application

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Lancer en développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🔐 Configuration Google Calendar API

### 1. Créer un projet Google Cloud

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un nouveau projet
3. Activer l'API Google Calendar

### 2. Créer les identifiants OAuth 2.0

1. Dans "API et services" > "Identifiants"
2. Créer des identifiants OAuth 2.0
3. Ajouter les URI de redirection :
   - `http://localhost:3000/api/auth/callback/google` (dev)
   - `https://votredomaine.com/api/auth/callback/google` (prod)

### 3. Obtenir le Refresh Token

Utiliser le script suivant :

```javascript
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  'VOTRE_CLIENT_ID',
  'VOTRE_CLIENT_SECRET',
  'http://localhost:3000/api/auth/callback/google'
);

const scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

console.log('Visitez cette URL:', url);
// Après autorisation, récupérer le code et l'échanger contre un refresh token
```

## 📧 Configuration Gmail

1. Activer la validation en 2 étapes sur votre compte Google
2. Générer un "Mot de passe d'application" :
   - Compte Google > Sécurité > Validation en 2 étapes > Mots de passe d'application
   - Sélectionner "Autre" et nommer "Les Mains du Cœur"
3. Utiliser ce mot de passe dans `EMAIL_PASSWORD`

## 📦 Déploiement sur O2switch

### 1. Build du projet

```bash
npm run build
```

### 2. Configuration du serveur

O2switch supporte Node.js. Dans le cPanel :

1. **Setup Node.js App**
   - Version Node.js : 18+
   - Application Root : `/home/votreuser/les-mains-du-coeur`
   - Application URL : `votredomaine.com`
   - Application Startup File : `server.js`

2. **Créer server.js**

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('> Ready on port 3000');
  });
});
```

3. **Variables d'environnement**
   - Ajouter toutes les variables d'environnement dans l'interface O2switch

4. **Upload des fichiers**
   - Via FTP ou File Manager
   - Upload tout le contenu du build

5. **Installer les dépendances sur le serveur**
```bash
npm install --production
```

6. **Démarrer l'application**
   - Via l'interface Node.js App de cPanel

## 🎨 Personnalisation

### Couleurs

Modifier dans `tailwind.config.ts` :

```typescript
colors: {
  sage: { /* Vos couleurs vertes */ },
  cream: { /* Vos couleurs beige/crème */ },
  gold: { /* Vos couleurs dorées */ }
}
```

### Contenu

- **Textes** : Modifier directement dans les fichiers `.tsx`
- **Tarifs** : `app/soins/page.tsx`
- **Coordonnées** : `components/Footer.tsx` et `app/contact/page.tsx`

### Images

Placer vos images dans le dossier `public/` et les importer :

```tsx
import Image from 'next/image'
<Image src="/votre-image.jpg" alt="Description" />
```

## 📱 Pages du site

- `/` - Accueil
- `/soins` - Soins proposés et tarifs
- `/a-propos` - À propos du magnétiseur
- `/rendez-vous` - Prise de rendez-vous
- `/contact` - Formulaire de contact
- `/temoignages` - Témoignages clients (à créer)

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Démarrer en production
npm run lint         # Linter
```

## 📝 TODO / Améliorations futures

- [ ] Page témoignages
- [ ] Blog / Articles sur le magnétisme
- [ ] Galerie photos du cabinet
- [ ] Espace client pour gérer ses RDV
- [ ] Paiement en ligne
- [ ] Chatbot pour répondre aux questions
- [ ] Multilingue (anglais)

## 🐛 Problèmes courants

### Erreur Google Calendar API

Vérifier que :
- Les credentials sont corrects
- L'API Calendar est activée
- Le refresh token est valide

### Emails non envoyés

Vérifier que :
- Le mot de passe d'application Gmail est correct
- La validation en 2 étapes est activée
- Les paramètres Gmail autorisent les applications tierces

## 📄 Licence

Ce projet est privé et propriétaire.

## 👤 Contact

Pour toute question : contact@lesmainsducoeur.fr
