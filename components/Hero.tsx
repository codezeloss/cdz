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
            className="w-full h-full max-h-screen lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between py-11 sm:py-16 md:py-20 lg:py-28 xl:py-32">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className=""
            >
                <div className="mb-7 lg:mb-14">
                    <motion.h1
                        variants={itemVariants}
                        className="hidden font-bold text-4xl lg:text-5xl mb-3"
                    >
                        Hi 👋! I&apos;m Elhoussaine, and I&apos;m
                    </motion.h1>

                    <motion.h1
                        variants={itemVariants}
                        className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4"
                    >
                        Transforming Designs into Exceptional Web Experiences
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="font-bold text-xl md:text-2xl md:mt-1 mb-4"
                    >
                        Frontend & Next.js Developer | React Expert | UI Specialist
                    </motion.h2>
                </div>

                <motion.div variants={itemVariants}>
                    <h2 className="font-bold text-base lg:text-lg">
                        Ready to bring your vision to life?
                    </h2>
                    <h2 className="font-bold text-base lg:text-lg mb-4">
                        Let&apos;s create something amazing together!
                    </h2>

                    <Link href="#contact">
                        <motion.div
                            whileHover="hover"
                            initial="initial"

                        >
                            <Button
                                className="relative font-medium text-base px-6 py-2.5 overflow-hidden group"
                                variant="default"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-emerald-600 dark:bg-emerald-500"
                                    initial={{scale: 0, x: "-100%"}}
                                    variants={{
                                        hover: {
                                            scale: 1.5,
                                            x: "0%",
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeOut"
                                            }
                                        }
                                    }}
                                    style={{originX: 0, originY: 0.5}}
                                />
                                <motion.span
                                    className="relative z-10 group-hover:text-white transition-colors duration-300"
                                >
                                    Get in Touch
                                </motion.span>
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