/**
 * Ateliers collectifs.
 *
 * Bêta : `calLink` vaut null → la section affiche les dates ci-dessous et
 * simule la réservation côté front. Une fois le compte Cal.com de Sarah prêt,
 * renseigner `calLink` (ex. "sarah-gueune/atelier") pour brancher le vrai agenda.
 */
export const calLink: string | null = null

export interface Workshop {
  id: string
  title: string
  /** ISO 8601, heure de Paris */
  start: string
  end: string
  seats: number
  seatsTaken: number
  location: string
}

const cabinet = "Cabinet · Saint-Alban"

export const workshops: Workshop[] = [
  {
    id: "2026-10-13",
    title: "Cercle de reconnexion au cœur",
    start: "2026-10-13T14:00:00+02:00",
    end: "2026-10-13T16:00:00+02:00",
    seats: 8,
    seatsTaken: 5,
    location: cabinet,
  },
  {
    id: "2026-10-27",
    title: "Méditation & soin énergétique en groupe",
    start: "2026-10-27T18:30:00+01:00",
    end: "2026-10-27T20:30:00+01:00",
    seats: 8,
    seatsTaken: 8,
    location: cabinet,
  },
  {
    id: "2026-11-10",
    title: "Atelier Ayurvéda : accueillir l'hiver",
    start: "2026-11-10T14:00:00+01:00",
    end: "2026-11-10T16:00:00+01:00",
    seats: 8,
    seatsTaken: 2,
    location: cabinet,
  },
  {
    id: "2026-11-24",
    title: "Cercle de reconnexion au cœur",
    start: "2026-11-24T18:30:00+01:00",
    end: "2026-11-24T20:30:00+01:00",
    seats: 8,
    seatsTaken: 0,
    location: cabinet,
  },
]
