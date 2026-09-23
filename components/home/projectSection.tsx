'use client'

import { useCallback, useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { projectCategoriesData, projectImagesData } from './data'
import type { ProjectImageItem } from './types'
import { CtaButton } from '@/components/ui/ctaButton'

export interface ProjectSectionProps {
  onSelectProject: (index: number, filteredList: ProjectImageItem[]) => void
}

const INITIAL_COUNT = 6

export function ProjectSection({ onSelectProject }: ProjectSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos')
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: projectImagesData.length }
    for (const p of projectImagesData) {
      counts[p.category] = (counts[p.category] || 0) + 1
    }
    return counts
  }, [])

  const filteredProjects = useMemo(() => {
    return activeCategory === 'todos'
      ? projectImagesData
      : projectImagesData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = useMemo(() => {
    return isExpanded
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_COUNT)
  }, [isExpanded, filteredProjects])

  const hasMore = filteredProjects.length > INITIAL_COUNT

  const getBentoSpan = (index: number, total: number) => {
    if (total === 1) {
      return 'col-span-12 min-h-[380px] sm:min-h-[480px]'
    }
    if (total === 2) {
      return 'col-span-12 sm:col-span-6 min-h-[320px] sm:min-h-[420px]'
    }
    if (total === 4) {
      if (index === 0) return 'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
      if (index === 1) return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]'
      return 'col-span-12 sm:col-span-6 min-h-[280px] sm:min-h-[340px]'
    }
    if (total === 6) {
      if (index === 0) return 'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
      if (index === 1) return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]'
      if (index === 5) return 'col-span-12 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
      return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px]'
    }
    if (total === 8) {
      if (index === 0) return 'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
      if (index === 1) return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]'
      return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px]'
    }

    const mod = index % 5
    if (index === total - 1 && mod === 0) {
      return 'col-span-12 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
    }
    if (mod === 0) return 'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]'
    return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px]'
  }

  const handleCategoryChange = useCallback((catId: string) => {
    setActiveCategory(catId)
    setIsExpanded(false)
  }, [])

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => {
      if (prev) {
        const sectionEl = document.getElementById('empreendimento')
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: 'smooth' })
        }
        return false
      }
      return true
    })
  }, [])

  return (
    <section
      id="empreendimento"
      className="pt-20 px-4 sm:px-8 md:px-12 bg-transparent text-[#24271d] dark:text-[#f1efe8] transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            O empreendimento
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            Por dentro do <em className="italic text-[#B88A2D]">Viverde.</em>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-3 font-light">
            Casas autorais de 3 e 4 suítes, lazer privativo e estrutura completa de condomínio fechado para transformar sua rotina em bem-estar.
          </p>
          <div className="mt-3">
            <CtaButton
              href="/unidades"
              variant="outline"
              size="sm"
            >
              <span>Ver plantas e disponibilidade</span>
              <ArrowUpRight size={14} />
            </CtaButton>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
        {projectCategoriesData.map((cat) => {
          const isActive = activeCategory === cat.id
          const count = categoryCounts[cat.id] ?? 0

          return (
            <button
              key={cat.id}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#161616] text-white dark:bg-[#B88A2D] dark:text-[#161616] shadow-md'
                  : 'border border-black/15 dark:border-white/15 text-[#73786e] dark:text-[#a4aa9d] hover:border-black/40 hover:text-black dark:hover:text-white bg-transparent'
              }`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 dark:bg-black/20' : 'bg-black/5 dark:bg-white/5'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <AnimatePresence mode="wait">
          {visibleProjects.map((item, i) => {
            const originalIndex = filteredProjects.findIndex((p) => p.src === item.src)
            const spanClass = getBentoSpan(i, visibleProjects.length)
            const isLarge = spanClass.includes('lg:col-span-8') || spanClass.includes('col-span-12 min-h-')

            return (
              <motion.button
                key={item.src}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-xs bg-black/10 cursor-pointer text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${spanClass}`}
                onClick={() => onSelectProject(originalIndex >= 0 ? originalIndex : i, filteredProjects)}
                aria-label={`Abrir ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
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
                      isLarge ? 'text-lg sm:text-2xl md:text-3xl max-w-xl' : 'text-base sm:text-lg md:text-xl'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-2 max-w-xl">
                    {item.text}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-3">
          <CtaButton
            variant="outline"
            size="md"
            onClick={handleToggleExpand}
          >
            <span>
              {isExpanded
                ? 'Mostrar menos fotos'
                : `Ver mais fotos (${filteredProjects.length - INITIAL_COUNT})`}
            </span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </CtaButton>
          <p className="text-xs text-[#73786e] dark:text-[#a4aa9d] font-light">
            Exibindo {visibleProjects.length} de {filteredProjects.length} fotos do empreendimento
          </p>
        </div>
      )}
    </section>
  )
}
