import type { MetadataRoute } from 'next'

const paths = ['', 'en', 'de', 'about', 'contact-us', 'abbas']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${process.env.BASE_URL}/${path}`,
    lastModified: new Date(),
  }))
}
