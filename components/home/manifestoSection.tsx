'use client'

export function ManifestoSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-[url('/utils/bg_scroll_section.webp')] bg-cover bg-center bg-fixed text-white flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-4 text-center">
          Um lugar fora do comum
        </p>
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white text-center uppercase font-light">
          A natureza não é paisagem. <br />
          <span className="font-medium">É vizinhança.</span>
        </h2>
      </div>
    </section>
  )
}

