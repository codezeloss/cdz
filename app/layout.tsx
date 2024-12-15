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
                {/* Background gradients and effects */}
                <div className="fixed inset-0 -z-10">
                    {/* Light mode background */}
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 transition-colors duration-300">
                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"/>

                        {/* Light mode gradient orbs */}
                        <div
                            className="absolute top-[-20%] left-0 right-0 h-[500px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-[100px] dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-emerald-500/10"/>

                        {/* Bottom accent */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-emerald-50/50 to-transparent dark:from-emerald-950/50"/>

                        {/* Additional subtle effects */}
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-transparent dark:via-emerald-500/[0.03] blur-3xl"/>
                    </div>
                </div>

                {/* Content overlay */}
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