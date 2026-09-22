'use client'

import { ArrowUpRight } from 'lucide-react'

export function ConceptSection() {
  return (
    <section id="conceito" className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-transparent text-[#24271d] dark:text-[#f1efe8] transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-3">
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold">
            O conceito
          </p>
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight">
            Menos pressa.<br />
            Mais <em className="italic text-[#b7a77f]">presença.</em>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:pt-3">
          <p className="text-base sm:text-lg text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
            Entre montanhas, vales e uma natureza exuberante, nasce um lugar para viver com mais presença. O Viverde é o encontro delicado entre arquitetura, conforto e a liberdade de estar perto do que realmente importa.
          </p>
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 border-b border-current pb-1 mt-6 text-xs uppercase tracking-widest font-semibold hover:text-[#b7a77f] transition-colors"
          >
            Conheça o projeto <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-black/10 dark:border-white/10">
        <div className="flex items-start gap-4 p-5 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="text-2xl text-[#b7a77f]">✦</span>
          <div>
            <strong className="block text-sm sm:text-base font-semibold text-[#24271d] dark:text-[#f1efe8]">Casas de 3 e 4 suítes</strong>
            <small className="text-xs text-[#73786e] dark:text-[#a4aa9d]">Espaços pensados para acolher</small>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="text-2xl text-[#b7a77f]">⌂</span>
          <div>
            <strong className="block text-sm sm:text-base font-semibold text-[#24271d] dark:text-[#f1efe8]">Lazer privativo</strong>
            <small className="text-xs text-[#73786e] dark:text-[#a4aa9d]">Piscina aquecida e jardim</small>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="text-2xl text-[#b7a77f]">◒</span>
          <div>
            <strong className="block text-sm sm:text-base font-semibold text-[#24271d] dark:text-[#f1efe8]">Segurança 24h</strong>
            <small className="text-xs text-[#73786e] dark:text-[#a4aa9d]">Condomínio fechado exclusivo</small>
          </div>
        </div>
      </div>
    </section>
  )
}
