import type { GetServerSideProps } from 'next'

const paths = ['', 'en', 'de', 'fa']

const SiteMap = () => null

export const getServerSideProps = (async ({ res }) => {
  const BASE_URL = process.env.BASE_URL

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
      .map(
        (path) => `
    <url>
      <loc>${`${BASE_URL}/${path}`}</loc>
    </url>
    `
      )
      .join('')}
  </urlset>
`

  const dayInSeconds = 24 * 60 * 60

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60}, stale-while-revalidate=${dayInSeconds}`
  )

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}) satisfies GetServerSideProps

export default SiteMap
