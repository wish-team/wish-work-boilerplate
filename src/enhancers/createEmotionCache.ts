import createCache from '@emotion/cache'
import type { Direction } from '@/theme/type'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
/*
	It allows developers to easily override MUI styles
	with other styling solutions, like CSS modules.
*/
const createEmotionCache = (direction: Direction = 'ltr') => {
  return createCache({
    key: `css-${direction[0]}`,
    prepend: true,
  })
}

export default createEmotionCache
