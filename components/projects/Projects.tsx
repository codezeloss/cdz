"use client"

import ProjectItem from "@/components/projects/ProjectItem";
import {data} from "@/components/projects/data";
import {motion} from "framer-motion";

export default function Projects() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Increased delay for better flow
            }
        }
    };

    const projectVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.6},
        }
    };

    return (
        <section id="projects" className="py-6 md:py-11 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 lg:mb-16">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Some of What I've Built
                    </motion.h1>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="flex flex-col gap-6" // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {data.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                        >
                            <ProjectItem {...project} src={project?.images[0] || ''} isUnderConstruction/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
