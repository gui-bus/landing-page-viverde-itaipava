'use client'

export function ManifestoSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-[url('/utils/bg_scroll_section.webp')] bg-cover bg-center bg-fixed text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-0" />
      <div className="relative z-10 max-w-4xl">
        <p className="text-[#c7b88d] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
          Um lugar fora do comum
        </p>
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight text-white">
          A natureza não é<br />
          <em className="italic text-[#d2dbc9]">paisagem.</em><br />
          É vizinhança.
        </h2>
      </div>
    </section>
  )
}
