'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'
import { useMagnetic } from '../../lib/useMagnetic'

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  className,
  strength = 14,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  strength?: number
}) {
  const { ref, x, y } = useMagnetic(strength)
  const cls = variant === 'primary' ? 'btn-primary group' : 'btn-ghost group'

  const isFullWidth = (className ?? '').includes('w-full')
  return (
    <motion.div
      style={{ x, y }}
      className={`will-change-transform ${isFullWidth ? 'block w-full sm:inline-block sm:w-auto' : 'inline-block'}`}
    >
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`${cls} ${className ?? ''}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
