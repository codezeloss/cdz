'use client'

import Link from "next/link";
import {MdEmail} from "react-icons/md";
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
                        className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        Contact Me
                    </motion.h1>
                    <motion.div
                        className="text-base md:text-lg space-y-4"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <p className="text-neutral-600 dark:text-neutral-300">
                            I would love to hear about your project and discuss how I can help.
                            You can reach me on LinkedIn or X,
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 group"
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                            target="_blank"
                        >
                            <span>or email me at</span>
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
                {/* Uncomment below if you want a contact form */}
                {/* <div className="w-full ml-auto flex flex-col justify-end">
                    <ContactForm />
                </div> */}
            </div>
        </motion.footer>
    );
}
