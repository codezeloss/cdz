import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {ThemeProvider} from "@/components/ui/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Container from "@/components/ui/Container";

const spaceGrotesk = Space_Grotesk({subsets: ["latin"]});

const languages = {
    en: {
        title: "codezeloss | Full-Stack Developer",
        description: "Full-Stack Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive, performant web applications.",
    },
    fr: {
        title: "codezeloss | Développeur Full-Stack",
        description: "Développeur Full-Stack spécialisé en React.js et Next.js. Expert en transformation de designs en applications web réactives et performantes.",
    },
    ar: {
        title: "codezeloss | Full-Stack Developer",
        description: "مطور Full-Stack متخصص في React.js و Next.js. خبير في تحويل التصاميم إلى تطبيقات ويب سريعة الاستجابة وعالية الأداء.",
    }
};

export const metadata: Metadata = {
    title: {
        template: '%s | codezeloss',
        default: 'codezeloss | Full-Stack Next.js Developer',
    },
    description: "Full-Stack Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive web applications.",
    keywords: [
        // English keywords
        "Frontend Developer", "JavaScript Developer", "React Developer", "Next.js Developer", "MENA", "Web Developer", "Developer Agadir", 'Full-Stack',
        // French keywords
        "Développeur Frontend", "Développeur React", "Développeur Web", "Développeur Agadir", "Développeur Maroc", "Développeur Web Maroc", "Développeur Web Full-Stack",
        // Arabic keywords
        "مطور واجهة أمامية", "مطور ويب", "مبرمج مواقع",
        // Location-based keywords
        "Morocco", "Maroc", "المغرب",
        "Agadir", "أكادير",
        "Freelance developer Morocco", "Développeur freelance Maroc", "مطور مستقل المغرب"
    ],
    alternates: {
        canonical: "https://codezeloss.vercel.app",
        languages: {
            'en': 'https://codezeloss.vercel.app/en',
            'fr': 'https://codezeloss.vercel.app/fr',
            'ar': 'https://codezeloss.vercel.app/ar'
        }
    },
    openGraph: {
        locale: 'en_US',
        alternateLocale: ['fr_FR', 'ar_MA'],
        type: "website",
        url: "https://codezeloss.vercel.app",
        title: "codezeloss | Full-Stack Next.js Developer",
        description: "Full-Stack Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive, performant web applications.",
        siteName: "codezeloss Portfolio",
        images: [
            {
                url: "/og-image.png", // We need to create this
                width: 1200,
                height: 630,
                alt: "codezeloss - Full-Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "codezeloss | Full-Stack Next.js Developer",
        description: "Full-Stack Developer specializing in React.js and Next.js development.",
        creator: "@codezeloss",
        images: ["/og-image.png"], // Same image as OG
    },
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <JsonLd/>
        </head>
        <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
        >
            <div className="w-full h-full min-h-screen flex flex-col justify-between relative">
                {/* Professional background with subtle patterns */}
                <div className="fixed inset-0 -z-10">
                    {/* Base background */}
                    <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#121212] transition-colors duration-300">
                        {/* Professional grid pattern */}
                        <div className="absolute inset-0
                            bg-[linear-gradient(90deg,#00000008_1px,transparent_1px),linear-gradient(180deg,#00000008_1px,transparent_1px)]
                            bg-[size:40px_40px]
                            dark:bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px),linear-gradient(180deg,#ffffff08_1px,transparent_1px)]"
                        />

                        {/* Subtle dot pattern overlay */}
                        <div className="absolute inset-0
                            bg-[radial-gradient(#00000010_1px,transparent_1px)]
                            bg-[size:20px_20px]
                            dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
                            opacity-70"
                        />

                        {/* Top-right accent */}
                        <div className="absolute top-0 right-0 w-[800px] h-[500px]
                            bg-gradient-to-bl from-blue-500/[0.03] via-indigo-500/[0.02] to-transparent
                            dark:from-blue-500/[0.02] dark:via-indigo-500/[0.01] dark:to-transparent
                            blur-[80px]"
                        />

                        {/* Bottom-left accent */}
                        <div className="absolute bottom-0 left-0 w-[800px] h-[500px]
                            bg-gradient-to-tr from-gray-500/[0.03] via-blue-500/[0.02] to-transparent
                            dark:from-gray-500/[0.02] dark:via-blue-500/[0.01] dark:to-transparent
                            blur-[80px]"
                        />
                    </div>
                </div>

                {/* Professional frosted glass effect for content */}
                <Container>
                    {/* Navbar with subtle shadow */}
                    <Navbar/>

                    {/* Main content with professional spacing */}
                    <main
                        className="flex-grow w-full max-w-screen-xl"
                        aria-label="Main content"
                    >
                        {children}
                    </main>

                    {/* Footer with subtle top border */}
                    <Footer/>
                </Container>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}