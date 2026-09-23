'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function SectionScrollSpy() {
  const pathname = usePathname()

  useEffect(() => {
    const clearHashIfTop = () => {
      if (window.scrollY < 120 && window.location.hash) {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search
        )
      }
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    if (sections.length === 0) {
      window.addEventListener('scroll', clearHashIfTop, { passive: true })
      clearHashIfTop()
      return () => {
        window.removeEventListener('scroll', clearHashIfTop)
      }
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === 'inicio' || id === 'hero') {
            if (window.location.hash) {
              window.history.replaceState(
                null,
                '',
                window.location.pathname + window.location.search
              )
            }
          } else if (id && window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`)
          }
        }
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0,
    })

    sections.forEach((el) => observer.observe(el))

    window.addEventListener('scroll', clearHashIfTop, { passive: true })
    clearHashIfTop()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', clearHashIfTop)
    }
  }, [pathname])

  return null
}
