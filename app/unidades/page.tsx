'use client'

import { useState } from 'react'
import { ArrowUpRight, BedDouble, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { motion } from 'motion/react'
import { Header } from '@/components/home/header'
import { Footer } from '@/components/home/footer'
import { CtaButton } from '@/components/ui/ctaButton'

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
]

export default function UnidadesPage() {
  const [activePhotoIndices, setActivePhotoIndices] = useState<{ [unitId: string]: number }>({
    'casa-03': 0,
    'casa-04': 0,
  })

  const [lightboxUnit, setLightboxUnit] = useState<{ unitId: string; photoIdx: number } | null>(null)

  const setPhotoForUnit = (unitId: string, index: number) => {
    setActivePhotoIndices((prev) => ({ ...prev, [unitId]: index }))
  }

  const handlePrevPhoto = (unitId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const unit = unitsData.find((u) => u.id === unitId)
    if (!unit) return
    setActivePhotoIndices((prev) => {
      const current = prev[unitId] ?? 0
      const next = (current - 1 + unit.photos.length) % unit.photos.length
      return { ...prev, [unitId]: next }
    })
  }

  const handleNextPhoto = (unitId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const unit = unitsData.find((u) => u.id === unitId)
    if (!unit) return
    setActivePhotoIndices((prev) => {
      const current = prev[unitId] ?? 0
      const next = (current + 1) % unit.photos.length
      return { ...prev, [unitId]: next }
    })
  }

  const currentUnitForLightbox = lightboxUnit ? unitsData.find((u) => u.id === lightboxUnit.unitId) : null
  const currentPhotoForLightbox = currentUnitForLightbox ? currentUnitForLightbox.photos[lightboxUnit!.photoIdx] : null

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161616] text-[#24271d] dark:text-[#f1efe8] transition-colors min-h-screen">
      {lightboxUnit && currentUnitForLightbox && currentPhotoForLightbox && (
        <div
          className="fixed inset-0 z-50 flex justify-center bg-black/80 backdrop-blur-xs"
          onClick={() => setLightboxUnit(null)}
        >
          <div
            className="relative w-full max-w-[1760px] h-full flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden"
            role="dialog"
            aria-modal="true"
            onClick={() => setLightboxUnit(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
              onClick={() => setLightboxUnit(null)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
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

            <motion.div
              key={lightboxUnit.photoIdx}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50
                if (info.offset.x < -swipeThreshold) {
                  setLightboxUnit({
                    unitId: lightboxUnit.unitId,
                    photoIdx: (lightboxUnit.photoIdx + 1) % currentUnitForLightbox.photos.length,
                  })
                } else if (info.offset.x > swipeThreshold) {
                  setLightboxUnit({
                    unitId: lightboxUnit.unitId,
                    photoIdx: (lightboxUnit.photoIdx - 1 + currentUnitForLightbox.photos.length) % currentUnitForLightbox.photos.length,
                  })
                }
              }}
              initial={{ opacity: 0.85, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[78vh] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentPhotoForLightbox.src}
                alt={currentPhotoForLightbox.alt}
                draggable={false}
                className="max-w-full max-h-[78vh] object-contain rounded-md shadow-2xl pointer-events-none select-none"
              />
            </motion.div>

            <button
              type="button"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
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

            <div className="mt-4 flex flex-col items-center gap-3 z-20 select-none">
              {currentUnitForLightbox.photos.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-md px-4">
                  {currentUnitForLightbox.photos.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxUnit({
                          unitId: lightboxUnit.unitId,
                          photoIdx: dotIdx,
                        })
                      }}
                      aria-label={`Ir para foto ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === lightboxUnit.photoIdx
                          ? 'w-6 bg-white shadow-sm'
                          : 'w-1.5 bg-white/40 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}

              <div className="text-center text-white/80 text-xs sm:text-sm uppercase tracking-widest font-medium">
                <span>{currentUnitForLightbox.title}</span>
                <span className="mx-2">·</span>
                <span className="font-semibold text-white">{currentPhotoForLightbox.label}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Header variant="default" />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-16 sm:-right-24 md:-right-32 -bottom-16 sm:-bottom-24 md:-bottom-32 w-[clamp(600px,90vw,1450px)] pointer-events-none select-none z-0 opacity-[0.035] flex justify-end items-end"
        >
          <img
            src="/logo/icon_black.svg"
            alt=""
            className="w-full h-auto object-contain object-right-bottom dark:hidden"
          />
          <img
            src="/logo/icon_white.svg"
            alt=""
            className="w-full h-auto object-contain object-right-bottom hidden dark:block"
          />
        </div>

        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-4xl">
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

        <section className="relative z-10 pb-16 sm:pb-28 px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {unitsData.map((unit) => {
              const currentPhotoIdx = activePhotoIndices[unit.id] ?? 0
              const currentPhoto = unit.photos[currentPhotoIdx] || unit.photos[0]

              return (
                <article
                  key={unit.id}
                  className="flex flex-col transition-colors duration-300 w-full"
                >
                <div
                  className="relative aspect-4/3 sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/10 cursor-pointer group select-none"
                  onClick={() => setLightboxUnit({ unitId: unit.id, photoIdx: currentPhotoIdx })}
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  <span className="absolute top-3.5 left-3.5 text-[10px] uppercase tracking-widest text-white font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm z-10">
                    {currentPhoto.label}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => handlePrevPhoto(unit.id, e)}
                    aria-label="Foto anterior"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 backdrop-blur-xs cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleNextPhoto(unit.id, e)}
                    aria-label="Próxima foto"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 backdrop-blur-xs cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-10">
                    {unit.photos.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActivePhotoIndices((prev) => ({ ...prev, [unit.id]: dotIdx }))
                        }}
                        aria-label={`Ir para foto ${dotIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === currentPhotoIdx
                            ? 'w-6 bg-white shadow-sm'
                            : 'w-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="font-heading text-xl sm:text-2xl font-normal tracking-tight">
                        {unit.title}
                      </h2>
                      <span className="text-xs uppercase tracking-widest text-[#B88A2D] font-semibold">
                        {unit.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#73786e] dark:text-[#a4aa9d] mb-4 font-light">
                      {unit.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-black/5 dark:border-white/5 mb-4">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#849181] dark:text-[#a4aa9d]">Área Privativa</span>
                        <span className="text-sm font-semibold text-[#24271d] dark:text-[#f1efe8]">{unit.area}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#849181] dark:text-[#a4aa9d]">Terreno</span>
                        <span className="text-sm font-semibold text-[#24271d] dark:text-[#f1efe8]">{unit.lot}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-6 font-light">
                      {unit.description}
                    </p>

                    <div className="space-y-2 mb-8 pt-5 border-t border-black/5 dark:border-white/5">
                      {unit.features.map((feat) => (
                        <div key={feat} className="text-xs sm:text-sm text-[#73786e] dark:text-[#a4aa9d] flex items-center gap-2">
                          <span className="text-[#B88A2D] font-bold">✓</span> {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <CtaButton
                    href={`https://wa.me/5521997862692?text=${encodeURIComponent(`Olá! Gostaria de consultar a disponibilidade da ${unit.title} no Viverde Itaipava.`)}`}
                    variant="primary"
                    isFullWidth
                    size="md"
                  >
                    <span className="flex items-center justify-between w-full">
                      <span>Tenho interesse</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </CtaButton>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      </div>

      <Footer />
    </main>
  )
}
