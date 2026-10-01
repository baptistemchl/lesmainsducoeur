import type { Workshop } from "../data/workshops"

/** Découpe un CSV (guillemets et virgules échappées comprises) en lignes de cellules. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ""
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') {
        quoted = false
      } else {
        cell += c
      }
    } else if (c === '"') {
      quoted = true
    } else if (c === ",") {
      row.push(cell)
      cell = ""
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++
      row.push(cell)
      rows.push(row)
      row = []
      cell = ""
    } else {
      cell += c
    }
  }
  if (cell || row.length) {
    row.push(cell)
    rows.push(row)
  }
  return rows
}

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim()

/** "08/10/2026", "8/10/26" ou "2026-10-08" → Date à minuit, heure locale. */
function parseDate(raw: string): Date | null {
  const s = raw.trim()
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
  if (m) return new Date(+m[1], +m[2] - 1, +m[3])
  m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})$/)
  if (m) {
    const year = m[3].length === 2 ? 2000 + +m[3] : +m[3]
    return new Date(year, +m[2] - 1, +m[1])
  }
  return null
}

const toInt = (raw: string | undefined) => {
  const n = parseInt((raw ?? "").replace(/\D/g, ""), 10)
  return Number.isFinite(n) ? n : null
}

/** Transforme le CSV du Sheet en ateliers à venir, triés par date. Les lignes invalides sont ignorées. */
export function workshopsFromCsv(text: string, today = new Date()): Workshop[] {
  const [header, ...lines] = parseCsv(text)
  if (!header) return []

  const cols = header.map(normalize)
  const col = (name: string) => cols.findIndex((c) => c.startsWith(name))
  const iDate = col("date")
  const iTime = col("horaire")
  const iTitle = col("atelier")
  const iTotal = col("places totales")
  const iLeft = col("places restantes")

  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  return lines
    .map((cells): Workshop | null => {
      const date = parseDate(cells[iDate] ?? "")
      const left = toInt(cells[iLeft])
      if (!date || left === null || date < startOfToday) return null
      const time = (cells[iTime] ?? "").trim()
      return {
        id: `${date.toISOString()}-${time}`,
        date,
        time,
        title: (cells[iTitle] ?? "").trim() || "Atelier collectif",
        seatsTotal: Math.max(toInt(cells[iTotal]) ?? 8, left),
        seatsLeft: Math.max(left, 0),
      }
    })
    .filter((w): w is Workshop => w !== null)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}
