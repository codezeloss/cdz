"use client"

import Link from "next/link";
import {ModeToggle} from "@/components/ui/ModeToggle";
import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {motion} from "framer-motion";
import {Terminal} from "lucide-react";

export default function Navbar() {
    const navItems = [
        {href: "/#about-me", label: "About Me"},
        {href: "/#services", label: "Services"},
        {href: "/#skills", label: "Tech Stack"},
        {href: "/#projects", label: "Projects"},
        {href: "/#contact", label: "Contact Me"},
    ];

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.3}}
        >
            <nav
                className="flex flex-col justify-center gap-y-2 md:gap-y-0 items-center md:flex-row md:justify-between w-full py-4 lg:py-5">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-x-2"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                >
                    <Terminal className='size-11 text-slate-500'/>
                    <Link href="/" className="font-extrabold text-2xl">codezeloss</Link>
                </motion.div>

                {/* Navigation Links */}
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

                {/* Social Links */}
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
            </nav>
        </motion.header>
    );
}

{/*<Image*/
}
{/*    src="/cdz-icon.png"*/
}
{/*    alt="codezeloss icon"*/
}
{/*    width={35}*/
}
{/*    height={35}*/
}
{/*    className="rounded-lg"*/
}
{/*/>*/
}