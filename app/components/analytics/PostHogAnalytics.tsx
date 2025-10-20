import Script from 'next/script'
import RouteChangeTracker from './RouteChangeTracker'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com'

const buildInitScript = () => {
  if (!POSTHOG_KEY) return ''

  return `\n    (function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}var u=e;"undefined"!==typeof a?u=e[a]=[]:a="posthog";u.people=u.people||[];u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e};u.people.toString=function(){return u.toString(1)+".people (stub)"};o="capture identify alias people.set people.set_once people.unset reset group group.identify group.set group.set_once group.unset register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing debug on off start_session stop_session has_started_session clear_session_extension get_session_property get_session_properties set_session_property reset_session_properties set_person_properties register_for_session_id".split(" ");for(p=0;p<o.length;p++)g(u,o[p]);e._i.push([i,s,a])},e.__SV=1.2)})(document,window.posthog||[]);\n    window.posthog.init('${POSTHOG_KEY}', {\n      api_host: '${POSTHOG_HOST}',\n      capture_pageview: false,\n      persistence: 'memory',\n      autocapture: true,\n      person_profiles: 'identified_only',\n      session_recording: {\n        maskAllInputs: false,\n      },\n      property_blacklist: ['email', 'message'],\n    });\n  `
}

export default function PostHogAnalytics() {
  if (!POSTHOG_KEY) {
    return null
  }

  return (
    <>
      <Script id="posthog-sdk" strategy="afterInteractive">
        {buildInitScript()}
      </Script>
      <RouteChangeTracker />
    </>
  )
}
