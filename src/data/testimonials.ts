import googleData from "./google-reviews.json"

export interface Testimonial {
  id: string
  author: string
  role?: string
  service?: string
  content: string
  rating?: number
  authorPhoto?: string | null
  authorLink?: string | null
  isoDate?: string | null
  dateLabel?: string
  source?: "google" | "local"
}

export interface TestimonialAggregate {
  rating: number | null
  totalReviews: number
  writeReviewLink: string | null
  profileLink: string | null
}

const fallback: Testimonial[] = [
  {
    id: "f1",
    author: "Marie-Laure D.",
    role: "Consultante, 38 ans",
    service: "Magnétisme",
    content:
      "Après ma séance avec Sarah, j'ai ressenti une légèreté que je n'avais pas connue depuis des années. Son approche est à la fois douce et profonde — on se sent vraiment pris en soin, jamais jugé. Je repars à chaque fois avec quelque chose de plus léger à porter.",
    source: "local",
  },
  {
    id: "f2",
    author: "Camille R.",
    role: "Enseignante, 44 ans",
    service: "Nettoyage énergétique",
    content:
      "Je suis venue avec beaucoup de scepticisme, et je suis repartie bouleversée dans le bon sens du terme. Sarah sait créer un espace de confiance absolue. Elle ne force rien, elle accompagne. Je recommande sans hésiter à celles et ceux qui cherchent un ancrage sincère.",
    source: "local",
  },
  {
    id: "f3",
    author: "Sophie M.",
    role: "Infirmière, 31 ans",
    service: "Soin Lahochi",
    content:
      "Un vrai moment de grâce. Le soin Lahochi m'a permis de lâcher des tensions que je portais depuis longtemps, sans même les nommer. Sarah a une façon d'être présente, sereine et intuitive, qui met immédiatement à l'aise. Merci pour cette parenthèse précieuse.",
    source: "local",
  },
  {
    id: "f4",
    author: "Isabelle F.",
    role: "Directrice artistique, 50 ans",
    service: "Massage Abhyanga",
    content:
      "Sarah m'a accompagnée lors d'une période difficile avec une écoute rare et une bienveillance sincère. Je me suis sentie comprise et soutenue à chaque étape, sans que rien ne soit imposé. Un vrai cadeau que de rencontrer quelqu'un qui travaille avec autant d'intégrité.",
    source: "local",
  },
]

const MAX_DISPLAYED = 4

const googleReviews: Testimonial[] = (googleData.reviews ?? [])
  .slice(0, MAX_DISPLAYED)
  .map((r) => ({
    id: r.id,
    author: r.author,
    authorPhoto: r.authorPhoto,
    authorLink: r.authorLink,
    rating: r.rating,
    isoDate: r.isoDate,
    dateLabel: r.dateLabel,
    service: r.service ?? undefined,
    content: r.content,
    source: "google" as const,
  }))

const hasGoogle = googleReviews.length > 0

export const testimonials: Testimonial[] = hasGoogle ? googleReviews : fallback

export const aggregate: TestimonialAggregate = {
  rating: googleData.place?.rating ?? null,
  totalReviews: googleData.place?.totalReviews ?? 0,
  writeReviewLink: googleData.place?.writeReviewLink ?? null,
  profileLink: googleData.place?.profileLink ?? null,
}
