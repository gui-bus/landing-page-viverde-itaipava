'use client'

import { galleryData } from './data'

export interface GallerySectionProps {
  onSelectImage: (index: number) => void
}

const bentoSpans = [
  'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-3 min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-3 min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-3 min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-3 min-h-[260px] sm:min-h-[290px] lg:min-h-[320px]',
]

export function GallerySection({ onSelectImage }: GallerySectionProps) {
  return (
    <section
      id="galeria"
      className="pb-20 sm:pb-28 md:pb-36 px-4 sm:px-8 md:px-12 text-[#24271d] dark:text-[#f1efe8] transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            Localização & Entorno
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            A serra em cada detalhe.
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
          Clique nas fotos para expandir em tela cheia. Descubra a natureza, gastronomia, clima ameno e lazer de Itaipava que emolduram o Viverde.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {galleryData.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            className={`group relative overflow-hidden rounded-xs bg-black/10 cursor-pointer text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
              bentoSpans[i] || 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px]'
            }`}
            onClick={() => onSelectImage(i)}
            aria-label={`Abrir ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/45" />

            <div className="absolute top-4 left-4 z-20">
              <span className="text-[10px] uppercase tracking-widest text-white font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                {item.tag}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-white">
              <h3
                className={`font-heading font-medium text-white mb-1 leading-snug ${
                  i === 0 ? 'text-lg sm:text-2xl md:text-3xl max-w-xl' : 'text-base sm:text-lg md:text-xl'
                }`}
              >
                {item.title || item.alt}
              </h3>
              {item.text && (
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-2 max-w-xl">
                  {item.text}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
