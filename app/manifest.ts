import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Elhoussaine AIT AICHTE Portfolio',
        short_name: 'codezeloss',
        description: 'Frontend Developer specializing in React.js and Next.js development',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#2bc47f',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            // Add more icon sizes if you have them
        ],
    }
}