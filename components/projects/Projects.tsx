'use client'

import ProjectItem from "@/components/projects/ProjectItem";
import {data} from "@/components/projects/data";
import {motion} from "framer-motion";

export default function Projects() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="projects" className="py-6 lg:py-11">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 lg:mb-16">
                    <motion.h1
                        className="text-5xl lg:text-7xl font-bold mb-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Projects
                    </motion.h1>
                    {/*<motion.p*/}
                    {/*    className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"*/}
                    {/*    initial={{ opacity: 0, y: 20 }}*/}
                    {/*    animate={{ opacity: 1, y: 0 }}*/}
                    {/*    transition={{ duration: 0.5, delay: 0.1 }}*/}
                    {/*>*/}
                    {/*    Here are some of the projects I've worked on. Click on each project to learn more about its features and development process.*/}
                    {/*</motion.p>*/}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {data.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            transition={{duration: 0.5}}
                        >
                            <ProjectItem {...project} src={project?.images[0] || ''}/>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optional: Add a call to action at the bottom */}
                {/*<motion.div*/}
                {/*    className="mt-16 text-center"*/}
                {/*    initial={{opacity: 0}}*/}
                {/*    animate={{opacity: 1}}*/}
                {/*    transition={{delay: 0.8}}*/}
                {/*>*/}
                {/*    <p className="text-neutral-600 dark:text-neutral-400 mb-2">*/}
                {/*        Interested in seeing more?*/}
                {/*    </p>*/}
                {/*    <a*/}
                {/*        href="https://github.com/codezeloss"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors"*/}
                {/*    >*/}
                {/*        View more on GitHub*/}
                {/*        <svg*/}
                {/*            xmlns="http://www.w3.org/2000/svg"*/}
                {/*            width="20"*/}
                {/*            height="20"*/}
                {/*            viewBox="0 0 24 24"*/}
                {/*            fill="none"*/}
                {/*            stroke="currentColor"*/}
                {/*            strokeWidth="2"*/}
                {/*            strokeLinecap="round"*/}
                {/*            strokeLinejoin="round"*/}
                {/*        >*/}
                {/*            <path d="M7 7l5 5-5 5"/>*/}
                {/*            <path d="M13 7l5 5-5 5"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*</motion.div>*/}
            </div>
        </section>
    );
}