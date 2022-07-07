import InstallPWA from 'components/PWA/InstallPWA'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../i18n'

const PWA = () => {
  return <InstallPWA />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale ?? '', ['common'], i18nConfig)),
    },
  }
}

export default PWA
