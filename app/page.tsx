'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { HeroSection } from '@/components/home/heroSection'
import { ConceptSection } from '@/components/home/conceptSection'
import { ManifestoSection } from '@/components/home/manifestoSection'
import { GallerySection } from '@/components/home/gallerySection'
import { ProjectSection } from '@/components/home/projectSection'
import { FilmsSection } from '@/components/home/filmsSection'
import { PartnersSection } from '@/components/home/partnersSection'
import { FAQSection } from '@/components/home/faqSection'
import { Footer } from '@/components/home/footer'
import { LightboxModal } from '@/components/home/lightboxModal'
import { filmsData, galleryData } from '@/components/home/data'
import type { GalleryItem, ProjectImageItem } from '@/components/home/types'

const filmGalleryItems: GalleryItem[] = filmsData.map((f) => ({
  src: f.image,
  alt: `${f.title} — ${f.label}`,
  tag: f.label,
  video: f.video,
}))

export default function Page() {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<{
    index: number
    list: ProjectImageItem[]
  } | null>(null)
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null)

  const activeGalleryItems = useMemo<GalleryItem[]>(() => {
    if (selectedFilm !== null) {
      return filmGalleryItems
    }
    if (selectedProject !== null) {
      return selectedProject.list.map((item) => ({
        src: item.src,
        alt: item.alt,
        tag: item.tag,
      }))
    }
    return galleryData
  }, [selectedFilm, selectedProject])

  const activeIndex =
    selectedFilm !== null
      ? selectedFilm
      : selectedProject !== null
      ? selectedProject.index
      : selectedGallery

  const handleCloseLightbox = useCallback(() => {
    setSelectedGallery(null)
    setSelectedProject(null)
    setSelectedFilm(null)
  }, [])

  const handleMoveLightbox = useCallback((delta: number) => {
    if (selectedFilm !== null) {
      const total = filmsData.length
      setSelectedFilm((prev) => (prev !== null ? (prev + delta + total) % total : 0))
    } else if (selectedProject !== null) {
      const total = selectedProject.list.length
      setSelectedProject((prev) =>
        prev
          ? {
              index: (prev.index + delta + total) % total,
              list: prev.list,
            }
          : null
      )
    } else if (selectedGallery !== null) {
      const total = galleryData.length
      setSelectedGallery((prev) => (prev !== null ? (prev + delta + total) % total : 0))
    }
  }, [selectedFilm, selectedProject, selectedGallery])

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161616] text-[#24271d] dark:text-[#f1efe8] transition-colors">
      {activeIndex !== null && (
        <LightboxModal
          items={activeGalleryItems}
          index={activeIndex}
          onClose={handleCloseLightbox}
          onMove={handleMoveLightbox}
        />
      )}

      <HeroSection />

      <ConceptSection />

      <GallerySection onSelectImage={(index) => setSelectedGallery(index)} />

      <ManifestoSection />

      <ProjectSection
        onSelectProject={(index, filteredList) =>
          setSelectedProject({ index, list: filteredList })
        }
      />

      <FilmsSection onSelectFilm={(index) => setSelectedFilm(index)} />

      <PartnersSection />

      <FAQSection />

      <Footer />
    </main>
  )
}
