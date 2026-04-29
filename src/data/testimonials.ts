export interface Testimonial {
  id: string
  author: string
  role?: string
  content: string
  service?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Marie-Laure D.",
    role: "Consultante, 38 ans",
    service: "Magnétisme",
    content:
      "Après ma séance avec Sarah, j'ai ressenti une légèreté que je n'avais pas connue depuis des années. Son approche est à la fois douce et profonde — on se sent vraiment pris en soin, jamais jugé. Je repars à chaque fois avec quelque chose de plus léger à porter.",
  },
  {
    id: "2",
    author: "Camille R.",
    role: "Enseignante, 44 ans",
    service: "Nettoyage énergétique",
    content:
      "Je suis venue avec beaucoup de scepticisme, et je suis repartie bouleversée dans le bon sens du terme. Sarah sait créer un espace de confiance absolue. Elle ne force rien, elle accompagne. Je recommande sans hésiter à celles et ceux qui cherchent un ancrage sincère.",
  },
  {
    id: "3",
    author: "Sophie M.",
    role: "Infirmière, 31 ans",
    service: "Soin Lahochi",
    content:
      "Un vrai moment de grâce. Le soin Lahochi m'a permis de lâcher des tensions que je portais depuis longtemps, sans même les nommer. Sarah a une façon d'être présente, sereine et intuitive, qui met immédiatement à l'aise. Merci pour cette parenthèse précieuse.",
  },
  {
    id: "4",
    author: "Isabelle F.",
    role: "Directrice artistique, 50 ans",
    service: "Massage Abhyanga",
    content:
      "Sarah m'a accompagnée lors d'une période difficile avec une écoute rare et une bienveillance sincère. Je me suis sentie comprise et soutenue à chaque étape, sans que rien ne soit imposé. Un vrai cadeau que de rencontrer quelqu'un qui travaille avec autant d'intégrité.",
  },
]
