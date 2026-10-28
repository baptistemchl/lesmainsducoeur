export interface NavItem {
  label: string
  href: string
}

// Liens absolus (/#…) : ils fonctionnent depuis l'accueil comme depuis /ateliers/
export const navItems: NavItem[] = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Soins", href: "/#soins" },
  { label: "Approche", href: "/#approche" },
  { label: "Ayurvéda", href: "/#ayurveda" },
  { label: "Ateliers", href: "/ateliers/" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
]

/** Lien de menu correspondant à la page affichée */
export const isCurrentPage = (href: string) =>
  typeof window !== "undefined" && !href.includes("#") && window.location.pathname.startsWith(href.replace(/\/$/, ""))
