"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {Home, ArrowLeft} from "lucide-react";

export default function NotFound() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900 z-50">
            <div className="w-full max-w-md p-8">
                <motion.div
                    className="flex flex-col items-center text-center space-y-6"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{delay: 0.2}}
                    >
                        <Image
                            className="w-64 h-64 drop-shadow-lg"
                            src="/error-illustration.svg"
                            alt="Error illustration"
                            width={256}
                            height={256}
                            priority
                        />
                    </motion.div>

                    <div className="space-y-2">
                        <motion.h1
                            className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                        >
                            404
                        </motion.h1>
                        <motion.h2
                            className="text-2xl font-bold text-neutral-900 dark:text-white"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                        >
                            Page Not Found
                        </motion.h2>
                        <motion.p
                            className="text-neutral-600 dark:text-neutral-400"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                        >
                            The page you're looking for doesn't exist or has been moved.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 w-full"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6}}
                    >
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 flex-1"
                        >
                            <ArrowLeft className="w-4 h-4"/>
                            Go Back
                        </Button>

                        <Link href="/" className="flex-1">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full flex items-center gap-2"
                            >
                                <Home className="w-4 h-4"/>
                                Home Page
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}