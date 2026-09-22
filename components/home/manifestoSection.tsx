'use client'

export function ManifestoSection() {
  return (
    <section className="relative py-28 sm:py-36 md:py-48 px-4 sm:px-8 md:px-12 bg-[url('/utils/bg_scroll_section.webp')] bg-cover bg-center bg-fixed text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-0" />
      <div className="relative z-10 max-w-4xl">
        <p className="text-[#c7b88d] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Um lugar fora do comum
        </p>
        <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl font-normal leading-[0.95] tracking-tight text-white">
          A natureza não é<br />
          <em className="italic text-[#d2dbc9]">paisagem.</em><br />
          É vizinhança.
        </h2>
        <span className="block w-px h-20 bg-white/60 mt-10" />
      </div>
    </section>
  )
}
