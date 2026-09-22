'use client'

import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/home/heroSection'
import { ConceptSection } from '@/components/home/conceptSection'
import { ManifestoSection } from '@/components/home/manifestoSection'
import { GallerySection } from '@/components/home/gallerySection'
import { ProjectSection } from '@/components/home/projectSection'
import { FilmsSection } from '@/components/home/filmsSection'
import { LocationSection } from '@/components/home/locationSection'
import { PartnersSection } from '@/components/home/partnersSection'
import { Footer } from '@/components/home/footer'
import { LightboxModal } from '@/components/home/lightboxModal'
import { galleryData, placesData, projectImagesData } from '@/components/home/data'
import type { GalleryItem, ProjectImageItem } from '@/components/home/types'

export default function Page() {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<{ index: number; list: ProjectImageItem[] } | null>(null)
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null)

  const activeGalleryItems: GalleryItem[] =
    selectedProject !== null
      ? selectedProject.list.map((item) => ({ src: item.src, alt: item.alt, tag: item.tag }))
      : selectedPlace !== null
        ? placesData.map((place) => ({ src: place.src, alt: place.title }))
        : galleryData

  const activeIndex =
    selectedProject !== null
      ? selectedProject.index
      : selectedPlace !== null
        ? selectedPlace
        : selectedGallery

  const handleCloseLightbox = () => {
    setSelectedGallery(null)
    setSelectedProject(null)
    setSelectedPlace(null)
  }

  const handleMoveLightbox = (delta: number) => {
    if (selectedProject !== null) {
      const total = selectedProject.list.length
      setSelectedProject({
        index: (selectedProject.index + delta + total) % total,
        list: selectedProject.list,
      })
    } else if (selectedPlace !== null) {
      setSelectedPlace((selectedPlace + delta + placesData.length) % placesData.length)
    } else if (selectedGallery !== null) {
      setSelectedGallery((selectedGallery + delta + galleryData.length) % galleryData.length)
    }
  }

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161914] text-[#24271d] dark:text-[#f1efe8] transition-colors">
      {activeIndex !== null && (
        <LightboxModal
          items={activeGalleryItems}
          index={activeIndex}
          onClose={handleCloseLightbox}
          onMove={handleMoveLightbox}
        />
      )}

      {}
      <HeroSection />

      {}
      <ConceptSection />

      {}
      <ManifestoSection />

      {}
      <GallerySection onSelectImage={(index) => setSelectedGallery(index)} />

      {}
      <ProjectSection
        onSelectProject={(index, filteredList) =>
          setSelectedProject({ index, list: filteredList })
        }
      />

      {}
      <FilmsSection />

      {}
      <LocationSection onSelectPlace={(index) => setSelectedPlace(index)} />

      {}
      <PartnersSection />

      {}
      <Footer />
    </main>
  )
}
