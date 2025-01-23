import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {ThemeProvider} from "@/components/ui/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

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
        <html lang="en">
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
                <div className="fixed inset-0 -z-10">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 transition-colors duration-300">
                        {/* Grid */}
                        <div className="absolute inset-0
                            bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)]
                            bg-[size:64px_64px]
                            dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
                            [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                        />

                        {/* Gradient accents */}
                        <div className="absolute top-[-20%] left-0 right-0 h-[500px] rounded-full
                            bg-gradient-to-br from-neutral-500/10 via-slate-500/10 to-transparent
                            dark:from-neutral-600/10 dark:via-slate-600/5 dark:to-transparent
                            blur-[100px]"
                        />

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-[300px]
                            bg-gradient-to-t from-neutral-50/50 via-neutral-50/25 to-transparent
                            dark:from-neutral-950/50 dark:via-neutral-950/25 dark:to-transparent"
                        />

                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr
                            from-transparent via-slate-500/[0.03] to-transparent
                            dark:via-slate-500/[0.01] blur-3xl"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col justify-between min-h-screen">
                    <Navbar/>
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}