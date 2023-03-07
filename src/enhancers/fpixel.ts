export const fbpPageview = () => {
  if ('fbq' in window && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const fbpEvent = (name: string, options = {}) => {
  if ('fbq' in window && typeof window.fbq === 'function') {
    window.fbq('track', name, options)
  }
}
