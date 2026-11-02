/**
 * Ateliers collectifs.
 *
 * Les dates et les places restantes sont gérées par Sarah dans un Google Sheet
 * publié au format CSV (Fichier → Partager → Publier sur le web → CSV).
 * Colonnes attendues : Date | Horaire | Atelier | Places totales | Places restantes
 *
 * Tant que `sheetCsvUrl` vaut null, la section affiche `demoWorkshops`.
 * Avec VITE_DEMO_WORKSHOPS=1 au build (version de test), les ateliers d'exemple
 * s'ajoutent à ceux du Sheet pour montrer un calendrier rempli.
 */
export const sheetCsvUrl: string | null =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpcgVgy_CrFzsW7D-yABnxqPZjC879rvlHTfnLD2oYhANw0ieTVfe-3OHf7dFpwDL5Ke6c8qdf8y7W/pub?gid=0&single=true&output=csv"

export const showDemoWorkshops = import.meta.env.VITE_DEMO_WORKSHOPS === "1"

export const contact = {
  phone: "+33673426895",
  phoneLabel: "06 73 42 68 95",
  email: "lesmainsducoeur22@gmail.com",
}

export interface Workshop {
  id: string
  /** Minuit (heure locale) du jour de l'atelier */
  date: Date
  time: string
  title: string
  seatsTotal: number
  seatsLeft: number
  /** Atelier d'exemple (version de test), affiché avec un badge */
  demo?: boolean
}

/** Ateliers d'exemple, environ deux par mois sur les deux mois à venir. */
function buildDemoWorkshops(today = new Date()): Workshop[] {
  const slots = [
    { inDays: 6, time: "18h30 – 20h30", title: "Cercle de reconnexion au cœur", seatsLeft: 2 },
    { inDays: 17, time: "14h – 16h", title: "Méditation & soin énergétique en groupe", seatsLeft: 0 },
    { inDays: 29, time: "18h30 – 20h30", title: "Ayurvéda : accueillir l'hiver", seatsLeft: 4 },
    { inDays: 43, time: "14h – 16h", title: "Cocon intérieur", seatsLeft: 5 },
    { inDays: 57, time: "18h30 – 20h30", title: "Cercle de reconnexion au cœur", seatsLeft: 3 },
  ]
  return slots.map((s, i) => ({
    id: `demo-${i}`,
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + s.inDays),
    time: s.time,
    title: s.title,
    seatsTotal: 5,
    seatsLeft: s.seatsLeft,
    demo: true,
  }))
}

export const demoWorkshops: Workshop[] = buildDemoWorkshops()

/**
 * Présentation de la page Ateliers : texte de Sarah (02/11/2026). Le déroulé reste générique.
 */
export const workshopIntro = {
  title: "Un moment pour soi, à partager ensemble",
  paragraphs: [
    "Je vous propose régulièrement des ateliers en petit groupe, autour de différentes thématiques. Chaque atelier est une invitation à prendre un peu de temps pour soi, à découvrir de nouvelles choses, à expérimenter et à partager un moment dans la bienveillance.",
    "Au fil des rencontres, nous abordons différents sujets : l'intuition, les énergies, le développement personnel, les pratiques spirituelles, l'Ayurvéda. Chaque atelier a son propre thème et son ambiance.",
    "Aucune connaissance particulière n'est nécessaire. Que vous soyez déjà initié(e) ou simplement curieux(se) de découvrir mon univers, vous êtes les bienvenus.",
    "J'aime que ces moments se déroulent en petit comité, pour que chacun puisse trouver sa place, échanger librement et vivre l'expérience à son rythme, sans jugement ni attente particulière.",
  ],
}

export const workshopSteps = [
  {
    title: "L'accueil",
    text: "Une tisane, quelques minutes pour arriver, poser ses affaires et laisser la journée derrière soi.",
  },
  {
    title: "Le cercle d'ouverture",
    text: "Un tour de parole libre pour dire ce qui vous amène, si vous le souhaitez. Sans obligation, sans jugement.",
  },
  {
    title: "La pratique guidée",
    text: "Le cœur de l'atelier : méditation, respiration, soin énergétique partagé ou rituel ayurvédique, selon le thème de l'atelier.",
  },
  {
    title: "Le temps d'intégration",
    text: "Un moment de repos et d'échange pour accueillir ce qui s'est passé, avant de repartir en douceur.",
  },
]

export const workshopPractical = [
  { label: "Durée", value: "Environ 2 h" },
  { label: "Lieu", value: "Selon la saison, dans une salle dédiée ou en extérieur · précisé à la réservation" },
  { label: "Groupe", value: "5 personnes maximum" },
  { label: "Participation", value: "20 à 25 € par personne" },
  { label: "À prévoir", value: "Une tenue confortable" },
  { label: "Réservation", value: "Par téléphone, e-mail ou directement sur le site · règlement sur place" },
]
