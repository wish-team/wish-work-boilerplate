// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageview = (url: string) => {
  if ('gtag' in window && typeof window.gtag === 'function') {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
      page_path: url,
    })
  }
}

interface gaEventArg {
  action: string
  category?: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = ({ action, category = 'general', label, value }: gaEventArg) => {
  if ('gtag' in window && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
