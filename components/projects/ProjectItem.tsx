'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";

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
            onClick={() => router.push(`/${id}`)}
            className="group relative rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer
                dark:bg-neutral-900/40 dark:backdrop-blur-sm dark:border-neutral-800 dark:hover:border-emerald-500/50
                bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-emerald-500/50"
            whileHover={{y: -5}}
        >
            <div className="p-6 flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold dark:text-white text-neutral-900">{title}</h3>
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