import { useEffect, useState } from "react"
import { demoWorkshops, sheetCsvUrl, showDemoWorkshops, type Workshop } from "../../data/workshops"
import { workshopsFromCsv } from "../../lib/workshopsSheet"

export type WorkshopsState = { status: "loading" } | { status: "ready"; items: Workshop[] } | { status: "error" }

const withDemo = (items: Workshop[]) =>
  showDemoWorkshops ? [...items, ...demoWorkshops].sort((a, b) => a.date.getTime() - b.date.getTime()) : items

/** Ateliers à venir, lus dans le Google Sheet de Sarah. */
export function useWorkshops(): WorkshopsState {
  const [state, setState] = useState<WorkshopsState>(
    sheetCsvUrl ? { status: "loading" } : { status: "ready", items: demoWorkshops },
  )

  useEffect(() => {
    if (!sheetCsvUrl) return
    const ctrl = new AbortController()
    fetch(sheetCsvUrl, { signal: ctrl.signal, cache: "no-store" })
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((csv) => setState({ status: "ready", items: withDemo(workshopsFromCsv(csv)) }))
      .catch(() => !ctrl.signal.aborted && setState({ status: "error" }))
    return () => ctrl.abort()
  }, [])

  return state
}
