'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { captureEvent, isPostHogEnabled } from '@/app/lib/analytics'

export default function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const retryAttempts = useRef(0)
  const retryTimeout = useRef<number | null>(null)

  const capturePageview = () => {
    if (typeof window === 'undefined') return
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return

    if (!isPostHogEnabled()) {
      if (retryAttempts.current < 20) {
        retryAttempts.current += 1
        retryTimeout.current = window.setTimeout(() => {
          capturePageview()
        }, 200)
      }
      return
    }

    retryAttempts.current = 0
    if (retryTimeout.current) {
      window.clearTimeout(retryTimeout.current)
      retryTimeout.current = null
    }

    captureEvent('$pageview', {
      url: window.location.href,
      path: window.location.pathname,
      query: window.location.search,
      referrer: document.referrer || undefined,
      page_title: document.title,
    })
  }

  useEffect(() => {
    capturePageview()

    return () => {
      if (retryTimeout.current) {
        window.clearTimeout(retryTimeout.current)
        retryTimeout.current = null
      }
    }
  }, [pathname, searchParams])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPostHogEnabled()) {
        captureEvent('landing_tab_focus', {
          url: window.location.href,
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return null
}
