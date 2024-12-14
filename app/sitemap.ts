import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://codezeloss.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
        // {
        //     url: 'https://codezeloss.vercel.app/projects',
        //     lastModified: new Date(),
        //     changeFrequency: 'weekly',
        //     priority: 0.8,
        // },
        // {
        //     url: 'https://codezeloss.vercel.app/about',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.5,
        // },
        // {
        //     url: 'https://codezeloss.vercel.app/contact',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.5,
        // },
    ]
}