import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

/** The official Decentral Park mark — a tree inside a dashed ring. */
const LOGO_SRC = '/images/decentralpark-mark.png'

export type LogoColor = 'green' | 'white'
export type LogoVariant = 'mark' | 'square' | 'lockup'

export interface LogoProps
  extends Omit<ComponentPropsWithoutRef<'img'>, 'color' | 'width' | 'height'> {
  /** Mark diameter in px. Default 40. */
  size?: number
  /** `white` knocks the mark out to white for dark/colored backgrounds. */
  color?: LogoColor
  /** `square` sets the mark on a paper tile; `lockup` adds the wordmark. */
  variant?: LogoVariant
  /** Wordmark text (implies the lockup). Default "Decentral Park". */
  text?: string
  className?: string
}

export function Logo({
  size = 40,
  color = 'green',
  variant = 'mark',
  text,
  className,
  style,
  ...rest
}: LogoProps) {
  const isWhite = color === 'white'
  const isSquare = variant === 'square'

  const imgStyle: CSSProperties = {
    // Knock the full-color mark out to white for the footer / colored fills.
    ...(isWhite ? { filter: 'brightness(0) saturate(100%) invert(100%)' } : null),
    ...(isSquare
      ? {
          padding: Math.round(size * 0.16),
          background: '#f0fdf4',
          boxSizing: 'border-box',
        }
      : null),
    ...style,
  }

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt="Decentral Park"
      width={size}
      height={size}
      className={className}
      style={imgStyle}
      {...rest}
    />
  )

  if (variant === 'lockup' || text) {
    return (
      <span className="inline-flex items-center gap-2.5">
        {img}
        <span
          className={cn(
            'font-display font-bold uppercase tracking-tight leading-none',
            isWhite ? 'text-paper' : 'text-ink',
          )}
          style={{ fontSize: Math.round(size * 0.5) }}
        >
          {text ?? 'Decentral Park'}
        </span>
      </span>
    )
  }

  return img
}
