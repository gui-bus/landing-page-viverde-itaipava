'use client'

import { ArrowDown } from 'lucide-react'
import { Header } from './header'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[url('/utils/bg_hero_section.webp')] bg-cover bg-center text-white flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-0 pointer-events-none" />

      {}
      <div
        aria-hidden="true"
        className="absolute right-[-0.03em] bottom-4 sm:bottom-6 text-white/[0.12] text-[clamp(90px,18vw,270px)] font-bold tracking-[-0.08em] leading-[0.7] pointer-events-none select-none z-10 font-heading"
      >
        VIVERDE
      </div>

      <Header />

      <div className="relative z-10 px-4 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 max-w-4xl">
        <p className="text-[#c7b88d] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          Itaipava · Rio de Janeiro · 2026
        </p>
        <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest mb-4 font-semibold">
          Um novo ritmo para a vida
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.95] text-white">
          Viver bem<br />
          <em className="text-[#b7a77f] font-normal not-italic">muda tudo.</em>
        </h1>
        <p className="text-base sm:text-lg text-white/85 max-w-lg mt-6 mb-8 leading-relaxed font-light">
          Um refúgio contemporâneo entre montanhas, onde arquitetura, natureza e tempo encontram o mesmo endereço.
        </p>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <a
            href="#conceito"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white hover:text-[#b7a77f] transition-colors group font-semibold"
          >
            <span className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#b7a77f] transition-colors">
              <ArrowDown size={15} />
            </span>
            Explorar o Viverde
          </a>
          <span className="border-l border-white/40 pl-4 text-xs tracking-wider uppercase text-white/70 leading-relaxed font-medium">
            20 casas autorais<br />em condomínio fechado
          </span>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-12 py-6 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60 border-t border-white/10">
        <span>Um lugar para voltar</span>
        <span>01 · 04</span>
      </div>
    </section>
  )
}
