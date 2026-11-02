/**
 * Génère une page HTML par soin : soins/<id>/index.html
 *
 * Chaque page a son titre, sa description, ses données structurées et un
 * contenu <noscript> lisibles sans JavaScript ; React affiche ensuite la page
 * complète (src/soin.tsx). À relancer après toute modification de
 * src/data/services.ts :  node scripts/generate-service-pages.mjs
 * (Node 22.18+ ou 24 : lit directement le fichier TypeScript.)
 */
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { services } from "../src/data/services.ts"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const baseUrl = "https://lesmainsducoeur.com"

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const short = (s, n = 155) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)).replace(/[,;:.]$/, "") + "…")
const priceValue = (p) => p.replace(/[^\d]/g, "")
const remote = (s) => /distance/i.test(s.modality)

const contract = `<!--
  THESIS: chaque soin a sa propre fiche, qui rassure avant de convaincre. Refuse la page « hero + cartes d'icônes » : la page suit le fil réel d'une séance, et les infos pratiques restent à portée de main.
  OWN-WORLD: celui du site, rose poudré et violet doux sur fond ivoire, verre dépoli, Crimson Pro léger, Quicksand, touches manuscrites Caveat ; chaque soin teinte la page de sa couleur (rose, violet, ambre, corail, sauge).
  STORY: le visiteur comprend ce qu'est le soin, se voit allongé pendant la séance, lit des avis réels, puis appelle, écrit un SMS ou un e-mail à Sarah.
  FIRST VIEWPORT: nom du soin en grand à gauche, accroche manuscrite, prix, durée et modalité sur une ligne, bouton « Prendre contact » ; à droite, la photo du soin dans une arche.
  FORM: fiche de soin avec panneau pratique collant (5e de la liste), seed 85d31136.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`

for (const s of services) {
  const url = `${baseUrl}/soins/${s.id}/`
  const title = `${s.name} à Saint-Alban (22) · Les Mains du Cœur`
  const description = short(`${s.name} avec Sarah à Saint-Alban (Côtes-d'Armor)${remote(s) ? " ou à distance" : ""} : ${s.description}`)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        description: s.description,
        url,
        provider: { "@id": `${baseUrl}/#business` },
        areaServed: [
          { "@type": "City", name: "Saint-Alban" },
          { "@type": "AdministrativeArea", name: "Côtes-d'Armor" },
        ],
        offers: { "@type": "Offer", price: priceValue(s.price), priceCurrency: "EUR", url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Soins", item: `${baseUrl}/#soins` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
    ],
  }

  const html = `<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="author" content="Sarah · Les Mains du Cœur" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />

    <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#FDF2F8" />
    <meta name="color-scheme" content="only light" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="Les Mains du Cœur" />
    <meta property="og:title" content="${esc(`${s.name} · Les Mains du Cœur`)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://lesmainsducoeur.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://lesmainsducoeur.com/og-image.png" />

    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/^/gm, "    ")}
    </script>
  </head>
  <body>
    ${contract.replace(/\n/g, "\n    ")}
    <div id="root" data-service="${s.id}">
      <noscript>
        <h1>${esc(s.name)} — Les Mains du Cœur, Saint-Alban</h1>
        <p>${esc(s.description)}</p>
        <ul>
${s.benefits.map((b) => `          <li>${esc(b)}</li>`).join("\n")}
        </ul>
        <p>${esc(s.price)} · ${esc(s.duration)} · ${esc(s.modality)}</p>
        <p>
          Prendre rendez-vous : <a href="tel:+33673426895">06 73 42 68 95</a> ou
          <a href="mailto:lesmainsducoeur22@gmail.com">lesmainsducoeur22@gmail.com</a>. Règlement sur place.
        </p>
        <p><a href="/#soins">Tous les soins</a> · <a href="/">Retour à l'accueil</a></p>
      </noscript>
    </div>
    <script type="module" src="/src/soin.tsx"></script>
  </body>
</html>
`
  const dir = join(root, "soins", s.id)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, "index.html"), html, "utf8")
  console.log(`✓ soins/${s.id}/index.html`)
}
