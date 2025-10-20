# Whaapy Landing Page

Landing page premium con animaciones espectaculares usando anime.js.

## 🎨 Stack

- **Next.js 15** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **anime.js** - Animaciones premium
- **Lucide React** - Icons

## ✨ Características

### Animaciones Implementadas

#### Hero Section
- ✅ Headline con entrada staggered
- ✅ Mockup animado con mensajes en tiempo real
- ✅ Morphing shapes (círculo → cuadrado → hexágono)
- ✅ Liquid blob background
- ✅ Sistema de partículas (30 partículas)
- ✅ Ripple effect en CTAs

#### Features Section
- ✅ Cards con 3D tilt (mouse hover)
- ✅ Entrada staggered al scroll
- ✅ Gradient border + glow en hover

#### How It Works
- ✅ Path drawing (líneas SVG animadas)
- ✅ Steps con entrada staggered
- ✅ Stats counters

#### FAQ
- ✅ Expand/collapse animado
- ✅ Chevron rotation

#### CTA Final
- ✅ Text reveal con circular mask
- ✅ Ripple effect en botón
- ✅ Gradient overlay animado

### Diseño
- 🎨 Light mode premium
- 📱 Responsive (mobile-first)
- ♿️ Soporte para `prefers-reduced-motion`
- 🚀 Lighthouse score 95+

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Dev server
npm run dev

# Build producción
npm run build

# Preview producción
npm start
```

## 📊 Analítica

Esta landing integra seguimiento con [PostHog](https://posthog.com) para medir interacciones clave.

1. Define las variables de entorno en un archivo `.env.local`:

```bash
NEXT_PUBLIC_POSTHOG_KEY="phc_xxx"
# Opcional, por defecto apunta a https://us.i.posthog.com
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

2. Reinicia el servidor de desarrollo para que los cambios surtan efecto.

Eventos capturados automáticamente:

- `section_viewed` (ej. sección CTA final)
- `cta_demo_click`, `cta_login_click`, `cta_contact_click`
- `header_mobile_menu_toggled` / `header_mobile_menu_closed`
- `contact_modal_opened` / `contact_modal_closed`
- `contact_form_submitted` + estados `*_success`, `*_failed`, `*_error`
- `$pageview` en cada navegación + `landing_tab_focus` al recuperar foco

Todos los eventos incluyen el contexto `product_area: "landing"` para segmentar fácilmente en PostHog.

## 📁 Estructura

```
app/
├── components/
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── AnimatedMockup.tsx
│   │   ├── MorphingShape.tsx
│   │   └── Particles.tsx
│   ├── features/
│   │   ├── Features.tsx
│   │   └── FeatureCard.tsx
│   ├── how-it-works/
│   │   └── HowItWorks.tsx
│   ├── faq/
│   │   └── FAQ.tsx
│   └── cta/
│       └── CTA.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🎯 Copy

Todos los textos y copys están en: `/docs/product/landing-page-copy.md`

## 🎨 Design Tokens

```css
--background: #FFFFFF
--surface: #F9FAFB
--accent: #25D366 (Verde WhatsApp)
--accent-hover: #128C7E
--text-primary: #111827
--text-secondary: #6B7280
```

## 🔗 Links

- Producción: TBD
- Dashboard: https://app.whaapy.com
- API: https://api.whaapy.com

## 📝 Notas

- Todas las animaciones usan `anime.js` para máximo control
- Intersection Observer para animaciones on scroll
- Reducir motion respetado para accesibilidad
- Build time: ~2 segundos
- First Load JS: ~117 KB (excelente)

