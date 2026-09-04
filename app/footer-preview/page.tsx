import { Footer, FooterEditorial } from "@/components"

/**
 * Página temporal para comparar el footer actual contra la propuesta final
 * (mix de columnas editoriales + wordmark gigante + cursor follower).
 * Puedes borrar esta ruta cuando termines de decidir.
 *
 * Visítala en /footer-preview
 */
export default function FooterPreviewPage() {
  return (
    <main className="divide-y divide-dashed divide-red-400">
      <section>
        <div className="px-8 py-4 text-sm font-medium uppercase tracking-wide text-neutral-400">
          Actual
        </div>
        <Footer />
      </section>

      <section>
        <div className="px-8 py-4 text-sm font-medium uppercase tracking-wide text-neutral-400">
          Propuesta final — Editorial + Wordmark + Cursor follower
        </div>
        <FooterEditorial />
      </section>
    </main>
  )
}
