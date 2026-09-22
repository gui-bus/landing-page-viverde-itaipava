'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Home, Layers, MessageSquare, X } from 'lucide-react'

const WHATSAPP_NUMBER = '5521997862692'

const whatsappOptions = [
  {
    id: 'casa-03',
    title: 'Casas 3 Suítes',
    message: 'Olá! Gostaria de informações sobre as Casas de 3 Suítes do Viverde Itaipava.',
    icon: Home,
  },
  {
    id: 'casa-04',
    title: 'Casas 4 Suítes',
    message: 'Olá! Gostaria de informações sobre as Casas de 4 Suítes do Viverde Itaipava.',
    icon: Layers,
  },
  {
    id: 'geral',
    title: 'Falar com Consultor',
    message: 'Olá! Gostaria de falar com um consultor sobre o Viverde Itaipava.',
    icon: MessageSquare,
  },
]

export function WhatsappWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return
    }
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
    setIsOpen(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
    }
    leaveTimerRef.current = setTimeout(() => {
      setIsOpen(false)
      setIsHovered(false)
    }, 200)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-whatsapp-widget]')) {
        setIsOpen(false)
        setIsHovered(false)
      }
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isOpen])

  const handleSelectOption = (message: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setIsOpen(false)
    setIsHovered(false)
  }

  const handleButtonClick = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
    }
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 pointer-events-none">
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 md:px-12 flex justify-end">
        <div
          data-whatsapp-widget
          className="relative pointer-events-auto size-14 sm:size-15"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isOpen && (
            <div
              className="absolute bottom-full right-0 mb-3 w-72 sm:w-80 rounded-2xl bg-white/95 dark:bg-[#161616]/95 p-3.5 shadow-2xl backdrop-blur-xl origin-bottom-right border border-black/10 dark:border-white/10 animate-[fadeInUp_0.25s_ease-out]"
            >
              <div className="flex items-center justify-between px-2.5 py-2 border-b border-black/5 dark:border-white/10 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#161616] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#161616]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-[#161616] dark:text-[#c7b88d] uppercase tracking-wider">
                      Atendimento Viverde
                    </p>
                    <p className="text-xs font-bold text-[#24271d] dark:text-white">
                      Fale conosco no WhatsApp
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (leaveTimerRef.current) {
                      clearTimeout(leaveTimerRef.current)
                    }
                    setIsOpen(false)
                    setIsHovered(false)
                  }}
                  className="p-1 rounded-lg text-[#161616]/60 hover:text-[#161616] dark:text-white/60 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Fechar popup do WhatsApp"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="space-y-1">
                {whatsappOptions.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.message)}
                      className="w-full p-2.5 rounded-xl hover:bg-[#161616]/5 dark:hover:bg-white/5 transition-all flex items-center justify-between text-left group/item cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-[#161616]/10 text-[#161616] dark:bg-white/10 dark:text-[#c7b88d] shrink-0">
                          <IconComponent size={16} />
                        </div>
                        <span className="text-xs font-semibold text-[#24271d] dark:text-white block">
                          {option.title}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="text-[#161616]/50 group-hover/item:text-[#161616] dark:text-white/40 dark:group-hover/item:text-white group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform shrink-0 ml-1.5"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleButtonClick}
            aria-label="Abrir opções de contato no WhatsApp"
            className={`relative size-14 sm:size-15 flex items-center justify-center bg-transparent cursor-pointer select-none drop-shadow-2xl p-0.5 transition-transform duration-300 ${
              isHovered || isOpen ? 'scale-110' : 'hover:scale-105 animate-[pulse_3s_ease-in-out_infinite]'
            }`}
          >
            <div className="relative size-full">
              <img
                src="/utils/icons/whatsapp.svg"
                alt="WhatsApp Viverde Itaipava"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
