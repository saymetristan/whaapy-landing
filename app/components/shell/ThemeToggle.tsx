'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 text-text-muted transition-colors hover:border-text-subtle hover:text-text"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
