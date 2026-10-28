/**
 * Ateliers collectifs.
 *
 * Les dates et les places restantes sont gérées par Sarah dans un Google Sheet
 * publié au format CSV (Fichier → Partager → Publier sur le web → CSV).
 * Colonnes attendues : Date | Horaire | Atelier | Places totales | Places restantes
 *
 * Tant que `sheetCsvUrl` vaut null, la section affiche `demoWorkshops`.
 */
export const sheetCsvUrl: string | null =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpcgVgy_CrFzsW7D-yABnxqPZjC879rvlHTfnLD2oYhANw0ieTVfe-3OHf7dFpwDL5Ke6c8qdf8y7W/pub?gid=0&single=true&output=csv"

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
}

const demo = (iso: string, time: string, title: string, seatsLeft: number): Workshop => ({
  id: `${iso}-${time}`,
  date: new Date(`${iso}T00:00:00`),
  time,
  title,
  seatsTotal: 8,
  seatsLeft,
})

export const demoWorkshops: Workshop[] = [
  demo("2026-10-08", "14h – 16h", "Cercle de reconnexion au cœur", 3),
  demo("2026-10-22", "18h30 – 20h30", "Méditation & soin énergétique en groupe", 0),
  demo("2026-11-05", "14h – 16h", "Atelier Ayurvéda : accueillir l'hiver", 6),
  demo("2026-11-19", "18h30 – 20h30", "Cercle de reconnexion au cœur", 8),
]
