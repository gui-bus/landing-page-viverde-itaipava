'use client'

import { Plus } from 'lucide-react'
import { galleryData } from './data'

export interface GallerySectionProps {
  onSelectImage: (index: number) => void
}

export function GallerySection({ onSelectImage }: GallerySectionProps) {
  return (
    <section id="galeria" className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 text-[#24271d] dark:text-[#f1efe8] transition-colors">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            A casa Viverde
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            Seu lugar no mundo.
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
          Clique nas imagens para expandir em tela cheia. Arquitetura que respeita a paisagem e cria espaços para todos os seus momentos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            className="group relative overflow-hidden rounded-lg aspect-4/3 bg-black/10 cursor-pointer text-left border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            onClick={() => onSelectImage(i)}
            aria-label={`Abrir ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 right-4 z-20 text-white flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#b7a77f] font-semibold block mb-1">
                  {item.tag}
                </span>
                <p className="text-xs sm:text-sm font-medium leading-snug">{item.alt}</p>
              </div>
              <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0 ml-2">
                <Plus size={14} />
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
