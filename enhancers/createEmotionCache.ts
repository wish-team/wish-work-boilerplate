import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import type { Direction } from 'theme/type'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
/*
	It allows developers to easily override MUI styles
	with other styling solutions, like CSS modules.
*/
const createEmotionCache = (direction: Direction = 'ltr') => {
  const stylisPlugins = []
  if (direction === 'rtl') {
    stylisPlugins.push(rtlPlugin)
  }
  return createCache({
    key: `css-${direction[0]}`,
    prepend: true,
    stylisPlugins,
  })
}

export default createEmotionCache
