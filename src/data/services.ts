export interface Service {
  id: string
  name: string
  description: string
  benefit: string
  duration?: string
  icon: string
}

export const services: Service[] = [
  {
    id: "magnetisme",
    name: "Magnétisme",
    icon: "✦",
    description:
      "Un soin énergétique profond qui rééquilibre les flux vitaux du corps et apaise les tensions physiques et émotionnelles. Par l'imposition des mains et la circulation de l'énergie, le corps retrouve sa capacité naturelle à s'harmoniser.",
    benefit: "Apaisement, regain de vitalité, équilibre intérieur",
    duration: "60 min",
  },
  {
    id: "lahochi",
    name: "Soin Lahochi",
    icon: "◈",
    description:
      "Issue de la tradition hawaïenne, cette technique de guérison par imposition des mains invite à un lâcher-prise total et une reconnexion profonde à soi. Les fréquences transmises agissent avec douceur sur les plans physique, émotionnel et spirituel.",
    benefit: "Lâcher-prise, paix intérieure, reconnexion à soi",
    duration: "75 min",
  },
  {
    id: "nettoyage-energetique",
    name: "Nettoyage énergétique",
    icon: "❋",
    description:
      "Un accompagnement délicat pour libérer les énergies stagnantes et alléger le champ vibratoire. Ce soin invite à retrouver légèreté, clarté intérieure et un sentiment renouvelé de liberté émotionnelle.",
    benefit: "Légèreté, clarté, libération émotionnelle",
    duration: "60 min",
  },
  {
    id: "guidance",
    name: "Guidance",
    icon: "⟡",
    description:
      "Un espace d'écoute intuitive pour éclairer votre chemin, identifier les blocages et accueillir les messages de votre âme. Une séance de dialogue subtil avec vos propres ressources intérieures.",
    benefit: "Clarté, direction, confiance en soi",
    duration: "45 min",
  },
  {
    id: "guidance-deblocage",
    name: "Guidance & Déblocage",
    icon: "◇",
    description:
      "Un accompagnement complet alliant guidance intuitive et soin énergétique ciblé. Ensemble, ces deux approches permettent de nommer ce qui bloque, puis de le libérer en profondeur pour avancer avec plus de fluidité.",
    benefit: "Libération, fluidité, renouveau",
    duration: "90 min",
  },
  {
    id: "desenvoûtement",
    name: "Désenvoûtement",
    icon: "✧",
    description:
      "Un travail énergétique spécialisé pour libérer les influences extérieures indésirables et restaurer votre intégrité vibratoire. Un soin profond mené avec discernement, éthique et bienveillance absolue.",
    benefit: "Intégrité, protection, ancrage",
    duration: "90 min",
  },
]
