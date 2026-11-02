# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Personnes de la région de Saint-Alban (Côtes-d'Armor, 22400) et, pour les soins à distance, d'ailleurs, qui traversent une période difficile (stress, fatigue, émotions lourdes, douleurs, sommeil) ou qui cherchent à se reconnecter à elles-mêmes. Beaucoup découvrent les soins énergétiques : certaines sont curieuses, d'autres sceptiques. Elles arrivent souvent depuis Instagram, Google ou le bouche-à-oreille, majoritairement sur téléphone, et veulent comprendre ce qu'est un soin, comment ça se passe, combien ça coûte, puis contacter Sarah.

Audience secondaire : Sarah elle-même, qui valide le site sans le gérer (elle ne met à jour que son Google Sheet d'ateliers).

## Product Purpose
Site vitrine de « Les Mains du Cœur », l'activité de Sarah : soins énergétiques (nettoyage énergétique, LaHoChi, magnétisme), massage ayurvédique Abhyanga, accompagnement sur plusieurs séances, ateliers collectifs en petit groupe. Réussite : une personne qui hésite comprend le soin, se sent en confiance et prend contact (téléphone, SMS, e-mail ou formulaire).

## Positioning
Une praticienne seule, en Bretagne, qui reçoit au cabinet ou soigne à distance, avec une approche douce, sans jargon ni rituel imposant ; ses avis Google (5/5) parlent d'accueil bienveillant et de confiance.

## Operating Context
- Pas de réservation en ligne : prise de contact par téléphone (06 73 42 68 95), SMS, e-mail (lesmainsducoeur22@gmail.com), formulaire ou Instagram ; règlement sur place.
- Cabinet : 17 rue du Pré d'Aublé, 22400 Saint-Alban. Les ateliers ont lieu ailleurs selon la saison (salle dédiée ou extérieur), 5 personnes maximum, 20 à 25 €.
- Les dates d'ateliers viennent d'un Google Sheet publié en CSV que Sarah tient à jour.
- Baptiste (Agence IXP) maintient le site ; une bêta Vercel sert à montrer les évolutions à Sarah avant la mise en ligne.

## Capabilities and Constraints
- Vite + React + TypeScript + Tailwind, multi-page (une entrée HTML par page) ; hébergement o2switch (Apache, mise en ligne par FTP à chaque push sur `V2`).
- Tarifs confirmés : nettoyage énergétique 70 €, LaHoChi 70 €, magnétisme 60 €, Abhyanga 90 €, accompagnement 350 €.
- Le contenu de l'accompagnement et le déroulé des ateliers sont encore provisoires, en attente des textes de Sarah.

## Brand Commitments
- Nom : Les Mains du Cœur, Sarah. Logo dans `public/images/logo.svg`.
- Univers existant à garder : rose et violet doux, verre dépoli, typographies Cormorant / Quicksand / écriture manuscrite. Sarah ne doit pas se sentir loin du site qu'elle connaît.
- Ton : doux, bienveillant, jamais commercial ni pressant. Les visiteurs sont vouvoyés ; Sarah parle parfois à la première personne.
- Aucune promesse de guérison : les soins sont complémentaires et ne remplacent pas un suivi médical ou psychologique (mention à garder visible).

## Evidence on Hand
- 8 avis Google réels (5/5) dans `src/data/google-reviews.json` ; 3 citent le magnétisme ou le nettoyage énergétique.
- Photos réelles de Sarah et du cabinet dans `public/images/`.
- Textes de soins de Sarah dans `src/data/services.ts`, FAQ dans `src/data/faq.ts`.
- Pas de photos d'ateliers, pas de témoignages par soin au-delà des avis Google : ne pas en inventer.

## Product Principles
- Rassurer avant de convaincre : expliquer simplement ce qui se passe pendant le soin.
- Une seule action claire, prendre contact, sans pression.
- Rester honnête : pas de promesse de santé, pas de faux témoignages.
- Penser téléphone d'abord.
