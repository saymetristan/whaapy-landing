const LANDING_CONTEXT = {
  product_area: 'landing',
}

const withContext = (properties?: Record<string, unknown>) => ({
  ...LANDING_CONTEXT,
  ...(properties ?? {}),
  timestamp: new Date().toISOString(),
})

export const captureEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return
  if (!window.posthog || typeof window.posthog.capture !== 'function') return

  window.posthog.capture(eventName, withContext(properties))
}

export const identifyVisitor = (distinctId: string, properties?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return
  if (!window.posthog || typeof window.posthog.identify !== 'function') return

  window.posthog.identify(distinctId, withContext(properties))
}

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, properties?: Record<string, unknown>) => void
      identify?: (distinctId: string, properties?: Record<string, unknown>) => void
      init?: (key: string, options?: Record<string, unknown>) => void
      persistence?: string
    }
  }
}

export const isPostHogEnabled = () => {
  if (typeof window === 'undefined') {
    return Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
  }

  return Boolean(window.posthog)
}
