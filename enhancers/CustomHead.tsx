import { useTranslation } from 'next-i18next'
import Head from 'next/head'

interface CustomHeadProps {
  title: string
  metaTitle: string
  metaTitleContent: string
  url: string
  description: string
  image: string
  summaryCardTitle: string
}

/**
 * strings in props (except for image & url) are paths to their translations
 * NOT strings of their actual content
 */
const CustomHead = (props: CustomHeadProps) => {
  const { t } = useTranslation('common')

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{t(props.title)}</title>
      <meta name="title" content="WishWork" />
      <meta name="description" content="Something about WishWork" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={t(props.summaryCardTitle)} />
      <meta property="og:description" content={t(props.description)} />
      <meta property="og:image" content={props.image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={props.url} />
      <meta property="twitter:title" content={t(props.summaryCardTitle)} />
      <meta property="twitter:description" content={t(props.description)} />
      <meta property="twitter:image" content={props.image} />
    </Head>
  )
}

export default CustomHead
