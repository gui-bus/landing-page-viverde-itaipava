'use client'

import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { projectCategoriesData, projectImagesData } from './data'

export interface ProjectSectionProps {
  onSelectProject: (index: number, filteredList: typeof projectImagesData) => void
}

export function ProjectSection({ onSelectProject }: ProjectSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const filteredProjects =
    activeCategory === 'todos'
      ? projectImagesData
      : projectImagesData.filter((p) => p.category === activeCategory)

  return (
    <section
      id="empreendimento"
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5 text-[#24271d] dark:text-[#f1efe8] transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            O empreendimento
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            Por dentro do <em className="italic text-[#b7a77f]">Viverde.</em>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-3 font-light">
            Casas autorais de 3 e 4 suítes, lazer privativo e estrutura completa de condomínio fechado para transformar sua rotina em bem-estar.
          </p>
          <a
            href="/unidades"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#30382c] dark:text-[#c7b88d] hover:underline"
          >
            Ver plantas e disponibilidade <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {}
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
                  ? 'bg-[#30382c] text-white dark:bg-[#b7a77f] dark:text-[#161914] shadow-md'
                  : 'border border-black/15 dark:border-white/15 text-[#73786e] dark:text-[#a4aa9d] hover:border-black/40 hover:text-black dark:hover:text-white bg-transparent'
              }`}
              onClick={() => setActiveCategory(cat.id)}
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

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            className="group relative aspect-4/3 rounded-lg overflow-hidden bg-black/20 cursor-pointer border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-left"
            onClick={() => onSelectProject(i, filteredProjects)}
            aria-label={`Abrir ${item.alt} na galeria`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            <span className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 font-semibold">
              <Plus size={12} /> Zoom
            </span>

            <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase tracking-widest text-[#b7a77f] font-semibold">
                  {item.tag}
                </span>
                <span className="text-[10px] text-white/60 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-medium text-white mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
