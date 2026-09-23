'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export type CtaButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type CtaButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark-outline'

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  target?: string
  rel?: string
  size?: CtaButtonSize
  variant?: CtaButtonVariant
  isFullWidth?: boolean
  children?: React.ReactNode
  className?: string
  sliderClassName?: string
  textClassName?: string
}

const sizeClasses: Record<CtaButtonSize, string> = {
  xs: 'px-4 py-2 text-[10px] uppercase tracking-wider font-semibold',
  sm: 'px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold',
  md: 'px-7 py-3.5 sm:px-8 sm:py-4 text-xs uppercase tracking-widest font-semibold',
  lg: 'px-9 py-4 sm:px-10 sm:py-4.5 text-xs sm:text-sm uppercase tracking-widest font-semibold',
}

const variantClasses: Record<CtaButtonVariant, string> = {
  primary: 'bg-[#B88A2D] text-white border-0 shadow-md hover:shadow-lg',
  secondary:
    'bg-[#161616] text-white dark:bg-[#f1efe8] dark:text-[#161616] border-0 shadow-sm hover:shadow-md',
  outline:
    'bg-transparent text-[#24271d] dark:text-[#f1efe8] border border-black/15 dark:border-white/20 shadow-xs hover:border-black/30 dark:hover:border-white/40',
  'dark-outline':
    'bg-white/5 text-white border border-white/20 shadow-xs hover:border-white/40',
}

const defaultSliderClasses: Record<CtaButtonVariant, string> = {
  primary: 'bg-[#9e7421]',
  secondary: 'bg-[#2a2d24] dark:bg-[#e2dfd6]',
  outline: 'bg-black/5 dark:bg-white/10',
  'dark-outline': 'bg-white/15',
}

const defaultTextClasses: Record<CtaButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-white dark:text-[#161616]',
  outline: 'text-[#24271d] dark:text-[#f1efe8]',
  'dark-outline': 'text-white',
}

export const CtaButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CtaButtonProps
>(
  (
    {
      href,
      target,
      rel,
      size = 'md',
      variant = 'primary',
      isFullWidth = false,
      children,
      className,
      sliderClassName,
      textClassName,
      type = 'button',
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const combinedClasses = cn(
      'group relative inline-flex items-center justify-center overflow-hidden rounded-full cursor-pointer select-none transition-all duration-300 ease-out active:scale-[0.98] will-change-transform',
      sizeClasses[size],
      variantClasses[variant],
      isFullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none active:scale-100',
      className
    )

    const renderedSlider = (
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none rounded-full',
          defaultSliderClasses[variant],
          sliderClassName
        )}
      />
    )

    const renderedText = (
      <span
        className={cn(
          'relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300 pointer-events-none',
          isFullWidth && 'w-full',
          defaultTextClasses[variant],
          textClassName
        )}
      >
        {children}
      </span>
    )

    if (href) {
      const isExternal = href.startsWith('http:') || href.startsWith('https:') || href.startsWith('mailto:') || href.startsWith('tel:')
      const isAnchor = href.startsWith('#')

      if (isExternal || isAnchor) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target || (isExternal && !href.startsWith('mailto:') && !href.startsWith('tel:') ? '_blank' : undefined)}
            rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
            className={combinedClasses}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {renderedSlider}
            {renderedText}
          </a>
        )
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          className={combinedClasses}
          {...(props as unknown as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            'href'
          >)}
        >
          {renderedSlider}
          {renderedText}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {renderedSlider}
        {renderedText}
      </button>
    )
  }
)

CtaButton.displayName = 'CtaButton'
