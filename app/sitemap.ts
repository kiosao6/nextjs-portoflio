import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gabrielmaestre.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Projects
    {
      url: `${baseUrl}/projects/hazzly`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/projects/shinning-balloons`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Blog Posts
    {
      url: `${baseUrl}/blog/como-configurar-redux-toolkit-con-nextjs-usando-typescript`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/using-zustand-with-redux-devtools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}