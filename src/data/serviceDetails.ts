/**
 * Contenu des pages de soin (/soins/<id>/).
 *
 * Les textes « métier » de Sarah (description, bienfaits, durée, prix, modalité)
 * restent dans `services.ts`. Le reste est provisoire (textes génériques, à
 * remplacer par les siens), sauf les parties listées dans `fromSarah` et le
 * texte `engagement`, repris d'elle.
 */

export interface ServiceStep {
  title: string
  /** Repère de temps indicatif, affiché sur le fil du déroulé */
  time?: string
  text: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceDetail {
  /** Formes courtes pour l'en-tête et la barre de contact du téléphone */
  shortName: string
  shortDuration: string
  shortModality: string
  /** Comment désigner la prestation dans les titres (par défaut « ce soin ») */
  noun?: string
  /** Une phrase d'accroche sous le nom du soin */
  tagline: string
  forWhom: string[]
  steps: ServiceStep[]
  /** Déroulé d'une séance à distance (absent si le soin se fait uniquement au cabinet) */
  remote?: string[]
  /** Dernière étape « Et après » du déroulé (facultative) */
  after?: string
  /** Titre du déroulé et libellé du lien de l'en-tête (par défaut : une séance) */
  stepsTitle?: string
  stepsLink?: string
  /** Texte de Sarah, à la première personne, signé de son prénom */
  engagement?: { title: string; paragraphs: string[] }
  /** Titre et texte du bloc de contact en bas de page */
  contactLead?: { title: string; text: string }
  /** Parties écrites par Sarah : la pastille « texte d'exemple » n'y apparaît pas */
  fromSarah?: ("tagline" | "steps" | "forWhom" | "faq" | "remote")[]
  faq: ServiceFaq[]
  /** Auteurs des avis Google à afficher (dans l'ordre), pris dans google-reviews.json */
  reviews: string[]
  /** Avis transmis par Sarah pour ce soin précis ; affichés à la place de `reviews` */
  ownReviews?: {
    author: string
    content: string
    /** « google » : avis publié sur sa fiche Google ; « sarah » : reçu directement par Sarah */
    source: "google" | "sarah"
    rating?: number
    date?: string
  }[]
  /** Photos de la page : la première sert de visuel principal */
  photos: {
    src: string
    alt: string
    /** cadrage (object-position) */
    position?: string
    /** Légende manuscrite sous l'arche (par défaut « au cabinet, à Saint-Alban ») ; null = aucune */
    caption?: string | null
    /** Illustration sur fond papier : affichée en entier, sans être recadrée */
    illustration?: boolean
  }[]
}

const welcomeStep: ServiceStep = {
  title: "L’échange",
  time: "≈ 10 min",
  text: "Vous dites ce qui vous amène et ce que vous ressentez en ce moment. Rien n'est obligatoire : vous partagez ce que vous souhaitez.",
}

const remoteSteps = [
  "Vous convenez avec Sarah d'un jour et d'une heure. Un premier appel permet de faire le point sur ce qui vous amène.",
  "À l'heure dite, vous vous installez chez vous, au calme, allongé(e) ou assis(e), téléphone en silencieux.",
  "Sarah réalise le soin à distance pendant que vous vous laissez aller, sans rien avoir à faire.",
  "Elle vous rappelle ensuite pour échanger sur vos ressentis et sur ce qu'elle a perçu.",
]

export const serviceDetails: Record<string, ServiceDetail> = {
  "nettoyage-energetique": {
    shortName: "Nettoyage énergétique",
    shortDuration: "≈ 1 h",
    shortModality: "Au cabinet ou à distance",
    tagline: "Se délester de ce qui pèse, pour repartir plus léger.",
    forWhom: [
      "Vous vous sentez lourd(e), fatigué(e), sans vraiment savoir pourquoi.",
      "Vous sortez d'une période chargée : surmenage, conflit, deuil, changement de vie.",
      "Vous avez envie de faire le vide et de repartir sur une base apaisée.",
    ],
    steps: [
      welcomeStep,
      {
        title: "L’installation",
        time: "≈ 5 min",
        text: "Vous vous allongez habillé(e) sur la table, une couverture sur vous si vous le souhaitez. Il n'y a rien à faire, rien à réussir.",
      },
      {
        title: "Le soin",
        time: "30 à 45 min",
        text: "Sarah travaille dans votre champ énergétique, sans manipulation. Elle repère les zones chargées, les libère, puis rééquilibre l'ensemble.",
      },
      {
        title: "Le retour",
        time: "≈ 10 min",
        text: "Vous prenez le temps de revenir à votre rythme, puis vous échangez sur vos ressentis et sur ce que Sarah a perçu.",
      },
    ],
    remote: remoteSteps,
    after:
      "Buvez de l'eau et accordez-vous un moment calme le reste de la journée. Certaines personnes se sentent plus légères tout de suite, d'autres dans les jours qui suivent.",
    faq: [
      {
        question: "Dois-je me déshabiller ?",
        answer: "Non, vous restez habillé(e) pendant tout le soin.",
      },
      {
        question: "Est-ce que je vais ressentir quelque chose ?",
        answer:
          "Chacun le vit à sa façon : chaleur, picotements, détente profonde, images, ou simplement un grand calme. Il n'y a pas de bonne façon de vivre un soin.",
      },
      {
        question: "Une séance suffit-elle ?",
        answer:
          "Souvent, une séance permet déjà de faire le vide. Si vous traversez une période longue ou difficile, Sarah peut vous proposer un accompagnement sur plusieurs séances.",
      },
    ],
    reviews: ["hln psq", "Manon Benoit"],
    photos: [
      { src: "/images/Screenshot_20251129_182735_Gallery.webp", alt: "La salle de soin du cabinet, table de soin près de la fenêtre" },
      { src: "/images/espace-massage.webp", alt: "Le cabinet : table de soin, tapis et attrape-rêves au mur" },
    ],
  },

  lahochi: {
    shortName: "LaHoChi",
    shortDuration: "≈ 1 h",
    shortModality: "Au cabinet ou à distance",
    tagline: "Une lumière douce transmise par les mains, pour lâcher prise.",
    forWhom: [
      "Le stress et les pensées tournent en boucle et vous n'arrivez plus à décrocher.",
      "Vous avez besoin de vous recharger après une période épuisante.",
      "Vous cherchez un soin très doux, pour se reconnecter à soi.",
    ],
    steps: [
      welcomeStep,
      {
        title: "L’installation",
        time: "≈ 5 min",
        text: "Vous vous allongez habillé(e), les yeux fermés si vous le souhaitez. Une musique douce peut accompagner le soin.",
      },
      {
        title: "Le soin",
        time: "30 à 45 min",
        text: "Sarah pose délicatement les mains sur différentes zones du corps, de la tête aux pieds, ou les garde juste au-dessus. Vous n'avez qu'à recevoir.",
      },
      {
        title: "Le retour",
        time: "≈ 10 min",
        text: "Quelques minutes pour revenir en douceur, puis un échange sur ce que vous avez ressenti.",
      },
    ],
    remote: remoteSteps,
    after:
      "Gardez ce moment de douceur : évitez de vous presser juste après, buvez de l'eau et écoutez ce dont votre corps a besoin.",
    faq: [
      {
        question: "Les mains sont-elles posées sur moi ?",
        answer:
          "Oui, légèrement, sur des zones habillées et jamais intimes. Si vous préférez, Sarah peut garder les mains au-dessus du corps : dites-le-lui simplement.",
      },
      {
        question: "Faut-il connaître le LaHoChi pour en profiter ?",
        answer: "Pas du tout. Sarah vous explique le soin pendant l'échange du début et répond à vos questions.",
      },
      {
        question: "Le soin à distance est-il aussi efficace ?",
        answer:
          "Beaucoup de personnes le vivent aussi intensément qu'au cabinet. C'est une bonne option si vous habitez loin ou si vous préférez rester chez vous.",
      },
    ],
    reviews: ["Aurélie D", "Manon Benoit"],
    photos: [
      { src: "/images/20260425_202245.webp", alt: "Le coin bureau du cabinet, plantes et objets apaisants" },
      { src: "/images/Screenshot_20251129_182735_Gallery.webp", alt: "La salle de soin du cabinet, baignée de lumière" },
    ],
  },

  magnetisme: {
    shortName: "Magnétisme",
    shortDuration: "≈ 1 h",
    shortModality: "Au cabinet ou à distance",
    tagline: "Un soin ciblé, là où ça coince.",
    forWhom: [
      "Une tension ou une douleur revient toujours au même endroit.",
      "Votre sommeil est perturbé depuis un moment.",
      "Vous traversez une période d'épuisement et vous cherchez un soutien, en complément de votre suivi médical.",
    ],
    steps: [
      {
        ...welcomeStep,
        text: "Vous parlez de ce qui vous gêne : où, depuis quand, dans quelles situations. Ensemble, vous définissez ce sur quoi Sarah va travailler.",
      },
      {
        title: "L’installation",
        time: "≈ 5 min",
        text: "Vous vous allongez ou vous vous asseyez, habillé(e), dans la position la plus confortable pour vous.",
      },
      {
        title: "Le soin",
        time: "30 à 45 min",
        text: "Sarah impose les mains sur la zone concernée, ou juste au-dessus. Beaucoup de personnes ressentent une chaleur qui se diffuse.",
      },
      {
        title: "Le point",
        time: "≈ 10 min",
        text: "Vous échangez sur vos ressentis et Sarah vous dit si quelques séances de plus lui semblent utiles.",
      },
    ],
    remote: remoteSteps,
    after:
      "Reposez-vous, buvez de l'eau et observez comment vous vous sentez dans les jours qui suivent : c'est précieux pour la suite.",
    faq: [
      {
        question: "Le magnétisme remplace-t-il un traitement ?",
        answer:
          "Non. Le magnétisme vient en complément d'un suivi médical, jamais à sa place. N'arrêtez jamais un traitement sans l'avis de votre médecin.",
      },
      {
        question: "Combien de séances faut-il ?",
        answer: "Cela dépend de ce qui vous amène. Sarah fait le point avec vous à la fin de la première séance.",
      },
      {
        question: "Les enfants peuvent-ils recevoir un soin ?",
        answer: "Parlez-en avec Sarah : elle vous dira ce qui est possible selon l'âge de l'enfant et la situation.",
      },
    ],
    reviews: ["hln psq", "gadette gadette"],
    photos: [
      { src: "/images/20251202_105819.webp", alt: "La table de soin préparée au cabinet", position: "50% 20%" },
      { src: "/images/espace-massage.webp", alt: "Le cabinet : table de soin, tapis et attrape-rêves au mur" },
    ],
  },

  abhyanga: {
    shortName: "Abhyanga",
    shortDuration: "2 h",
    shortModality: "Au cabinet",
    tagline: "Un massage enveloppant à l'huile tiède, pour se déposer.",
    forWhom: [
      "Votre corps est noué, tendu, et vous avez besoin de relâcher.",
      "La fatigue nerveuse s'accumule et vous n'arrivez plus à vous poser.",
      "Vous avez envie de prendre soin de vous, tout simplement, et de vous reconnecter à votre corps.",
    ],
    steps: [
      {
        ...welcomeStep,
        text: "Vous parlez de vos besoins, des zones sensibles et de vos préférences, pour que le massage vous ressemble.",
      },
      {
        title: "L’installation",
        time: "≈ 5 min",
        text: "Vous vous installez seul(e) sur la table, sous une serviette. Seule la zone massée est découverte, dans le respect de votre pudeur.",
      },
      {
        title: "Le massage",
        time: "1h30",
        text: "Une huile tiède, des gestes longs, fluides et rythmés, de la tête aux pieds. Le corps se relâche peu à peu, le mental suit.",
      },
      {
        title: "Le retour au calme",
        time: "≈ 15 min",
        text: "Quelques minutes de repos avant de vous rhabiller, puis un échange tranquille sur ce que vous avez ressenti.",
      },
    ],
    after:
      "Gardez l'huile sur la peau quelques heures si vous le pouvez, buvez chaud et prévoyez une fin de journée sans course.",
    faq: [
      {
        question: "Que dois-je porter ?",
        answer: "Vous gardez vos sous-vêtements. Sarah vous couvre d'une serviette et ne découvre que la zone qu'elle masse.",
      },
      {
        question: "Y a-t-il des contre-indications ?",
        answer:
          "Signalez à Sarah une grossesse, de la fièvre, une blessure récente ou un problème de peau : elle adaptera ou reportera le massage.",
      },
      {
        question: "Pourquoi 2 heures pour 1h30 de massage ?",
        answer: "Pour prendre le temps de l'échange avant, et du retour au calme après. Rien n'est minuté à la seconde.",
      },
    ],
    reviews: ["Margot Dennielou", "Manon Benoit"],
    photos: [
      { src: "/images/1000015270.webp", alt: "Massage Abhyanga du dos à l'huile au cabinet" },
      { src: "/images/1000015277.webp", alt: "Massage Abhyanga de la nuque et des épaules" },
      { src: "/images/1000015278.webp", alt: "Massage Abhyanga des jambes" },
    ],
  },

  accompagnement: {
    shortName: "Isis, 2 mois",
    noun: "cet accompagnement",
    shortDuration: "2 mois · 4 soins",
    shortModality: "Au cabinet ou à distance",
    tagline: "Un voyage intérieur de deux mois.",
    fromSarah: ["tagline", "steps"],
    forWhom: [
      "Vous avez envie de prendre un vrai temps pour vous, sur la durée, plutôt qu'une séance ponctuelle.",
      "Vous êtes prêt(e) à vous impliquer entre les séances, à votre rythme.",
      "Vous ne savez pas quel soin choisir et vous préférez être guidé(e).",
    ],
    stepsTitle: "Ce que comprend votre parcours",
    stepsLink: "Voir le parcours",
    steps: [
      {
        title: "4 soins personnalisés",
        text: "Quatre soins énergétiques, choisis ensemble selon vos besoins et votre évolution, pour vous accompagner en profondeur.",
      },
      {
        title: "Des exercices entre les séances",
        text: "Des invitations simples et bienveillantes pour poursuivre votre cheminement dans votre quotidien, à votre rythme.",
      },
      {
        title: "Un soutien personnalisé",
        text: "Un accompagnement à chaque étape, pour vous écouter, vous guider et vous encourager tout au long de ces deux mois.",
      },
    ],
    engagement: {
      title: "Un accompagnement qui demande un engagement",
      paragraphs: [
        "L'Accompagnement Isis est avant tout un travail qui se construit à deux. Au-delà des quatre soins proposés, il repose sur une véritable implication personnelle tout au long des deux mois.",
        "Les exercices et les temps de réflexion entre les séances font pleinement partie du parcours. Ils permettent de prolonger le travail engagé pendant les soins et d'avancer progressivement dans son cheminement personnel.",
        "Cet accompagnement demande donc de la disponibilité, de la régularité et une réelle volonté de s'investir. Mon rôle est d'accompagner, de guider et de soutenir chaque étape, mais le cheminement nécessite également un engagement personnel pour en tirer pleinement profit.",
      ],
    },
    contactLead: {
      title: "Vous souhaitez en savoir plus ?",
      text: "Échangeons ensemble pour voir si cet accompagnement vous correspond. Appelez Sarah, envoyez-lui un SMS ou un e-mail : elle prend le temps de vous répondre.",
    },
    remote: [
      "Selon les soins choisis, une partie du parcours peut se faire à distance.",
      "Les échanges et le soutien entre les séances se font par téléphone ou par message.",
      "Le massage Abhyanga, lui, se fait uniquement au cabinet.",
    ],
    faq: [
      {
        question: "Que comprend l'Accompagnement Isis ?",
        answer:
          "Quatre soins énergétiques choisis ensemble, des exercices entre les séances et un soutien personnalisé pendant deux mois, pour 350 €.",
      },
      {
        question: "Peut-on mélanger cabinet et distance ?",
        answer: "Oui, selon les soins. Seul le massage Abhyanga demande de venir au cabinet.",
      },
      {
        question: "Et si je ne sais pas si c'est fait pour moi ?",
        answer: "Le plus simple est d'en parler avec Sarah : un premier échange permet de voir ensemble si cet accompagnement vous correspond.",
      },
    ],
    reviews: [],
    ownReviews: [
      {
        author: "Amélie GALAND",
        source: "google",
        rating: 5,
        date: "novembre 2026",
        content:
          "J'ai eu le plaisir d'effectuer un suivi avec Sarah et je ne peux que recommander son accompagnement ! Sa bienveillance, la précision des messages qu'elle perçoit, le regain d'énergie, les compréhensions, les libérations, les voies de réflexion, et aussi et surtout, les ressentis au cours des soins qui étaient dingues !! Alors que l'on a tout fait à distance ! Ça m'étonnera toujours ! Merci encore Sarah pour tout et pour ta belle lumière.",
      },
      {
        author: "Une personne accompagnée",
        source: "sarah",
        content:
          "L'accompagnement Isis, 4 séances qui ne se ressemblaient pas. Entre soins énergétiques, massages et exercices, j'ai pu y trouver les clés afin de pouvoir avancer et évoluer dans ma vie. J'ai apprécié chaque séance.\n\nLe feeling est tout de suite passé avec Sarah. De nature douce et rassurante, elle a su trouver les mots à mettre sur mes maux, et m'éclairer sur le chemin que je devais prendre. Elle s'est toujours rendue disponible lorsque j'en avais besoin, j'ai apprécié le fait d'avoir un échange permanent. Je ne me suis jamais sentie seule entre nos séances. Les exercices qu'elle m'a donnés ont été d'une grande aide et très libérateurs.\n\nSarah a toujours su trouver les mots, les paroles et les gestes qu'il fallait. Si c'était à refaire, je le recommencerais encore et encore !\n\nMerci ✨",
      },
    ],
    photos: [
      {
        src: "/images/isis.webp",
        alt: "Illustration d'Isis, ailes déployées sous un disque solaire, une croix ankh à ses pieds",
        caption: null,
        illustration: true,
      },
      { src: "/images/espace-massage.webp", alt: "Le cabinet : table de soin, tapis et attrape-rêves au mur" },
    ],
  },
}
