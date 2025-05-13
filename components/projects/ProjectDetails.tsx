"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {ExternalLink, Github} from "lucide-react";
import Link from "next/link";

interface ProjectDetailsProps {
    project: {
        id: string;
        title: string;
        description: string;
        images: string[];
        techs: { title: string; icon: string }[];
        preview: string;
        code: string;
        features?: string[];
    };
}

export default function ProjectDetails({project}: ProjectDetailsProps) {
    return (
        <motion.div
            className="w-full py-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            {/* Header Section */}
            <div className="mb-12">
                <motion.h1
                    className="text-4xl lg:text-5xl font-bold mb-4"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                >
                    {project.title}
                </motion.h1>

                <motion.p
                    className="text-lg text-neutral-600 dark:text-neutral-300 mb-6"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3}}
                >
                    {project.description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4}}
                >
                    {project.techs.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-1.5 text-sm rounded-full
                                bg-neutral-100 dark:bg-neutral-800/50
                                text-neutral-600 dark:text-neutral-300
                                border border-neutral-200 dark:border-neutral-700"
                        >
                            {tech.title}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Image Gallery Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
            >
                {/* Main Large Image */}
                <div className="md:col-span-2 relative aspect-video rounded-xl overflow-hidden">
                    <Image
                        src={project.images[0]}
                        alt="Main preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Secondary Images */}
                {project.images.slice(1).map((image, idx) => (
                    <div
                        key={idx}
                        className="relative aspect-video rounded-xl overflow-hidden group"
                    >
                        <Image
                            src={image}
                            alt={`Preview ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </motion.div>

            {/* Features Section */}
            {/*<motion.div*/}
            {/*    className="mb-12"*/}
            {/*    initial={{ opacity: 0, y: 20 }}*/}
            {/*    animate={{ opacity: 1, y: 0 }}*/}
            {/*    transition={{ delay: 0.6 }}*/}
            {/*>*/}
            {/*    <h2 className="text-2xl font-bold mb-6">Key Features</h2>*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
            {/*        {project.features?.map((feature, idx) => (*/}
            {/*            <div*/}
            {/*                key={idx}*/}
            {/*                className="flex items-center gap-3 p-4 rounded-lg*/}
            {/*                    bg-neutral-50 dark:bg-neutral-800/30*/}
            {/*                    border border-neutral-100 dark:border-neutral-800"*/}
            {/*            >*/}
            {/*                <div className="flex-shrink-0">*/}
            {/*                    <Check className="w-5 h-5 text-emerald-500" />*/}
            {/*                </div>*/}
            {/*                <p className="text-neutral-700 dark:text-neutral-300">{feature}</p>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/* Call to Action */}
            <motion.div
                className="flex gap-4 justify-start"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.7}}
            >
                {project.preview && (
                    <Link
                        href={project.preview}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg
                            bg-emerald-500 hover:bg-emerald-600
                            text-white font-medium transition-colors"
                    >
                        <ExternalLink className="w-5 h-5"/>
                        View Live Demo
                    </Link>
                )}

                {project.code && (
                    <Link
                        href={project.code}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg
                            bg-neutral-100 dark:bg-neutral-800
                            hover:bg-neutral-200 dark:hover:bg-neutral-700
                            text-neutral-700 dark:text-neutral-200
                            font-medium transition-colors"
                    >
                        <Github className="w-5 h-5"/>
                        View Code
                    </Link>
                )}
            </motion.div>
        </motion.div>
    );
}