'use client'

import { ArrowUp, ArrowUpRight, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#121611] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-t border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-16 sm:-right-24 md:-right-32 -bottom-16 sm:-bottom-24 md:-bottom-32 w-[clamp(600px,90vw,1450px)] pointer-events-none select-none z-0 opacity-[0.035] flex justify-end items-end"
      >
        <img
          src="/logo/icon_white.svg"
          alt=""
          className="w-full h-auto object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-10 pb-14 sm:pb-18 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88A2D] font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              Um novo ritmo de vida em Itaipava
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.05]">
              Pronto para viver o seu refúgio na serra?
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5521997862692?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Viverde%20Itaipava."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B88A2D] hover:bg-[#c7b88d] text-[#161914] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
            <a
              href="/unidades"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white/5"
            >
              Ver Plantas <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-14 sm:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4 space-y-6">
          <a href="#inicio" className="block w-36 sm:w-44">
            <img
              src="/logo/logo_white.svg"
              alt="Viverde Itaipava"
              className="w-full h-auto object-contain"
            />
          </a>
          <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
            40 casas autorais em condomínio fechado. O encontro sublime entre arquitetura contemporânea, natureza preservada e tempo de qualidade.
          </p>
          <div className="flex items-start gap-3 text-xs text-white/80 font-light">
            <MapPin size={16} className="text-[#B88A2D] shrink-0 mt-0.5" />
            <span>
              Rua Neuza Goulart Brizola, 2005<br />
              Itaipava · Petrópolis · RJ
            </span>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B88A2D] font-semibold">
            Navegação
          </p>
          <ul className="space-y-3 text-sm text-white/75 font-light">
            <li>
              <a href="#conceito" className="hover:text-[#B88A2D] transition-colors">
                O Conceito
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-[#B88A2D] transition-colors">
                Galeria & Entorno
              </a>
            </li>
            <li>
              <a href="#empreendimento" className="hover:text-[#B88A2D] transition-colors">
                O Empreendimento
              </a>
            </li>
            <li>
              <a href="#filmes" className="hover:text-[#B88A2D] transition-colors">
                Perspectivas em Vídeo
              </a>
            </li>
            <li>
              <a href="/unidades" className="hover:text-[#B88A2D] transition-colors">
                Unidades & Plantas
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B88A2D] font-semibold">
            Contato & Redes
          </p>
          <ul className="space-y-3 text-sm text-white/75 font-light">
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#B88A2D] shrink-0" />
              <a
                href="https://wa.me/5521997862692?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Viverde%20Itaipava."
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                (21) 99786-2692
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg
                className="w-3.5 h-3.5 text-[#B88A2D] shrink-0 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <a
                href="https://instagram.com/viverdeitaipava"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                @viverdeitaipava
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end space-y-6">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="text-left lg:text-right space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-white/50 block font-semibold">
              Realização
            </span>
            <span className="text-xs text-white/80 font-medium block">
              Braemp · Agrega · Ribus
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-6 text-[11px] text-white/45 leading-relaxed font-light">
        <p>
          Todas as imagens, ilustrações, artes, plantas humanizadas referentes ao empreendimento apresentadas neste material publicitário são meramente ilustrativas e artísticas, podendo apresentar variações em relação ao produto final em razão do desenvolvimento dos projetos executivos. Memorial de incorporação prenotado sob o nº 31236 no cartório do 10º Ofício de Petrópolis. Projeto de construção aprovado na Prefeitura Municipal de Petrópolis sob o nº 26.531/23.
        </p>
      </div>

      <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/50 uppercase tracking-widest font-medium">
        <span>© 2026 Viverde Itaipava. Todos os direitos reservados.</span>
        <span>Braemp Incorporações e Participações Ltda · CNPJ 42.707.498/0001-77</span>
      </div>
    </footer>
  )
}
