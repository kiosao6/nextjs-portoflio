import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.gabrielmaestre.com/sitemap.xml',
    host: 'https://www.gabrielmaestre.com',
  }
}