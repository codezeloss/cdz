"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const groupedTechs = [
    {
        label: "Core Stack",
        techs: [
            {title: "JavaScript", icon: "/icons/JavaScript.svg"},
            {title: "TypeScript", icon: "/icons/TypeScript.svg"},
            {title: "React.js", icon: "/icons/reactjs.svg"},
            {title: "Next.js", icon: "/icons/nextjs.svg"},
        ],
    },
    {
        label: "Styling & UI",
        techs: [
            {title: "Tailwind CSS", icon: "/icons/tailwindcss.svg"},
            {title: "Shadcn UI", icon: "/icons/shadcnui.svg"},
            {title: "Material UI", icon: "/icons/materialui.svg"},
            {title: "Chakra UI", icon: "/icons/chakraui.svg"},
            {title: "Radix UI", icon: "/icons/radixui.svg"},
        ],
    },
    {
        label: "State & Data",
        techs: [
            {title: "React Query", icon: "/icons/react-query.svg"},
            {title: "Redux Toolkit", icon: "/icons/Redux.svg"},
            {title: "Prisma", icon: "/icons/Prisma.svg"},
            {title: "GraphQL", icon: "/icons/graphql.svg"},
            {title: "Redis", icon: "/icons/redis.svg"},
            {title: "Supabase", icon: "/icons/supabase.svg"},
            {title: "MongoDB", icon: "/icons/MongoDB.svg"},
            {title: "PostgreSQL", icon: "/icons/PostgreSQL.svg"},
            {title: "Zod", icon: "/icons/Zod.svg"},
        ],
    },
    {
        label: "AI & Automation",
        techs: [
            {title: "Claude AI", icon: "/icons/Claude-AI.svg"},
            {title: "Open AI", icon: "/icons/ChatGPT.svg"},
            {title: "DeepSeek", icon: "/icons/deepseek.svg"},
            {title: "HuggingFace", icon: "/icons/hugging-face.svg"},
        ],
    },
    {
        label: "Runtime & Tools",
        techs: [
            {title: "Node.js", icon: "/icons/nodejs.svg"},
            {title: "Bun.js", icon: "/icons/bunjs.svg"},
            {title: "NPM", icon: "/icons/npm-wordmark.svg"},
            {title: "Git", icon: "/icons/git.svg"},
            {title: "GitLab", icon: "/icons/GitLab.svg"},
            {title: "GitHub", icon: "/icons/GitHub-Light.svg"},
            {title: "Postman", icon: "/icons/Postman.svg"},
            {title: "Figma", icon: "/icons/figma.svg"},
            {title: "ReSend", icon: "/icons/ReSend.svg"},
        ],
    },
];

export default function TechStack() {
    return (
        <section id="skills" className="py-6 md:py-11 lg:py-20">
            <motion.h1
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-10"
            >
                What I Work With
            </motion.h1>

            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.1}}
                className="text-base md:text-lg max-w-3xl mb-10 text-neutral-600 dark:text-neutral-300"
            >
                I work across the full stack to design, build, and deploy modern web applications. Here&apos;s a look at
                the
                tools I use every day to turn ideas into robust digital products.
            </motion.p>

            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-11">
                {groupedTechs.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.4, delay: idx * 0.1}}
                        className="bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700
                             rounded-xl p-4 flex flex-col shadow-sm
                             hover:shadow-md transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-5 text-neutral-800 dark:text-neutral-200">
                            {group.label}
                        </h2>
                        <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
                            {group.techs.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col items-center w-20 sm:w-24"
                                >
                                    <div className="relative w-7 h-7 sm:w-12 sm:h-12 md:w-14 md:h-14">
                                        <Image
                                            src={tech.icon}
                                            alt={tech.title}
                                            fill
                                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <span
                                        className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium text-center">
                                        {tech.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
