"use client"

import Container from "@/components/ui/Container";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/ModeToggle";
import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {motion} from "framer-motion";

export default function Footer() {
    const navItems = [
        {href: "#about-me", label: "About Me"},
        {href: "#skills", label: "Tech Stack"},
        {href: "#projects", label: "Projects"},
        {href: "#contact", label: "Contact Me"},
    ];

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800">
            <Container>
                <div
                    className="flex flex-col-reverse justify-center gap-y-6 items-center md:flex-row md:justify-between w-full py-8">
                    <motion.p
                        className="text-xs text-neutral-600 dark:text-neutral-400"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                    >
                        &copy; {new Date().getFullYear()} codezeloss. All rights reserved.
                    </motion.p>

                    <div className="hidden lg:flex items-center gap-x-8 font-medium">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.href}
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.2}}
                            >
                                <Link
                                    className="hover:text-emerald-500 transition-colors"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center gap-x-4">
                        {/* Dark mode icons */}
                        <div className="dark:flex items-center gap-x-4 md:gap-x-6 hidden">
                            <Link
                                title="LinkedIn"
                                target="_blank"
                                href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
                            >
                                <Image
                                    title="LinkedIn"
                                    className="cursor-pointer transition-transform hover:scale-110"
                                    src="/icons/icon-linkedin.svg"
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link title="GitHub" target="_blank" href={`${process.env.NEXT_PUBLIC_GITHUB}`}>
                                <Image
                                    title="GitHub"
                                    className="cursor-pointer transition-transform hover:scale-110"
                                    src="/icons/icon-github.svg"
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link
                                title="Twitter"
                                target="_blank"
                                href={`${process.env.NEXT_PUBLIC_XTWITTER}`}
                            >
                                <Image
                                    title="Twitter"
                                    className="cursor-pointer transition-transform hover:scale-110"
                                    src="/icons/icon-twitter.svg"
                                    alt="Twitter"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <ModeToggle/>
                        </div>

                        {/* Light mode icons */}
                        <div className="dark:hidden flex items-center gap-x-4">
                            <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.2}}>
                                <Link
                                    title="LinkedIn"
                                    target="_blank"
                                    href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
                                    className="hover:text-emerald-500 transition-colors"
                                >
                                    <FaLinkedin size={20}/>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.2}}>
                                <Link
                                    title="GitHub"
                                    target="_blank"
                                    href={`${process.env.NEXT_PUBLIC_GITHUB}`}
                                    className="hover:text-emerald-500 transition-colors"
                                >
                                    <FaGithub size={20}/>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.2}}>
                                <Link
                                    title="Twitter"
                                    target="_blank"
                                    href={`${process.env.NEXT_PUBLIC_XTWITTER}`}
                                    className="hover:text-emerald-500 transition-colors"
                                >
                                    <FaXTwitter size={20}/>
                                </Link>
                            </motion.div>
                            <ModeToggle/>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}