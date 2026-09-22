'use client'

import { ArrowUpRight } from 'lucide-react'
import { placesData } from './data'

export interface LocationSectionProps {
  onSelectPlace: (index: number) => void
}

export function LocationSection({ onSelectPlace }: LocationSectionProps) {
  return (
    <section id="localizacao" className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 text-[#24271d] dark:text-[#f1efe8] transition-colors">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            A localização
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            O melhor da serra<br />
            <em className="italic text-[#b7a77f]">ao seu redor.</em>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-3 font-light">
            A apenas 80 minutos da capital, Itaipava é um refúgio de clima ameno, gastronomia refinada, cachoeiras e paisagens que renovam. Aqui, cada saída pode ser uma nova descoberta.
          </p>
          <a
            href="https://maps.google.com/?q=R.+Neuza+Goulart+Brizola+2005+Itaipava+RJ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#30382c] dark:text-[#c7b88d] hover:underline"
          >
            Abrir no Google Maps <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placesData.map((place, index) => (
          <article
            key={place.number}
            className="group cursor-pointer rounded-lg overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => onSelectPlace(index)}
          >
            <div className="relative aspect-4/3 overflow-hidden bg-black/10">
              <img
                src={place.src}
                alt={place.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 bg-black/60 backdrop-blur-sm text-white rounded">
                {place.number}
              </span>
            </div>
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg font-medium mb-1">
                  {place.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
                  {place.text}
                </p>
              </div>
              <ArrowUpRight size={18} className="text-[#b7a77f] shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
