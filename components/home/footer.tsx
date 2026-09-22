'use client'

import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1d211b] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
        <div>
          <a className="block w-32 sm:w-40 mb-4" href="#inicio">
            <img
              src="/logo/logo_white.svg"
              alt="Viverde"
              className="w-full h-auto object-contain block"
            />
          </a>
          <p className="text-sm text-white/70 font-light">
            Uma nova forma de morar em Itaipava.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-8 text-xs uppercase tracking-widest text-white/80 font-semibold">
          <a href="#conceito" className="hover:text-[#b7a77f] transition-colors">
            O conceito
          </a>
          <a href="#galeria" className="hover:text-[#b7a77f] transition-colors">
            Galeria
          </a>
          <a href="#empreendimento" className="hover:text-[#b7a77f] transition-colors">
            O empreendimento
          </a>
          <a href="#localizacao" className="hover:text-[#b7a77f] transition-colors">
            Localização
          </a>
          <a href="/unidades" className="hover:text-[#b7a77f] transition-colors">
            Unidades disponíveis
          </a>
        </div>

        <a
          href="#inicio"
          className="text-xs uppercase tracking-widest text-white/70 hover:text-white flex items-center gap-2 font-semibold"
        >
          Voltar ao topo <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-white/10 items-center text-xs text-white/80">
        <span className="uppercase tracking-widest text-[#b7a77f] font-semibold">
          VISITE O VIVERDE
        </span>
        <strong className="font-normal text-sm sm:text-base">
          R. Neuza Goulart Brizola, 2005 · Itaipava · RJ
        </strong>
        <a
          href="/contato"
          className="md:text-right uppercase tracking-widest text-white hover:text-[#b7a77f] font-semibold flex items-center md:justify-end gap-2"
        >
          Agende uma visita <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="py-8 text-[11px] text-white/50 leading-relaxed font-light">
        <p>
          Todas as imagens, ilustrações, artes, plantas humanizadas referentes ao empreendimento, apresentadas em qualquer tipo de material publicitário e no stand de vendas são meramente ilustrativas e artísticas, podendo apresentar variações em relação ao produto final, em razão do desenvolvimento dos projetos executivos, da necessidade de adequação técnica ou atendimento às exigências do poder público. A decoração, os equipamentos e o mobiliário demonstrado nas imagens e perspectivas são apenas sugestões, não fazendo parte das obrigações de entrega do imóvel. O paisagismo apresentado nas perspectivas é uma sugestão, podendo sofrer alterações e apresentar plantas cujo porte adulto será atingido após a entrega do empreendimento. A unidade autônoma adquirida e o empreendimento serão entregues com o acabamento e os equipamentos discriminados no memorial descritivo. Memorial de incorporação prenotado sob o nº 31236 no cartório do 10º Ofício de Petrópolis. Projeto de construção aprovado na Prefeitura Municipal de Petrópolis sob o nº 26.531/23, sujeito a alteração.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 uppercase tracking-wider pt-6 border-t border-white/5 font-medium">
        <span>Copyright @2023 Braemp. Todos os direitos reservados.</span>
        <span>Braemp Incorporações e Participações Ltda – CNPJ 42.707.498/0001-77</span>
      </div>
    </footer>
  )
}
