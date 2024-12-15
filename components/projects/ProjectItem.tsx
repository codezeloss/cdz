import Image from "next/image";
import Link from "next/link";
import {AppWindowMac, Github} from "lucide-react";

interface Props {
    src: string;
    title: string;
    techs: string[];
    preview: string;
    code: string;
    description: string;
}

const ProjectItem = ({ src, title, techs, preview, code, description }: Props) => {
    return (
        <div className="group relative rounded-xl overflow-hidden border transition-all duration-300
            dark:bg-neutral-900/40 dark:backdrop-blur-sm dark:border-neutral-800 dark:hover:border-emerald-500/50
            bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-emerald-500/50">
            {/* Content Container */}
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
                        {preview && (
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

                {/* Preview Image */}
                <div className="mt-4 rounded-lg overflow-hidden">
                    <div className="relative aspect-[16/9]">
                        <Image
                            src={src}
                            alt={`${title} preview`}
                            fill
                            className="object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
                        />
                    </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {description}
                </p>

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
        </div>
    );
};

export default ProjectItem;


// const ProjectItem = ({src, title, techs, preview, code, description}: Props) => {
//     return (
//         <div className="group relative rounded-xl overflow-hidden border transition-all duration-300
//             dark:bg-neutral-900/40 dark:backdrop-blur-sm dark:border-neutral-800 dark:hover:border-emerald-500/50
//             bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-emerald-500/50">
//             <div className="p-6 flex flex-col lg:flex-row gap-6">
//                 {/* Left Side - Image */}
//                 <div className="lg:flex-1">
//                     <div className="rounded-lg overflow-hidden border">
//                         <Image
//                             src={src}
//                             alt={`${title} preview`}
//                             width={600}
//                             height={300}
//                             className="w-full h-[200px] lg:h-[300px] object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out"
//                         />
//                     </div>
//                 </div>
//
//                 {/* Right Side - Content */}
//                 <div className="lg:flex-1 flex flex-col gap-4">
//                     {/* Header */}
//                     <div className="flex justify-between items-start">
//                         <h3 className="text-2xl font-bold dark:text-white text-neutral-900">{title}</h3>
//                         <div className="flex gap-2">
//                             {code && (
//                                 <Link
//                                     href={code}
//                                     target="_blank"
//                                     className="p-2 rounded-lg transition-colors group/link
//                                         dark:bg-neutral-800/50 dark:hover:bg-emerald-500/20
//                                         bg-neutral-100 hover:bg-emerald-500/10"
//                                 >
//                                     <Github
//                                         className="w-5 h-5 text-neutral-500 group-hover/link:text-emerald-600 transition-colors
//                                             dark:text-neutral-400 dark:group-hover/link:text-emerald-500"
//                                         strokeWidth={1.5}
//                                     />
//                                     <span className="sr-only">View Code</span>
//                                 </Link>
//                             )}
//                             {preview && (
//                                 <Link
//                                     href={preview}
//                                     target="_blank"
//                                     className="p-2 rounded-lg transition-colors group/link
//                                         dark:bg-neutral-800/50 dark:hover:bg-emerald-500/20
//                                         bg-neutral-100 hover:bg-emerald-500/10"
//                                 >
//                                     <AppWindowMac
//                                         className="w-5 h-5 text-neutral-500 group-hover/link:text-emerald-600 transition-colors
//                                             dark:text-neutral-400 dark:group-hover/link:text-emerald-500"
//                                         strokeWidth={1.5}
//                                     />
//                                     <span className="sr-only">View Live Demo</span>
//                                 </Link>
//                             )}
//                         </div>
//                     </div>
//
//                     {/* Description */}
//                     <p className="text-neutral-600 dark:text-neutral-400 text-sm">
//                         {description}
//                     </p>
//
//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2 mt-auto">
//                         {techs.map((tech, index) => (
//                             <span
//                                 key={index}
//                                 className="px-3 py-1 text-xs rounded-full text-neutral-600 bg-neutral-100
//                                     dark:bg-neutral-800/50 dark:text-neutral-300"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };