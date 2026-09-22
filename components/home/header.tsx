'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react'
import { AnimatedThemeToggler } from '@/components/ui/animatedThemeToggler'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const mobileDrawer =
    mounted && typeof document !== 'undefined'
      ? createPortal(
          <>
            <div
              className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div
              className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-[#121611] text-white z-[9999] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-white/10 transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <a
                    href="#inicio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-36 h-auto select-none"
                  >
                    <img
                      src="/logo/logo_white.svg"
                      alt="Viverde"
                      className="w-full h-auto max-h-10 object-contain"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
                    aria-label="Fechar menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 pt-8 text-sm uppercase tracking-widest font-medium">
                  <a
                    href="#conceito"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#B88A2D] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>Conceito</span>
                    <span className="text-xs text-[#B88A2D]/80">01</span>
                  </a>
                  <a
                    href="#galeria"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#B88A2D] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>Galeria</span>
                    <span className="text-xs text-[#B88A2D]/80">02</span>
                  </a>
                  <a
                    href="#empreendimento"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#B88A2D] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>Projeto</span>
                    <span className="text-xs text-[#B88A2D]/80">03</span>
                  </a>
                  <a
                    href="#filmes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#B88A2D] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>Vídeos</span>
                    <span className="text-xs text-[#B88A2D]/80">04</span>
                  </a>
                  <a
                    href="/unidades"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#B88A2D] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>Unidades</span>
                    <span className="text-xs text-[#B88A2D]/80">05</span>
                  </a>
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <a
                  href="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#B88A2D] hover:bg-[#c7b88d] text-[#161914] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  Fale com a gente <ArrowUpRight size={14} />
                </a>

                <div className="space-y-2 text-xs text-white/60 font-light pt-2">
                  <p className="flex items-center gap-2">
                    <Phone size={13} className="text-[#B88A2D]" />
                    <a
                      href="https://wa.me/5521997862692"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      (21) 99786-2692
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin size={13} className="text-[#B88A2D] shrink-0 mt-0.5" />
                    <span>Itaipava · Petrópolis · RJ</span>
                  </p>
                </div>
              </div>
            </div>
          </>,
          document.body
        )
      : null

  return (
    <header className="w-full flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 relative z-20">
      <a className="block w-40 sm:w-52 md:w-60 h-auto select-none" href="#inicio">
        <img
          src="/logo/logo_white.svg"
          alt="Viverde Itaipava"
          className="w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain block"
        />
      </a>

      <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold text-white/90">
        <a href="#conceito" className="hover:text-[#B88A2D] transition-colors">
          Conceito
        </a>
        <a href="#galeria" className="hover:text-[#B88A2D] transition-colors">
          Galeria
        </a>
        <a href="#empreendimento" className="hover:text-[#B88A2D] transition-colors">
          Projeto
        </a>
        <a href="#filmes" className="hover:text-[#B88A2D] transition-colors">
          Vídeos
        </a>
        <a href="/unidades" className="hover:text-[#B88A2D] transition-colors">
          Unidades
        </a>
      </nav>

      <div className="flex items-center gap-3 sm:gap-4 text-white">
        <a
          href="/contato"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-[11px] uppercase tracking-wider font-semibold transition-all duration-300"
        >
          Fale com a gente <ArrowUpRight size={14} />
        </a>

        <AnimatedThemeToggler className="border-0 text-white hover:bg-white/10" />

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-2 text-white hover:text-[#B88A2D] transition-colors cursor-pointer rounded-full hover:bg-white/10"
          aria-label="Abrir menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {mobileDrawer}
    </header>
  )
}
