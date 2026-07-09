import { cn } from '@/lib/utils'

export type LogoVariant = 'mark' | 'square' | 'lockup'
export type LogoColor = 'green' | 'ink' | 'white' | 'current'

const COLOR_MAP: Record<LogoColor, string> = {
  green: '#16a34a',
  ink: '#14211a',
  white: '#ffffff',
  current: 'currentColor',
}

export interface LogoProps {
  /** `mark` (bare), `square` (tile behind), or `lockup` (mark + wordmark). */
  variant?: LogoVariant
  color?: LogoColor
  /** Mark diameter in px. Default 40. */
  size?: number
  /** Wordmark text for the `lockup` variant. Default "Decentral Park". */
  text?: string
  className?: string
}

/** A tree inside a dashed ring — the Decentral Park mark. Self-contained SVG. */
export function Logo({
  variant = 'mark',
  color = 'green',
  size = 40,
  text = 'Decentral Park',
  className,
}: LogoProps) {
  const c = COLOR_MAP[color]

  const mark = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Decentral Park">
      {/* dashed ring */}
      <circle cx="32" cy="32" r="29" stroke={c} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5.4" />
      {/* foliage */}
      <circle cx="32" cy="26" r="9.5" fill={c} />
      <circle cx="23.5" cy="31" r="7.5" fill={c} />
      <circle cx="40.5" cy="31" r="7.5" fill={c} />
      {/* trunk */}
      <rect x="29.5" y="30" width="5" height="16" rx="0.5" fill={c} />
    </svg>
  )

  if (variant === 'square') {
    return <span className={cn('inline-flex p-3 bg-paper', className)}>{mark}</span>
  }

  if (variant === 'lockup') {
    return (
      <span className={cn('inline-flex items-center gap-2.5', className)}>
        {mark}
        <span
          className="font-display font-bold uppercase tracking-tight leading-none"
          style={{ color: c === 'currentColor' ? undefined : c, fontSize: size * 0.42 }}
        >
          {text}
        </span>
      </span>
    )
  }

  return <span className={cn('inline-flex', className)}>{mark}</span>
}
