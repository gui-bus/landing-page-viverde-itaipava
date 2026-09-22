'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import { projectCategoriesData, projectImagesData } from './data'

export interface ProjectSectionProps {
  onSelectProject: (index: number, filteredList: typeof projectImagesData) => void
}

const INITIAL_COUNT = 6

const bentoSpans = [
  'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 lg:col-span-5 min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]',
  'col-span-12 lg:col-span-7 min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
  'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]',
]

function getBentoSpan(index: number, total: number): string {
  if (total === 4) {
    if (index === 0) return 'col-span-12 lg:col-span-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]'
    if (index === 1) return 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[320px] lg:min-h-[460px]'
    return 'col-span-12 sm:col-span-6 lg:col-span-6 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]'
  }
  return bentoSpans[index % bentoSpans.length] || 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px]'
}

export function ProjectSection({ onSelectProject }: ProjectSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos')
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const filteredProjects =
    activeCategory === 'todos'
      ? projectImagesData
      : projectImagesData.filter((p) => p.category === activeCategory)

  const hasMore = filteredProjects.length > INITIAL_COUNT
  const visibleProjects = isExpanded || !hasMore
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setIsExpanded(false)
  }

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false)
      const el = document.getElementById('empreendimento')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      setIsExpanded(true)
    }
  }

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
          <a
            href="/unidades"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#161914] dark:text-[#c7b88d] hover:underline"
          >
            Ver plantas e disponibilidade <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
        {projectCategoriesData.map((cat) => {
          const isActive = activeCategory === cat.id
          const count =
            cat.id === 'todos'
              ? projectImagesData.length
              : projectImagesData.filter((p) => p.category === cat.id).length

          return (
            <button
              key={cat.id}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#161914] text-white dark:bg-[#B88A2D] dark:text-[#161914] shadow-md'
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
        {visibleProjects.map((item, i) => {
          const originalIndex = filteredProjects.findIndex((p) => p.src === item.src)
          const isLarge = i === 0 || i === 5
          const isAppearing = i >= INITIAL_COUNT

          return (
            <button
              key={item.src + i}
              type="button"
              style={
                isAppearing
                  ? {
                      animationDelay: `${Math.min((i - INITIAL_COUNT) * 45, 400)}ms`,
                    }
                  : undefined
              }
              className={`group relative overflow-hidden rounded-xs bg-black/10 cursor-pointer text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                getBentoSpan(i, visibleProjects.length)
              } ${
                isAppearing
                  ? 'animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_both]'
                  : ''
              }`}
              onClick={() => onSelectProject(originalIndex >= 0 ? originalIndex : i, filteredProjects)}
              aria-label={`Abrir ${item.title}`}
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
                    isLarge ? 'text-lg sm:text-2xl md:text-3xl max-w-xl' : 'text-base sm:text-lg md:text-xl'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-2 max-w-xl">
                  {item.text}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {hasMore && (
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleToggleExpand}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#161914] dark:bg-[#B88A2D] text-white dark:text-[#161914] text-xs uppercase tracking-widest font-semibold hover:bg-[#24271d] dark:hover:bg-[#c7b88d] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <span>
              {isExpanded
                ? 'Mostrar menos fotos'
                : `Ver mais fotos (${filteredProjects.length - INITIAL_COUNT})`}
            </span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <p className="text-xs text-[#73786e] dark:text-[#a4aa9d] font-light">
            Exibindo {visibleProjects.length} de {filteredProjects.length} fotos do empreendimento
          </p>
        </div>
      )}
    </section>
  )
}
