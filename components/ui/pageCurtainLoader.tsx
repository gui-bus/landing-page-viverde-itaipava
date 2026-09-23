'use client'

import { useEffect, useState } from 'react'

export function PageCurtainLoader() {
  const [progress, setProgress] = useState(0)
  const [isOpening, setIsOpening] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()
    const duration = 1100

    let animationFrameId: number
    let timeoutId1: ReturnType<typeof setTimeout>
    let timeoutId2: ReturnType<typeof setTimeout>

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const rawProgress = Math.min(elapsed / duration, 1)
      const easedProgress = Math.min(100, Math.round(rawProgress * 100))

      setProgress(easedProgress)

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        timeoutId1 = setTimeout(() => {
          setIsOpening(true)
          timeoutId2 = setTimeout(() => {
            setIsComplete(true)
            document.body.style.overflow = ''
          }, 850)
        }, 200)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      document.body.style.overflow = ''
    }
  }, [])

  if (!mounted || isComplete) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex justify-center pointer-events-none transition-opacity duration-300 ${
        isOpening ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      <div className="relative w-full max-w-[1760px] h-full overflow-hidden flex items-center justify-center">
        <div
          className={`absolute inset-y-0 left-0 w-[50.5%] bg-[#f4f2ed] dark:bg-[#161616] transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] z-10 ${
            isOpening ? '-translate-x-full' : 'translate-x-0'
          }`}
        />

        <div
          className={`absolute inset-y-0 right-0 w-[50.5%] bg-[#f4f2ed] dark:bg-[#161616] transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] z-10 ${
            isOpening ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        <div
          className={`relative z-20 flex items-center justify-center transition-all duration-500 ${
            isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div className="relative w-44 sm:w-60 md:w-72 aspect-[1842/622] select-none">
            <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none">
              <img
                src="/logo/icon_black.svg"
                alt=""
                className="w-full h-full object-contain dark:hidden"
              />
              <img
                src="/logo/icon_white.svg"
                alt=""
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>

            <div
              className="absolute inset-0 overflow-hidden pointer-events-none transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            >
              <div className="w-44 sm:w-60 md:w-72 aspect-[1842/622]">
                <img
                  src="/logo/icon_black.svg"
                  alt=""
                  className="w-full h-full object-contain dark:hidden"
                />
                <img
                  src="/logo/icon_white.svg"
                  alt=""
                  className="w-full h-full object-contain hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
