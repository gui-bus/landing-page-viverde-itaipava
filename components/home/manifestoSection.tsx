'use client'

export function ManifestoSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-[url('/utils/bg_scroll_section.webp')] bg-cover bg-center bg-fixed text-white flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div
        aria-hidden="true"
        className="absolute -right-16 sm:-right-24 md:-right-32 -bottom-16 sm:-bottom-24 md:-bottom-32 w-[clamp(600px,90vw,1450px)] pointer-events-none select-none z-0 opacity-[0.05] flex justify-end items-end"
      >
        <img
          src="/logo/icon_white.svg"
          alt=""
          className="w-full h-auto object-contain object-right-bottom"
        />
      </div>

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

