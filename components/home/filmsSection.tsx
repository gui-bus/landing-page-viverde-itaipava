'use client'

import { ArrowUpRight, Play } from 'lucide-react'
import { filmsData } from './data'

export function FilmsSection() {
  return (
    <>
      <section id="filmes" className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 text-[#24271d] dark:text-[#f1efe8] transition-colors">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              Quatro perspectivas
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
              Assista. Sinta.<br />
              <em className="italic text-[#b7a77f]">Imagine.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
            Quatro pequenos filmes para apresentar o ritmo, a matéria e a atmosfera do Viverde Itaipava.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filmsData.map((film, i) => (
            <a
              key={film.title}
              href="https://www.youtube.com/watch?v=m44zhSoTML4"
              target="_blank"
              rel="noreferrer"
              className="group block relative rounded-lg overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-black/20">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute left-4 bottom-4 w-11 h-11 rounded-full border border-white/70 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#30382c] transition-all">
                  <Play fill="currentColor" size={16} />
                </span>
                <span className="absolute top-4 right-4 text-xs font-semibold text-white/80">
                  0{i + 1}
                </span>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#73786e] dark:text-[#a4aa9d] block mb-1 font-semibold">
                    {film.label}
                  </span>
                  <h3 className="font-heading text-lg font-medium">
                    {film.title}
                  </h3>
                </div>
                <ArrowUpRight size={18} className="text-[#b7a77f] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {}
      <section className="relative py-28 sm:py-36 md:py-48 px-4 sm:px-8 md:px-12 bg-[url('/localizacao/location_01_vista_do_viverde_itaipava_residences.webp')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 z-0" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-[#c7b88d] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            O filme Viverde
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight mb-8">
            Veja o Viverde<br />
            <em className="italic text-[#b7a77f]">ganhar vida.</em>
          </h2>

          <div className="flex items-center gap-5">
            <a
              href="https://www.youtube.com/watch?v=m44zhSoTML4"
              target="_blank"
              rel="noreferrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-105 cursor-pointer"
              aria-label="Assistir ao vídeo do Viverde"
            >
              <Play fill="currentColor" size={22} />
            </a>
            <span className="text-xs uppercase tracking-widest text-white/90 font-semibold">
              Assistir ao filme completo
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
