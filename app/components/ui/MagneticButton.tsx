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
  const cls =
    variant === 'primary'
      ? 'btn-primary group gradient-border'
      : 'btn-ghost group gradient-border'

  return (
    <motion.div style={{ x, y }} className="inline-block will-change-transform">
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
