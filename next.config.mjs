process.env.ENV_VALIDATION === 'true' && (await import('./src/env/env.mjs'))

import BUNDLE_ANALYZER from '@next/bundle-analyzer'

const withBundleAnalyzer = BUNDLE_ANALYZER({
  enabled: process.env.ANALYZE === 'true',
})

import i18nextConfig from './next-i18next.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nextConfig.i18n,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default withBundleAnalyzer(nextConfig)
