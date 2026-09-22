'use client'

import { ArrowDown } from 'lucide-react'
import { Header } from './header'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[url('/utils/bg_hero_section.webp')] bg-cover bg-center text-white flex flex-col justify-between [clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-3rem),0_100%)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-0 pointer-events-none" />

      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 sm:bottom-1 md:bottom-2 w-[clamp(240px,44vw,620px)] pointer-events-none select-none z-10 opacity-100 flex justify-end"
      >
        <img
          src="/logo/icon_cream.svg"
          alt=""
          className="w-full h-auto object-contain object-right"
        />
      </div>

      <Header />

      <div className="relative z-10 px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-28 max-w-6xl">
        <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest mb-3 font-semibold">
          Um novo ritmo para a vida
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl  tracking-tight leading-[0.92] text-white font-light">
          Viver bem<br />
          <em className="text-[#B88A2D] not-italic">muda tudo.</em>
        </h1>
        <p className="text-base sm:text-lg text-white/85 max-w-2xl mt-4 mb-6 leading-relaxed font-light">
          Um refúgio contemporâneo entre montanhas, onde arquitetura, natureza e tempo encontram o mesmo endereço.
        </p>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <a
            href="#conceito"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white hover:text-[#B88A2D] transition-colors group font-semibold"
          >
            <span className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#B88A2D] transition-colors">
              <ArrowDown size={15} />
            </span>
            Explorar o Viverde
          </a>
          <span className="border-l border-white/40 pl-4 text-xs tracking-wider uppercase text-white/70 leading-relaxed font-medium">
            40 casas autorais<br />em condomínio fechado
          </span>
        </div>
      </div>
    </section>
  )
}
