'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, BedDouble, Maximize2, ShieldCheck, Trees, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatedThemeToggler } from '@/components/ui/animatedThemeToggler'

type PhotoItem = { label: string; src: string; alt: string }

type UnitItem = {
  id: string
  title: string
  type: string
  area: string
  description: string
  photos: PhotoItem[]
  features: string[]
}

const unitsData: UnitItem[] = [
  {
    id: 'casa-03',
    title: 'Casa 03 Suítes',
    type: '3 suítes · Lazer Privativo',
    area: '218 m²',
    description: 'Arquitetura contemporânea com integração total entre living, varanda gourmet e piscina aquecida privativa emoldurada pelo verde.',
    photos: [
      { label: 'Fachada', src: '/viverde/casa-03-suites/casa_03_suites_fachada.webp', alt: 'Fachada da Casa 03 Suítes' },
      { label: 'Living', src: '/viverde/casa-03-suites/casa_03_suites_interior.webp', alt: 'Interior da Casa 03 Suítes' },
      { label: 'Lazer', src: '/viverde/casa-03-suites/casa_03_suites_lazer.webp', alt: 'Lazer e Piscina da Casa 03 Suítes' },
      { label: 'Suíte 01', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_01.webp', alt: 'Suíte 01 da Casa 03 Suítes' },
      { label: 'Suíte 02', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_02.webp', alt: 'Suíte 02 da Casa 03 Suítes' },
      { label: 'Suíte 03', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_03.webp', alt: 'Suíte 03 da Casa 03 Suítes' },
      { label: 'Banheiro', src: '/viverde/casa-03-suites/casa_03_suites_lazer_banheiro.webp', alt: 'Banheiro da Casa 03 Suítes' },
      { label: 'Planta', src: '/viverde/casa-03-suites/casa_03_suites_planta.webp', alt: 'Planta Humanizada da Casa 03 Suítes' },
    ],
    features: ['3 suítes amplas', 'Piscina e deck privativo', 'Varanda gourmet', '2 vagas de garagem'],
  },
  {
    id: 'casa-04',
    title: 'Casa 04 Suítes',
    type: '4 suítes · Master com Closet',
    area: '286 m² a 312 m²',
    description: 'Espaços nobres, pé-direito imponente e vista privilegiada para as montanhas de Itaipava.',
    photos: [
      { label: 'Fachada', src: '/viverde/casa-04-suites/casa_04_suites_fachada.webp', alt: 'Fachada da Casa 04 Suítes' },
      { label: 'Living', src: '/viverde/casa-04-suites/casa_04_suites_interior.webp', alt: 'Interior e Salas da Casa 04 Suítes' },
      { label: 'Lazer', src: '/viverde/casa-04-suites/casa_04_suites_lazer.webp', alt: 'Piscina e Deck da Casa 04 Suítes' },
      { label: 'Suíte Master', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_01.webp', alt: 'Suíte Master da Casa 04 Suítes' },
      { label: 'Suíte 02', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_02.webp', alt: 'Suíte 02 da Casa 04 Suítes' },
      { label: 'Suíte 03', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_03.webp', alt: 'Suíte 03 da Casa 04 Suítes' },
      { label: 'Suíte 04', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_04.webp', alt: 'Suíte 04 da Casa 04 Suítes' },
      { label: 'Planta', src: '/viverde/casa-04-suites/casa_04_suites_planta.webp', alt: 'Planta Humanizada da Casa 04 Suítes' },
    ],
    features: ['4 suítes com closet', 'Piscina aquecida privativa', 'Living com pé-direito duplo', 'Jardim privativo'],
  },
  {
    id: 'lazer-condominio',
    title: 'Lazer do Condomínio',
    type: 'Clube & Convivência Completa',
    area: 'Área Comum Exclusiva',
    description: 'Infraestrutura completa de convivência, esporte e lazer para toda a família em meio à natureza.',
    photos: [
      { label: 'Convivência', src: '/viverde/geral/area_de_convivencia.webp', alt: 'Área de Convivência Viverde' },
      { label: 'Parquinho', src: '/viverde/geral/parquinho_infantil.webp', alt: 'Parquinho Infantil Viverde' },
      { label: 'Quadra', src: '/viverde/geral/quadra_poliesportiva.webp', alt: 'Quadra Poliesportiva Viverde' },
      { label: 'Salão de Festas', src: '/viverde/geral/salao_de_festas.webp', alt: 'Salão de Festas Viverde' },
    ],
    features: ['Salão de festas decorado', 'Quadra poliesportiva', 'Playground arborizado', 'Segurança 24h'],
  },
]

export default function UnidadesPage() {
  const [activePhotoIndices, setActivePhotoIndices] = useState<{ [unitId: string]: number }>({
    'casa-03': 0,
    'casa-04': 0,
    'lazer-condominio': 0,
  })

  const [lightboxUnit, setLightboxUnit] = useState<{ unitId: string; photoIdx: number } | null>(null)

  const setPhotoForUnit = (unitId: string, index: number) => {
    setActivePhotoIndices((prev) => ({ ...prev, [unitId]: index }))
  }

  const currentUnitForLightbox = lightboxUnit ? unitsData.find((u) => u.id === lightboxUnit.unitId) : null
  const currentPhotoForLightbox = currentUnitForLightbox ? currentUnitForLightbox.photos[lightboxUnit!.photoIdx] : null

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161914] text-[#24271d] dark:text-[#f1efe8] transition-colors min-h-screen">
      
      {lightboxUnit && currentUnitForLightbox && currentPhotoForLightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxUnit(null)}
        >
          <button
            className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
            onClick={() => setLightboxUnit(null)}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxUnit({
                unitId: lightboxUnit.unitId,
                photoIdx: (lightboxUnit.photoIdx - 1 + currentUnitForLightbox.photos.length) % currentUnitForLightbox.photos.length,
              })
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPhotoForLightbox.src}
              alt={currentPhotoForLightbox.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
            />
          </div>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxUnit({
                unitId: lightboxUnit.unitId,
                photoIdx: (lightboxUnit.photoIdx + 1) % currentUnitForLightbox.photos.length,
              })
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-4 text-center text-white/80 text-xs sm:text-sm uppercase tracking-widest">
            <span>{currentUnitForLightbox.title}</span>
            <span className="mx-2">·</span>
            <span className="font-medium text-white">{currentPhotoForLightbox.label}</span>
          </div>
        </div>
      )}

      
      <header className="w-full flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 border-b border-black/5 dark:border-white/5">
        <a className="block w-28 sm:w-36 h-auto" href="/">
          <img src="/logo/logo_black.svg" alt="Viverde" className="w-full h-auto max-h-9 object-contain block dark:hidden" />
          <img src="/logo/logo_white.svg" alt="Viverde" className="w-full h-auto max-h-9 object-contain hidden dark:block" />
        </a>
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler />
          <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:text-[#B88A2D] transition-colors" href="/">
            <ArrowLeft size={14} /> Voltar ao início
          </a>
        </div>
      </header>

      
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-4xl">
        <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
          Disponibilidade & Tipologias
        </p>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight">
          Encontre o seu<br />
          <em className="italic text-[#B88A2D]">jeito de viver.</em>
        </h1>
        <p className="text-base sm:text-lg text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mt-6 font-light">
          Conheça as casas autorais e a estrutura completa do Viverde Itaipava Résidences. Navegue pelas fotos de cada ambiente e escolha o seu espaço.
        </p>
      </section>

      
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {unitsData.map((unit, index) => {
            const currentPhotoIdx = activePhotoIndices[unit.id] ?? 0
            const currentPhoto = unit.photos[currentPhotoIdx] || unit.photos[0]

            return (
              <article
                key={unit.id}
                className="flex flex-col rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#1d211b] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                
                <div
                  className="relative aspect-4/3 overflow-hidden bg-black/10 cursor-pointer group"
                  onClick={() => setLightboxUnit({ unitId: unit.id, photoIdx: currentPhotoIdx })}
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs uppercase tracking-wider font-semibold text-white px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded">
                    0{index + 1} · {currentPhoto.label}
                  </span>
                  <span className="absolute top-3 right-3 text-xs uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-1 rounded">
                    Ampliar
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {unit.photos.map((p, pIdx) => (
                        <button
                          key={p.label}
                          type="button"
                          className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all cursor-pointer ${
                            currentPhotoIdx === pIdx
                              ? 'bg-[#161914] text-white dark:bg-[#B88A2D] dark:text-[#161914] font-semibold'
                              : 'border border-black/10 dark:border-white/10 text-[#73786e] dark:text-[#a4aa9d] hover:border-black/30'
                          }`}
                          onClick={() => setPhotoForUnit(unit.id, pIdx)}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>

                    <p className="text-[11px] uppercase tracking-widest text-[#849181] dark:text-[#a4aa9d] font-semibold mb-1">
                      {unit.type}
                    </p>
                    <h2 className="font-heading text-2xl sm:text-3xl font-medium mb-3">
                      {unit.title}
                    </h2>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#B88A2D] mb-4">
                      <BedDouble size={16} /> {unit.area} <Maximize2 size={16} />
                    </div>

                    <p className="text-sm text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-6 font-light">
                      {unit.description}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-4 border-t border-black/5 dark:border-white/5">
                      {unit.features.map((feat) => (
                        <div key={feat} className="text-xs text-[#73786e] dark:text-[#a4aa9d] flex items-center gap-2">
                          <span className="text-[#B88A2D]">✓</span> {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    className="w-full py-3.5 px-5 bg-[#161914] dark:bg-[#B88A2D] text-white dark:text-[#161914] text-xs uppercase tracking-widest font-semibold flex items-center justify-between rounded-lg hover:opacity-95 transition-opacity"
                    href={`https://wa.me/5524999999999?text=${encodeURIComponent(`Olá! Gostaria de consultar a disponibilidade da ${unit.title} no Viverde Itaipava.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Tenho interesse</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      
      <footer className="bg-[#1d211b] text-white py-12 px-4 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 uppercase tracking-widest border-t border-white/10">
        <span>Viverde Itaipava Résidences</span>
        <span>© 2026 Viverde · Todos os direitos reservados.</span>
      </footer>
    </main>
  )
}
