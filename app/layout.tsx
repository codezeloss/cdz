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
        title: "Elhoussaine AIT AICHTE | Frontend & Next.js Developer",
        description: "Frontend Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive, performant web applications.",
    },
    fr: {
        title: "Elhoussaine AIT AICHTE | Développeur Frontend & Next.js",
        description: "Développeur Frontend spécialisé en React.js et Next.js. Expert en transformation de designs en applications web réactives et performantes.",
    },
    ar: {
        title: "Elhoussaine AIT AICHTE | مطور Frontend & Next.js",
        description: "مطور واجهة أمامية متخصص في React.js و Next.js. خبير في تحويل التصاميم إلى تطبيقات ويب سريعة الاستجابة وعالية الأداء.",
    }
};

export const metadata: Metadata = {
    title: {
        template: '%s | Elhoussaine AIT AICHTE',
        default: 'Elhoussaine AIT AICHTE | Frontend & Next.js Developer',
    },
    description: "Frontend Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive web applications.",
    keywords: [
        // English keywords
        "Frontend Developer", "JavaScript Developer", "React Developer", "Next.js Developer", "MENA", "Web Developer", "Developer Agadir",
        // French keywords
        "Développeur Frontend", "Développeur React", "Développeur Web", "Développeur Agadir", "Développeur Maroc", "Développeur Web Maroc",
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
        title: "Elhoussaine AIT AICHTE | Frontend & Next.js Developer",
        description: "Frontend Developer specializing in React.js and Next.js development. Expert in transforming designs into responsive, performant web applications.",
        siteName: "Elhoussaine AIT AICHTE Portfolio",
        images: [
            {
                url: "/og-image.png", // You'll need to create this
                width: 1200,
                height: 630,
                alt: "Elhoussaine AIT AICHTE - Frontend Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elhoussaine AIT AICHTE | Frontend & Next.js Developer",
        description: "Frontend Developer specializing in React.js and Next.js development.",
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
                {/* Background gradients */}
                <div className="fixed inset-0 -z-10">
                    {/* Light mode background */}
                    <div className="absolute inset-0 bg-white dark:bg-neutral-900 transition-colors duration-300">
                        {/* Light mode gradient orbs */}
                        <div
                            className="absolute top-0 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div
                            className="absolute top-0 -right-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div
                            className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>

                    {/* Dark mode gradient orbs */}
                    <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-300">
                        <div
                            className="absolute top-0 -left-4 w-72 h-72 bg-emerald-900 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob"></div>
                        <div
                            className="absolute top-0 -right-4 w-72 h-72 bg-teal-900 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div
                            className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-800 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                    </div>
                </div>

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col justify-between min-h-screen backdrop-blur-[2px]">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}