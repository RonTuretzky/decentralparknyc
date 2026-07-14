import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * Button — square-edged with the signature hard drop shadow that depresses on
 * press. The `default` / `secondary` variants theme to the active app via
 * `var(--accent*)`; semantic variants are fixed.
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none',
    'font-body font-medium text-base',
    'border transition-[transform,box-shadow,background-color,color] duration-100 ease-out',
    'shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink focus-visible:outline-none',
    'disabled:opacity-50 disabled:pointer-events-none',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-[var(--accent)] text-paper border-transparent hover:bg-[var(--accent-hover)]',
        secondary:
          'bg-[var(--accent-soft)] text-[var(--accent-soft-text)] border-transparent hover:bg-paper',
        outline: 'bg-paper text-ink border-ink hover:bg-paper-1',
        light: 'bg-paper text-ink border-ink hover:bg-paper-1',
        positive: 'bg-park-green text-paper border-transparent hover:bg-park-green-1',
        destructive: 'bg-system-red text-paper border-transparent hover:bg-system-red/90',
        burn: 'bg-burn text-system-red border-transparent',
        ghost:
          'border-transparent shadow-none active:translate-x-0 active:translate-y-0 hover:bg-paper-1 text-ink',
        link:
          'border-transparent shadow-none active:translate-x-0 active:translate-y-0 text-[var(--accent)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-8 py-4',
        sm: 'px-4 py-1 text-sm shadow-hard-sm active:translate-x-0.5 active:translate-y-0.5',
        lg: 'px-10 py-5 text-lg shadow-hard-lg',
        icon: 'p-2.5 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
