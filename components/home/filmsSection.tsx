'use client'

import { useRef, useState } from 'react'
import { Film, Maximize2, Volume2, VolumeX } from 'lucide-react'
import { filmsData } from './data'

export interface FilmsSectionProps {
  onSelectFilm: (index: number) => void
}

export function FilmsSection({ onSelectFilm }: FilmsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.muted = isMuted
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    videoRefs.current.forEach((video) => {
      if (!video) return
      video.pause()
      video.currentTime = 0
    })
  }

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (hoveredIndex !== null && videoRefs.current[hoveredIndex]) {
      videoRefs.current[hoveredIndex]!.muted = nextMuted
    }
  }

  const handleOpenFullscreen = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.pause()
    }
    onSelectFilm(index)
  }

  return (
    <section
      id="videos"
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 text-[#24271d] dark:text-[#f1efe8] transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2 flex items-center gap-2">
            <Film size={14} className="text-[#B88A2D]" /> Experiência Imersiva
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            A atmosfera da serra<br />
            <em className="italic text-[#B88A2D]">em movimento.</em>
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
          Uma jornada audiovisual exclusiva por cada detalhe da arquitetura, da natureza preservada e do estilo de vida em Itaipava.
        </p>
      </div>

      <div
        className="flex flex-col lg:flex-row w-full h-[720px] sm:h-[780px] lg:h-[640px] overflow-hidden rounded-xs shadow-2xl bg-[#161616]"
        onMouseLeave={handleMouseLeave}
      >
        {filmsData.map((film, i) => {
          const isActive = hoveredIndex === i
          const isAnyActive = hoveredIndex !== null
          const hideInfo = isAnyActive && !isActive

          return (
            <div
              key={film.title + i}
              onMouseEnter={() => handleMouseEnter(i)}
              onClick={(e) => handleOpenFullscreen(e, i)}
              style={{
                flex: !isAnyActive ? '1 1 0%' : isActive ? '3.2 1 0%' : '0.85 1 0%',
              }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden cursor-pointer transition-[flex,opacity] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none ${
                isActive ? 'z-20 opacity-100' : isAnyActive ? 'z-10 opacity-60' : 'z-10 opacity-100'
              }`}
            >
              <img
                src={film.image}
                alt={film.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <video
                ref={(el) => {
                  videoRefs.current[i] = el
                }}
                src={film.video}
                poster={film.image}
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25 transition-opacity duration-500 ${
                  isActive ? 'from-black/90 via-black/35 to-black/15' : 'from-black/95 via-black/55 to-black/35'
                }`}
              />

              <div
                className={`relative z-20 flex items-center justify-between w-full transition-opacity duration-500 ${
                  hideInfo ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest text-white font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                  {film.label}
                </span>

                <div className="flex items-center gap-2">
                  {isActive && (
                    <button
                      type="button"
                      onClick={handleToggleMute}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
                      aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => handleOpenFullscreen(e, i)}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#B88A2D] hover:text-[#161616] transition-all cursor-pointer"
                    aria-label={`Ver ${film.title} em tela cheia`}
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
              </div>

              <div
                className={`relative z-20 text-white mt-auto transition-opacity duration-500 ${
                  hideInfo ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white mb-2">
                  {film.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isActive ? 'max-h-32 opacity-100 mt-2 pt-2 border-t border-white/20' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-lg mb-2">
                    {film.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#d8cca8] font-semibold">
                    <Maximize2 size={12} /> Clique para tela cheia
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
