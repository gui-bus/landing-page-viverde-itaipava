'use client'

import { ArrowUpRight } from 'lucide-react'

export function ConceptSection() {
  return (
    <section id="conceito" className="pt-16 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-8 md:px-12 bg-transparent text-[#24271d] dark:text-[#f1efe8] transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-7 flex items-start gap-4 sm:gap-6">
          <div className="shrink-0 pt-2">
            <span className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.25em] font-semibold [writing-mode:vertical-rl] rotate-180 select-none block">
              O conceito
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight">
            Menos pressa.<br />
            Mais <em className="italic text-[#B88A2D]">presença.</em>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-3">
          <p className="text-base sm:text-lg text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
            Entre montanhas, vales e uma natureza exuberante, nasce um lugar para viver com mais presença. O Viverde é o encontro delicado entre arquitetura, conforto e a liberdade de estar perto do que realmente importa.
          </p>
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 border-b border-current pb-1 mt-6 text-xs uppercase tracking-widest font-semibold hover:text-[#B88A2D] transition-colors"
          >
            Conheça o projeto <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 mt-16 border-t border-black/10 dark:border-white/10">
        <div className="relative pt-6">
          <span
            aria-hidden="true"
            className="font-heading font-black tabular-nums text-7xl sm:text-8xl lg:text-9xl text-black/[0.06] dark:text-white/[0.06] absolute -top-5 -left-1 select-none pointer-events-none leading-none tracking-tighter"
          >
            01
          </span>
          <div className="relative z-10 space-y-2">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[#24271d] dark:text-[#f1efe8]">
              Casas de 3 e 4 suítes
            </h3>
            <p className="text-sm text-[#73786e] dark:text-[#a4aa9d] font-light leading-relaxed">
              Projetos autorais com integração total, iluminação natural generosa e acabamentos em alto padrão.
            </p>
          </div>
        </div>

        <div className="relative pt-6">
          <span
            aria-hidden="true"
            className="font-heading font-black tabular-nums text-7xl sm:text-8xl lg:text-9xl text-black/[0.06] dark:text-white/[0.06] absolute -top-5 -left-1 select-none pointer-events-none leading-none tracking-tighter"
          >
            02
          </span>
          <div className="relative z-10 space-y-2">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[#24271d] dark:text-[#f1efe8]">
              Lazer privativo
            </h3>
            <p className="text-sm text-[#73786e] dark:text-[#a4aa9d] font-light leading-relaxed">
              Piscina aquecida com deck, varanda gourmet e jardim privativos para relaxar com total privacidade.
            </p>
          </div>
        </div>

        <div className="relative pt-6">
          <span
            aria-hidden="true"
            className="font-heading font-black tabular-nums text-7xl sm:text-8xl lg:text-9xl text-black/[0.06] dark:text-white/[0.06] absolute -top-5 -left-1 select-none pointer-events-none leading-none tracking-tighter"
          >
            03
          </span>
          <div className="relative z-10 space-y-2">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[#24271d] dark:text-[#f1efe8]">
              Condomínio fechado
            </h3>
            <p className="text-sm text-[#73786e] dark:text-[#a4aa9d] font-light leading-relaxed">
              Segurança 24h e infraestrutura subterrânea em localização privilegiada e silenciosa em Itaipava.
            </p>
          </div>
        </div>

        <div className="relative pt-6">
          <span
            aria-hidden="true"
            className="font-heading font-black tabular-nums text-7xl sm:text-8xl lg:text-9xl text-black/[0.06] dark:text-white/[0.06] absolute -top-5 -left-1 select-none pointer-events-none leading-none tracking-tighter"
          >
            04
          </span>
          <div className="relative z-10 space-y-2">
            <h3 className="font-heading text-lg sm:text-xl font-medium text-[#24271d] dark:text-[#f1efe8]">
              Infraestrutura de lazer
            </h3>
            <p className="text-sm text-[#73786e] dark:text-[#a4aa9d] font-light leading-relaxed">
              Salão de festas, churrasqueira, parquinho infantil, quadra poliesportiva e fogueira de chão ao ar livre.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
