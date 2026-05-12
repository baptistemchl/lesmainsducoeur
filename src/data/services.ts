export interface Service {
  id: string
  name: string
  description: string
  benefits: string[]
  duration: string
  price: string
  modality: string
  icon: string
  image: string
  color: string
}

export const services: Service[] = [
  {
    id: "nettoyage-energetique",
    name: "Nettoyage énergétique",
    icon: "❋",
    image: "/images/Screenshot_20251129_182735_Gallery.webp",
    color: "#D36969",
    description:
      "Le nettoyage énergétique consiste à nettoyer les corps énergétiques et à les rééquilibrer. Il vous délivre des énergies stagnantes dont vous n'avez plus l'utilité, pour retrouver une sensation de légèreté et de clarté.",
    benefits: [
      "Libération des énergies négatives accumulées",
      "Réduction du stress et des tensions émotionnelles",
      "Amélioration de la clarté mentale",
      "Sensation de légèreté et de sérénité",
      "Renforce l'équilibre global du corps et de l'esprit",
    ],
    duration: "≈ 1h (30 à 45 min de soin)",
    price: "70 €",
    modality: "En présentiel ou à distance",
  },
  {
    id: "lahochi",
    name: "Soin LaHoChi",
    icon: "◈",
    image: "/images/20260425_202245.webp",
    color: "#8B5CF6",
    description:
      "Le LaHoChi est une haute fréquence de lumière de guérison, transmise par l'apposition des mains. Un soin profond qui invite au lâcher-prise et à la reconnexion à soi.",
    benefits: [
      "Dissout les blocages énergétiques",
      "Relaxe et élimine le stress",
      "Rétablit la bonne circulation de l'énergie",
      "Accélère le processus de guérison",
      "Renforce le système immunitaire",
      "Accroît le bien-être et l'énergie",
    ],
    duration: "≈ 1h (30 à 45 min de soin)",
    price: "70 €",
    modality: "En présentiel ou à distance",
  },
  {
    id: "magnetisme",
    name: "Séance de magnétisme",
    icon: "✦",
    image: "/images/20251202_105819.webp",
    color: "#F59E0B",
    description:
      "Une séance ciblée pour les soucis localisés ou les déséquilibres profonds. Par l'imposition des mains, le corps retrouve sa capacité naturelle à s'apaiser et à se rééquilibrer.",
    benefits: [
      "Douleurs physiques et tensions localisées",
      "Problèmes de peau",
      "Troubles du sommeil",
      "Accompagnement de la dépression et du burn-out",
    ],
    duration: "≈ 1h (30 à 45 min de soin)",
    price: "60 €",
    modality: "En présentiel ou à distance",
  },
  {
    id: "abhyanga",
    name: "Massage Abhyanga",
    icon: "⟡",
    image: "/images/1000015270.webp",
    color: "#FB7185",
    description:
      "Le massage ayurvédique Abhyanga est un soin issu de la tradition indienne, visant à rééquilibrer le corps et l'esprit. À travers des mouvements enveloppants, fluides et rythmés, il favorise la détente profonde, relance la circulation de l'énergie et libère les tensions physiques et émotionnelles.",
    benefits: [
      "Détente profonde et lâcher-prise",
      "Relance de la circulation énergétique",
      "Libération des tensions du corps",
      "Harmonie globale corps & esprit",
      "Recentrage et apaisement",
    ],
    duration: "2h (dont 1h30 de massage)",
    price: "90 €",
    modality: "En présentiel — table de massage, dans le respect de votre pudeur",
  },
]
