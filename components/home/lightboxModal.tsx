'use client'

import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import type { GalleryItem } from './types'

export interface LightboxModalProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onMove: (delta: number) => void
}

export function LightboxModal({
  items,
  index,
  onClose,
  onMove,
}: LightboxModalProps) {
  const item = items[index]
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'ArrowRight') onMove(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onMove])

  useEffect(() => {
    if (videoRef.current && item?.video) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }, [item?.video, index])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1760px] h-full flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Visualização em tela cheia"
        onClick={onClose}
      >
        <button
          type="button"
          className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <button
          type="button"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
          onClick={(e) => {
            e.stopPropagation()
            onMove(-1)
          }}
          aria-label="Item anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            const swipeThreshold = 50
            if (info.offset.x < -swipeThreshold) {
              onMove(1)
            } else if (info.offset.x > swipeThreshold) {
              onMove(-1)
            }
          }}
          initial={{ opacity: 0.85, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl max-h-[78vh] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onClick={(e) => e.stopPropagation()}
        >
          {item.video ? (
            <video
              key={item.video}
              ref={videoRef}
              src={item.video}
              poster={item.src}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[76vh] object-contain rounded-xl shadow-2xl bg-black"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="max-w-full max-h-[78vh] object-contain rounded-md shadow-2xl pointer-events-none select-none"
            />
          )}
        </motion.div>

        <button
          type="button"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-20"
          onClick={(e) => {
            e.stopPropagation()
            onMove(1)
          }}
          aria-label="Próximo item"
        >
          <ChevronRight size={24} />
        </button>

        <div className="mt-4 flex flex-col items-center gap-3 z-20 select-none">
          {items.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-md px-4">
              {items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onMove(dotIdx - index)
                  }}
                  aria-label={`Ir para item ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === index
                      ? 'w-6 bg-white shadow-sm'
                      : 'w-1.5 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="text-center text-white/80 text-xs sm:text-sm uppercase tracking-widest font-medium">
            <span>
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <span className="mx-2">·</span>
            <span className="font-semibold text-white">{item.alt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
