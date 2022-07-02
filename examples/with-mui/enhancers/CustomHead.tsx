import { useTranslation } from 'next-i18next'
import Head from 'next/head'

interface CustomHeadProps {
  title: string
  openGraphTitle: string
}

const CustomHead = (props: CustomHeadProps) => {
  const { t } = useTranslation('common')

  return (
    <Head>
      <title>{t('meta.title')}</title>
      <meta name="og:title" content={t(props.openGraphTitle)} />
    </Head>
  )
}

export default CustomHead
