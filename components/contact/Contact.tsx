'use client'

import Link from "next/link";
import {MdEmail} from "react-icons/md";
import {FaLinkedin, FaXTwitter} from "react-icons/fa6";
import {motion} from "framer-motion";

export default function Contact() {
    return (
        <motion.footer
            id="contact"
            className="w-full py-6 md:py-11 lg:py-20"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
        >
            <div className="w-full flex flex-col justify-between lg:flex-row items-start gap-20 mb-11 lg:mb-24">
                <div className="w-full mr-auto">
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        Get in Touch!
                    </motion.h1>

                    <motion.div
                        className="text-base md:text-lg space-y-4"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <p className="text-neutral-600 dark:text-neutral-300">
                            Have an idea, SaaS, dashboard, or feature you want to bring to life?<br/> Let’s chat!! —
                            worst
                            case, we end up as friends on the internet!
                        </p>

                        <h4 className="mt-6 font-semibold">Select your favorite way to interrupt me:</h4>

                        {/* LinkedIn */}
                        <Link
                            className="inline-flex items-center gap-2 group mr-4"
                            href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
                            target="_blank"
                        >
                            <motion.span
                                className="w-fit bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-2 inline-flex items-center gap-2 transition-all duration-300 hover:bg-emerald-500/10"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                <FaLinkedin className="size-4"/>
                                <span className="font-medium">LinkedIn</span>
                            </motion.span>
                        </Link>

                        {/* X (Twitter) */}
                        <Link
                            className="inline-flex items-center gap-2 group mr-4"
                            href={`${process.env.NEXT_PUBLIC_XTWITTER}`}
                            target="_blank"
                        >
                            <motion.span
                                className="w-fit bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-2 inline-flex items-center gap-2 transition-all duration-300 hover:bg-emerald-500/10"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                <FaXTwitter className="size-4"/>
                                <span className="font-medium">X (Twitter)</span>
                            </motion.span>
                        </Link>

                        {/* Email */}
                        <Link
                            className="inline-flex items-center gap-2 group mr-4"
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                            target="_blank"
                        >
                            <motion.span
                                className="w-fit bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-2 inline-flex items-center gap-2 transition-all duration-300 hover:bg-emerald-500/10"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                <MdEmail className="size-4"/>
                                <span className="font-medium">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    );
}
