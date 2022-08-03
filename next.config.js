/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  images: {
    domains: ['media.graphcms.com'],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
}

module.exports = withPlugins([[withBundleAnalyzer], [withPWA]], nextConfig)
