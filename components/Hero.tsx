"use client"

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            className="w-full h-full max-h-screen lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between py-4 sm:py-16 md:py-20 lg:py-28 xl:py-32">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="mb-4 md:mb-7 lg:mb-8">
                    <motion.p
                        variants={itemVariants}
                        className="font-bold text-sm md:text-xl lg:text-2xl md:mt-1 mb-4 text-neutral-700 dark:text-neutral-300"
                    >
                        🌐 Full-Stack Web Developer · ✨ React & NEXT.js Specialist · 🎯 Product-Centric Builder
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="font-bold text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent mb-4"
                    >
                        Because Your App Deserves More Than a Template — It Deserves a Developer Who Cares
                    </motion.h1>
                </div>

                <motion.div variants={itemVariants}>
                    <p className="font-medium text-xs md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
                        From clean UIs to full-stack web apps and SaaS platforms, I design and build performant web
                        applications using the modern NEXT.js ecosystem — now with AI capabilities to take your product
                        even further.
                    </p>
                    <p className="font-medium text-xs md:text-base lg:text-lg mt-4 lg:mt-8 mb-4 text-neutral-600 dark:text-neutral-400">
                        Let’s turn ideas into real, usable software — fast.
                    </p>

                    <Link href="#contact">
                        <motion.div>
                            <Button
                                className="relative px-4 py-3 lg:px-8 lg:py-6 hover:font-bold text-base lg:text-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300"
                                variant="default"
                                size="sm"
                            >
                                Get in Touch
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}

// <motion.div
//     initial={{opacity: 0, scale: 0.5}}
//     animate={{opacity: 1, scale: 1}}
//     transition={{
//         duration: 0.5,
//         delay: 0.2,
//         ease: [0, 0.71, 0.2, 1.01]
//     }}
// >
//     <Image
//         className="hidden rounded-full text-sm border-4 border-black dark:border-white mb-14 lg:mb-0 w-[300px] h-[300px] md:w-[445px] md:h-[445px]"
//         src="/images/main-picture.jpg"
//         alt="Developer profile"
//         width={445}
//         height={445}
//     />
// </motion.div>

// <motion.h1
//     variants={itemVariants}
//     className="hidden font-bold text-4xl lg:text-5xl mb-3"
// >
//     Hi 👋! I&apos;m Elhoussaine, and I&apos;m
// </motion.h1>

// Transforming Designs into Exceptional Web Experiences