'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { cn } from '@/lib/utils'

export type TransitionVariant =
  | 'circle'
  | 'square'
  | 'triangle'
  | 'diamond'
  | 'hexagon'
  | 'rectangle'
  | 'star'

export interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number
  variant?: TransitionVariant
  fromCenter?: boolean
  theme?: 'light' | 'dark'
  onThemeChange?: (theme: 'light' | 'dark') => void
}

function polygonCollapsed(point: string, vertexCount: number): string {
  const pairs = Array.from({ length: vertexCount }, () => point).join(', ')
  return `polygon(${pairs})`
}

function getThemeTransitionClipPaths(
  variant: TransitionVariant,
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number
): [string, string] {
  const toX = (x: number) => `${(x / viewportWidth) * 100}%`
  const toY = (y: number) => `${(y / viewportHeight) * 100}%`
  const point = (x: number, y: number) => `${toX(x)} ${toY(y)}`
  const toRadius = (r: number) =>
    `${(r / (Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2)) * 100}%`

  switch (variant) {
    case 'circle':
      return [
        `circle(0% at ${point(cx, cy)})`,
        `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
      ]
    case 'square': {
      const halfW = Math.max(cx, viewportWidth - cx)
      const halfH = Math.max(cy, viewportHeight - cy)
      const halfSide = Math.max(halfW, halfH) * 1.05
      const end = [
        point(cx - halfSide, cy - halfSide),
        point(cx + halfSide, cy - halfSide),
        point(cx + halfSide, cy + halfSide),
        point(cx - halfSide, cy + halfSide),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'triangle': {
      const scale = maxRadius * 2.2
      const dx = (Math.sqrt(3) / 2) * scale
      const verts = [
        point(cx, cy - scale),
        point(cx + dx, cy + 0.5 * scale),
        point(cx - dx, cy + 0.5 * scale),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 3), `polygon(${verts})`]
    }
    case 'diamond': {
      const R = maxRadius * Math.SQRT2
      const end = [
        point(cx, cy - R),
        point(cx + R, cy),
        point(cx, cy + R),
        point(cx - R, cy),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'hexagon': {
      const R = maxRadius * Math.SQRT2
      const verts: string[] = []
      for (let i = 0; i < 6; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 3
        verts.push(point(cx + R * Math.cos(a), cy + R * Math.sin(a)))
      }
      return [polygonCollapsed(point(cx, cy), 6), `polygon(${verts.join(', ')})`]
    }
    case 'rectangle': {
      const halfW = Math.max(cx, viewportWidth - cx)
      const halfH = Math.max(cy, viewportHeight - cy)
      const end = [
        point(cx - halfW, cy - halfH),
        point(cx + halfW, cy - halfH),
        point(cx + halfW, cy + halfH),
        point(cx - halfW, cy + halfH),
      ].join(', ')
      return [polygonCollapsed(point(cx, cy), 4), `polygon(${end})`]
    }
    case 'star': {
      const R = maxRadius * Math.SQRT2 * 1.03
      const innerRatio = 0.42
      const starPolygon = (radius: number) => {
        const verts: string[] = []
        for (let i = 0; i < 5; i++) {
          const outerA = -Math.PI / 2 + (i * 2 * Math.PI) / 5
          verts.push(point(cx + radius * Math.cos(outerA), cy + radius * Math.sin(outerA)))
          const innerA = outerA + Math.PI / 5
          verts.push(point(cx + radius * innerRatio * Math.cos(innerA), cy + radius * innerRatio * Math.sin(innerA)))
        }
        return `polygon(${verts.join(', ')})`
      }
      const startR = Math.max(2, R * 0.025)
      return [starPolygon(startR), starPolygon(R)]
    }
    default:
      return [
        `circle(0% at ${point(cx, cy)})`,
        `circle(${toRadius(maxRadius)} at ${point(cx, cy)})`,
      ]
  }
}

export function AnimatedThemeToggler({
  className,
  duration = 500,
  variant = 'circle',
  fromCenter = false,
  theme,
  onThemeChange,
  children,
  ...props
}: AnimatedThemeTogglerProps) {
  const shape = variant ?? 'circle'
  const isControlled = theme !== undefined
  const [internalIsDark, setInternalIsDark] = useState(false)
  const isDark = isControlled ? theme === 'dark' : internalIsDark
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isTransitioningRef = useRef(false)
  const activeAnimRef = useRef<Animation | null>(null)

  const cancelAnim = useCallback(() => {
    activeAnimRef.current?.cancel()
    activeAnimRef.current = null
  }, [])

  useEffect(() => {
    return () => {
      cancelAnim()
      const root = document.documentElement
      if (root.dataset.magicuiThemeVt !== 'active') return
      delete root.dataset.magicuiThemeVt
      root.style.removeProperty('--magicui-theme-toggle-vt-duration')
      root.style.removeProperty('--magicui-theme-vt-clip-from')
    }
  }, [cancelAnim])

  useEffect(() => {
    if (isControlled) return
    const updateTheme = () => {
      setInternalIsDark(document.documentElement.classList.contains('dark'))
    }
    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [isControlled])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (
      !button ||
      isTransitioningRef.current ||
      document.documentElement.dataset.magicuiThemeVt === 'active'
    )
      return

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    let x: number
    let y: number
    if (fromCenter) {
      x = viewportWidth / 2
      y = viewportHeight / 2
    } else {
      const { top, left, width, height } = button.getBoundingClientRect()
      x = left + width / 2
      y = top + height / 2
    }
    const container =
      document.getElementById('page-container') ||
      (document.body.firstElementChild as HTMLElement | null)
    const containerRect = container?.getBoundingClientRect() ?? {
      left: Math.max(0, (viewportWidth - 1760) / 2),
      right: Math.min(viewportWidth, (viewportWidth + 1760) / 2),
      top: 0,
      bottom: viewportHeight,
      width: Math.min(viewportWidth, 1760),
      height: viewportHeight,
    }

    const maxRadius = Math.hypot(
      Math.max(x - containerRect.left, containerRect.right - x),
      Math.max(y - containerRect.top, containerRect.bottom - y)
    )
    const applyTheme = () => {
      const newTheme = !isDark
      document.documentElement.classList.toggle('dark')
      if (isControlled) {
        onThemeChange?.(newTheme ? 'dark' : 'light')
      } else {
        setInternalIsDark(newTheme)
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      }
    }

    if (typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    const clipPath = getThemeTransitionClipPaths(
      shape,
      x,
      y,
      maxRadius,
      viewportWidth,
      viewportHeight
    )
    const root = document.documentElement
    root.dataset.magicuiThemeVt = 'active'
    root.style.setProperty(
      '--magicui-theme-toggle-vt-duration',
      `${duration}ms`
    )
    root.style.setProperty('--magicui-theme-vt-clip-from', clipPath[0])

    const cleanup = () => {
      isTransitioningRef.current = false
      delete root.dataset.magicuiThemeVt
      root.style.removeProperty('--magicui-theme-toggle-vt-duration')
      root.style.removeProperty('--magicui-theme-vt-clip-from')
      cancelAnim()
    }

    isTransitioningRef.current = true

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    if (typeof transition?.finished?.finally === 'function') {
      transition.finished.finally(cleanup).catch(() => {})
    } else {
      cleanup()
    }

    const ready = transition?.ready
    if (ready && typeof ready.then === 'function') {
      ready
        .then(() => {
          const anim = document.documentElement.animate(
            {
              clipPath,
            },
            {
              duration,
              easing: shape === 'star' ? 'linear' : 'ease-in-out',
              fill: 'forwards',
              pseudoElement: '::view-transition-new(root)',
            }
          )
          activeAnimRef.current = anim
        })
        .catch(() => {})
    }
  }, [
    shape,
    fromCenter,
    duration,
    isDark,
    isControlled,
    onThemeChange,
    cancelAnim,
  ])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        'group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-current transition-transform hover:scale-105 overflow-hidden',
        className
      )}
      aria-label="Alternar tema"
      title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      {...props}
    >
      {children ?? (
        <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
          <Sun
            size={16}
            className={cn(
              'absolute transition-all duration-300 transform',
              isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
            )}
          />
          <Moon
            size={16}
            className={cn(
              'absolute transition-all duration-300 transform',
              !isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            )}
          />
        </div>
      )}
      <span className="sr-only">Alternar tema</span>
    </button>
  )
}
