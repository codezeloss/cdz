"use client";

import Image from "next/image";
import Link from "next/link";
import {AppWindowMac, Github} from "lucide-react";

interface Props {
    id: string;
    src: string;
    title: string;
    techs: { title: string; icon: string }[];
    preview: string;
    code: string;
    description: string;
    isUnderConstruction?: boolean;
}

const ProjectItem = ({
                         src,
                         title,
                         techs,
                         preview,
                         code,
                         description,
                         isUnderConstruction = false,
                     }: Props) => {
    return (
        <div className="relative">
            {/* Blur Overlay */}
            {isUnderConstruction && (
                <div
                    className="absolute border dark:border-neutral-800 dark:hover:border-emerald-500/50 border-neutral-200 hover:border-emerald-500/50 inset-0 z-20 backdrop-blur-md bg-white/50 dark:bg-black/30 rounded-xl pointer-events-none"/>
            )}

            {/* Coming Soon Badge */}
            {isUnderConstruction && (
                <div
                    className="absolute z-30 top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 shadow">
                    🔥 Coming Soon
                </div>
            )}

            <div
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300
          dark:bg-neutral-900/40 dark:backdrop-blur-sm dark:border-neutral-800 dark:hover:border-emerald-500/50
          bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-emerald-500/50
          ${isUnderConstruction ? "pointer-events-none select-none" : ""}`}
            >
                <div className="p-6 flex flex-col-reverse lg:flex-row gap-6 lg:items-center">
                    {/* Left Side */}
                    <div className="lg:flex-[0.6] flex flex-col gap-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold dark:text-white text-neutral-900">{title}</h3>
                            <div className="flex gap-2">
                                {!isUnderConstruction && code && (
                                    <Link
                                        href={code}
                                        target="_blank"
                                        className="p-2 rounded-lg transition-colors group/link
                      dark:bg-neutral-800/50 dark:hover:bg-emerald-500/20
                      bg-neutral-100 hover:bg-emerald-500/10"
                                    >
                                        <Github
                                            className="w-5 h-5 text-neutral-500 group-hover/link:text-emerald-600 transition-colors
                        dark:text-neutral-400 dark:group-hover/link:text-emerald-500"
                                            strokeWidth={1.5}
                                        />
                                        <span className="sr-only">View Code</span>
                                    </Link>
                                )}
                                {!isUnderConstruction && preview && (
                                    <Link
                                        href={preview}
                                        target="_blank"
                                        className="p-2 rounded-lg transition-colors group/link
                      dark:bg-neutral-800/50 dark:hover:bg-emerald-500/20
                      bg-neutral-100 hover:bg-emerald-500/10"
                                    >
                                        <AppWindowMac
                                            className="w-5 h-5 text-neutral-500 group-hover/link:text-emerald-600 transition-colors
                        dark:text-neutral-400 dark:group-hover/link:text-emerald-500"
                                            strokeWidth={1.5}
                                        />
                                        <span className="sr-only">View Live Demo</span>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full text-neutral-600 bg-neutral-100
                    dark:bg-neutral-800/50 dark:text-neutral-300"
                                >
                  {tech.title}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="lg:flex-[0.4]">
                        <div className="rounded-lg overflow-hidden border h-full">
                            <Image
                                src={src}
                                alt={`${title} preview`}
                                width={600}
                                height={300}
                                className="w-full h-[250px] lg:h-[300px] object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
