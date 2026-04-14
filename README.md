# Les Mains du Cœur — Site Vitrine

Site vitrine premium pour **Sarah Gueuné**, praticienne en soins énergétiques.

---

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite |
| `npm run build` | Compile pour la production |
| `npm run preview` | Prévisualise le build de production |

---

## Stack technique

| Technologie | Rôle |
|---|---|
| **Vite 5** | Bundler et serveur de développement |
| **React 18** | Framework UI |
| **TypeScript 5** | Typage statique |
| **Tailwind CSS 3** | Utilitaires CSS avec design tokens personnalisés |
| **Framer Motion 11** | Animations fluides et transitions |
| **lucide-react** | Icônes légères et cohérentes |

Aucun backend requis. Le formulaire de contact simule un envoi en front.

---

## Architecture

```
src/
├── components/
│   ├── decorative/        # Compositions SVG et éléments visuels
│   │   ├── FloatingOrb.tsx
│   │   └── HeroComposition.tsx
│   ├── layout/            # Structure de la page
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/          # Sections de la page (une par feature)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── SessionSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                # Composants réutilisables
│       ├── Button.tsx
│       ├── FaqItem.tsx
│       ├── SectionHeading.tsx
│       ├── ServiceCard.tsx
│       └── TestimonialCard.tsx
├── data/                  # Données métier découplées de l'UI
│   ├── faq.ts
│   ├── navigation.ts
│   ├── services.ts
│   └── testimonials.ts
├── hooks/                 # Logique extraite en hooks
│   ├── useContactForm.ts
│   └── useScrolled.ts
├── lib/
│   └── animations.ts      # Variants Framer Motion partagés
├── styles/
│   └── globals.css        # Tokens Tailwind + classes composées
├── App.tsx
└── main.tsx
```

---

## Direction artistique

### Concept : *Sanctuaire botanique lumineux*

L'enjeu était d'éviter deux écueils symétriques : le kitsch ésotérique d'un côté, le minimalisme clinique de l'autre. Le positionnement visuel vise un équilibre entre **luxe doux**, **naturalité organique** et **contemporanéité sobre**.

---

### Palette de couleurs

| Rôle | Nom | Valeur |
|---|---|---|
| Fond principal | Ivoire | `#FAF7F2` |
| Fond secondaire | Crème | `#F5EFE6` |
| Accent doux | Rose poudré (blush) | `#F2D6D3` |
| Accent principal | Rose | `#C9948A` |
| Accent profond | Rose profond | `#A67068` |
| Équilibre | Vert sauge | `#A8B5A2` |
| Légèreté | Vert sauge pâle | `#D4DDD0` |
| Luxe | Or doux | `#D4B896` |
| Texte principal | Brun chaud | `#3D3530` |
| Texte secondaire | Brun moyen | `#7A6E69` |
| Fond inversé | Brun profond | `#3D3530` |

La logique de palette : l'ivoire/crème domine (80%), le rose poudré structure (15%), le vert sauge équilibre (5%). L'or n'apparaît qu'en accent ponctuel pour éviter l'ostentation.

---

### Typographie

**Cormorant Garamond** *(Google Fonts)*
- Rôle : Titres, citations, éléments display
- Graisses utilisées : 300 (light), 400 (regular), 500 (medium), 600 (semibold) + italiques
- Pourquoi : Emprunté à l'édition de qualité et à l'univers des maisons de parfum ou des spa haut de gamme. Ses empattements délicats, son contrast de graisse marqué et ses italiques gracieuses transmettent immédiatement douceur, féminité et luxe accessible. À grande taille, il crée un effet presque cinématographique.

**DM Sans** *(Google Fonts)*
- Rôle : Corps de texte, labels, formulaires, légendes
- Graisses utilisées : 300 (light), 400 (regular), 500 (medium)
- Pourquoi : Géométrique sans être froid, il offre une excellente lisibilité à petite taille tout en restant cohérent avec l'esthétique wellness contemporain. Son ouverture et sa douceur renforcent le sentiment de sécurité et d'accessibilité que le site doit transmettre.

La combinaison Cormorant × DM Sans joue sur le contraste serif/sans-serif pour hiérarchiser visuellement sans effort de lecture — les titres capturent l'attention, le corps guide confortablement.

---

### Système de design

**Ombres :**
- `shadow-card` : ombre douce pour les cartes (fond blanc)
- `shadow-card-hover` : ombre plus marquée au survol (lift effect)
- `shadow-soft` : halo rosé pour les éléments flottants

**Arrondis :**
- Boutons : `rounded-full` (capsule)
- Cartes et panels : `rounded-2xl`
- Petits éléments : `rounded-xl`

**Animations :**
- Durées entre 0.55s et 0.7s, courbe cubic-bezier douce
- Triggers : `whileInView` + `viewport={{ once: true }}`
- Hero : flottement lent (9s), halos qui pulsent
- Cartes : lift de 6px au hover
- Header : transparence → opaque au scroll

---

## Personnalisation

### Ajouter une vraie photo
Remplacer le `<div>` portrait stylisé dans `AboutSection.tsx` par :
```tsx
<img src="/photo-sarah.jpg" alt="Sarah Gueuné" className="w-full h-full object-cover" />
```

### Connecter le formulaire
Dans `src/hooks/useContactForm.ts`, remplacer le `setTimeout` par un vrai appel API (Netlify Forms, EmailJS, etc.).

### Modifier les textes
Les données métier sont isolées dans `src/data/`. Modifiez `services.ts`, `testimonials.ts` et `faq.ts` sans toucher aux composants.

---

## Production

```bash
npm run build
```

Les fichiers compilés sont dans `dist/`. Le site est statique, compatible avec Netlify, Vercel, GitHub Pages, etc.

---

*Conçu avec soin — pour Les Mains du Cœur.*
