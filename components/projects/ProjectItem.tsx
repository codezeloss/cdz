'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import Link from "next/link";
import {AppWindowMac, Github} from "lucide-react";

interface Props {
    id: string;
    src: string;
    title: string;
    techs: string[];
    preview: string;
    code: string;
    description: string;
}

const ProjectItem = ({id, src, title, techs, preview, code, description}: Props) => {
    const router = useRouter();

    return (
        <motion.div
            // onClick={() => router.push(`/${id}`)}
            className="group relative rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer
                dark:bg-neutral-900/40 dark:backdrop-blur-sm dark:border-neutral-800 dark:hover:border-gray-500/50
                bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-gray-500/50"
            whileHover={{y: -5}}
        >
            <div className="p-6 flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold dark:text-white text-neutral-900">{title}</h3>
                    <div className="flex gap-2">
                        {code && (
                            <Link
                                href={code}
                                target="_blank"
                                className="p-2 rounded-lg transition-colors group/link
                                    dark:bg-neutral-800/50 dark:hover:bg-gray-500/20
                                    bg-neutral-100 hover:bg-gray-500/10"
                            >
                                <Github
                                    className="w-5 h-5 text-neutral-500 group-hover/link:text-gray-600 transition-colors
                                        dark:text-neutral-400 dark:group-hover/link:text-gray-500"
                                    strokeWidth={1.5}
                                />
                                <span className="sr-only">View Code</span>
                            </Link>
                        )}
                        {preview && (
                            <Link
                                href={preview}
                                target="_blank"
                                className="p-2 rounded-lg transition-colors group/link
                                    dark:hover:bg-neutral-800/50 dark:bg-gray-500/20
                                    hover:bg-neutral-100 bg-gray-500/10"
                            >
                                <AppWindowMac
                                    className="w-5 h-5 group-hover/link:text-neutral-500 text-gray-600 transition-colors
                                        dark:text-neutral-400 dark:group-hover/link:text-gray-500"
                                    strokeWidth={1.5}
                                />
                                <span className="sr-only">View Live Demo</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Preview Image */}
                <div className="mt-4 rounded-lg overflow-hidden">
                    <div className="relative aspect-[16/9]">
                        <Image
                            src={src}
                            alt={`${title} preview`}
                            fill
                            className="object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
                            loading="eager"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Description */}
                {/*<p className="text-neutral-600 dark:text-neutral-400 text-sm">*/}
                {/*    {description}*/}
                {/*</p>*/}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full text-neutral-600 bg-neutral-100
                                dark:bg-neutral-800/50 dark:text-neutral-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;