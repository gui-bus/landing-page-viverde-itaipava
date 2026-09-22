'use client'

import { ArrowUpRight } from 'lucide-react'
import { AnimatedThemeToggler } from '@/components/ui/animatedThemeToggler'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 relative z-20">
      <a className="block w-28 sm:w-36 h-auto" href="#inicio">
        <img
          src="/logo/logo_white.svg"
          alt="Viverde"
          className="w-full h-auto max-h-9 object-contain block"
        />
      </a>

      <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-widest font-semibold text-white/90">
        <a href="#conceito" className="hover:text-[#B88A2D] transition-colors">
          O conceito
        </a>
        <a href="#galeria" className="hover:text-[#B88A2D] transition-colors">
          Galeria
        </a>
        <a href="#empreendimento" className="hover:text-[#B88A2D] transition-colors">
          O empreendimento
        </a>
        <a href="#filmes" className="hover:text-[#B88A2D] transition-colors">
          Filmes
        </a>
        <a href="/unidades" className="hover:text-[#B88A2D] transition-colors">
          Unidades disponíveis
        </a>
        <a
          className="border border-white/60 hover:bg-white hover:text-black transition-all px-4 py-2 text-[11px] uppercase tracking-wider flex items-center gap-2 text-white font-semibold"
          href="/contato"
        >
          Fale com a gente <ArrowUpRight size={14} />
        </a>
      </nav>

      <div className="flex items-center gap-4 text-white">
        <AnimatedThemeToggler className="text-white border-white/40 hover:border-white" />
        <a
          className="lg:hidden text-[11px] uppercase tracking-wider border border-white/50 px-3 py-1.5 rounded font-semibold text-white"
          href="/contato"
        >
          Contato
        </a>
      </div>
    </header>
  )
}
