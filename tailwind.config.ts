import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-subtle': 'rgb(var(--text-subtle) / <alpha-value>)',
        accent: '#25D366',
        'accent-bright': '#3DDC7A',
        'accent-deep': '#128C7E',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(37, 211, 102, 0.45)',
        'glow-soft': '0 0 120px -20px rgba(37, 211, 102, 0.25)',
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out both',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
