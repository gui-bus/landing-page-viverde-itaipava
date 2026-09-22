'use client'

import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'ArrowRight') onMove(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onMove])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria em tela cheia"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
        onClick={(e) => {
          e.stopPropagation()
          onMove(-1)
        }}
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
        />
      </div>

      <button
        type="button"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer z-10"
        onClick={(e) => {
          e.stopPropagation()
          onMove(1)
        }}
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} />
      </button>

      <div className="mt-4 text-center text-white/80 text-xs sm:text-sm uppercase tracking-widest font-medium">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <span className="mx-2">·</span>
        <span className="font-semibold text-white">{item.alt}</span>
      </div>
    </div>
  )
}
