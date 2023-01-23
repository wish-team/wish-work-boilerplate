import createEmotionServer from '@emotion/server/create-instance'
import type { AvailableLocales } from '@/enhancers/configs/availableLocales'
import { availableLocales } from '@/enhancers/configs/availableLocales'
import createEmotionCache from '@/enhancers/createEmotionCache'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { Direction } from '@/theme/type'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
          <meta name="theme-color" content="#000" />

          <link rel="apple-touch-startup-image" href="/icons/apple-splash-750-1334.jpg" />

          <meta name="format-detection" content="telephone=no" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon/favicon.ico" />

          <link href={'/fonts/Ridley/style.css'} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const initialProps = await Document.getInitialProps(ctx)

  // Create Emotion cache
  const direction = availableLocales[(ctx.locale as AvailableLocales) ?? 'en']
    ?.direction as Direction
  const cache = createEmotionCache(direction)

  // Extract styles from html
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  const chunks = extractCriticalToChunks(initialProps.html)
  const styles = constructStyleTagsFromChunks(chunks)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props: any) {
          return <App serverEmotionCache={cache} {...props} />
        },
    })

  return {
    ...initialProps,
    emotionStyleTags: styles,
  }
}

export default MyDocument
