import Image from "next/image";

export default function TechStack() {
    const techs = [
        {
            title: "JavaScript",
            icon: "/icons/JavaScript.svg"
        },
        {
            title: "TypeScript",
            icon: "/icons/TypeScript.svg"
        },
        {
            title: "React.js",
            icon: "/icons/reactjs.svg"
        },
        {
            title: "NEXT.js",
            icon: "/icons/nextjs.svg"
        },
        {
            title: "Tailwind",
            icon: "/icons/tailwindcss.svg"
        },
        {
            title: "Redux Toolkit",
            icon: "/icons/Redux.svg"
        },
        {
            title: "Prisma",
            icon: "/icons/Prisma.svg"
        },
        {
            title: "Shadcn UI",
            icon: "/icons/shadcnui.svg"
        },
        {
            title: "React Query",
            icon: "/icons/react-query.svg"
        },
        {
            title: "Bun.js",
            icon: "/icons/bunjs.svg"
        },
        {
            title: "Claude AI",
            icon: "/icons/Claude-AI.svg"
        },
        {
            title: "ChatGPT",
            icon: "/icons/ChatGPT.svg"
        }
    ];

    return (
        <section id="skills" className="py-6 lg:py-11">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
                Tech & Tools
            </h1>

            <div className="flex items-center flex-wrap space-x-1 md:-space-x-2.5 md:-space-y-2">
                {techs.map((skill, index) => (
                    <div key={index}
                         className="group relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]">
                        <Image
                            className="absolute w-full h-full text-xs hover:transition hover:scale-105"
                            src={skill.icon}
                            alt={skill.title}
                            fill
                        />
                        {/* Simple Tooltip */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                            bg-white dark:bg-neutral-800 px-2 py-1 rounded text-xs
                            border border-neutral-200 dark:border-neutral-700
                            transition-opacity duration-200 whitespace-nowrap z-10">
                            {skill.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

{/*
<h2 className="font-space-grotesk text-2xl lg:text-3xl xl:text-4xl tracking-[-1.5px] font-semibold"></h2>
*/
}

//
// import Image from "next/image";
// import {motion} from "framer-motion";
//
// export default function TechStack() {
//     const techs = [
//         {
//             title: "TypeScript",
//             icon: "/icons/TypeScript.svg",
//             color: "bg-blue-500/10 dark:bg-blue-500/20"
//         },
//         {
//             title: "React.js",
//             icon: "/icons/reactjs.svg",
//             color: "bg-cyan-500/10 dark:bg-cyan-500/20"
//         },
//         {
//             title: "NEXT.js",
//             icon: "/icons/nextjs.svg",
//             color: "bg-neutral-500/10 dark:bg-neutral-500/20"
//         },
//         {
//             title: "Tailwind",
//             icon: "/icons/tailwindcss.svg",
//             color: "bg-sky-500/10 dark:bg-sky-500/20"
//         },
//         {
//             title: "Redux Toolkit",
//             icon: "/icons/Redux.svg",
//             color: "bg-purple-500/10 dark:bg-purple-500/20"
//         },
//         {
//             title: "Prisma",
//             icon: "/icons/Prisma.svg",
//             color: "bg-teal-500/10 dark:bg-teal-500/20"
//         },
//         {
//             title: "Shadcn UI",
//             icon: "/icons/shadcnui.svg",
//             color: "bg-neutral-500/10 dark:bg-neutral-500/20"
//         },
//         {
//             title: "React Query",
//             icon: "/icons/react-query.svg",
//             color: "bg-red-500/10 dark:bg-red-500/20"
//         },
//         {
//             title: "Claude AI",
//             icon: "/icons/Claude-AI.svg",
//             color: "bg-emerald-500/10 dark:bg-emerald-500/20"
//         },
//         {
//             title: "ChatGPT",
//             icon: "/icons/ChatGPT.svg",
//             color: "bg-green-500/10 dark:bg-green-500/20"
//         }
//     ];
//
//     const containerVariants = {
//         hidden: {opacity: 0},
//         visible: {
//             opacity: 1,
//             transition: {staggerChildren: 0.1}
//         }
//     };
//
//     const itemVariants = {
//         hidden: {opacity: 0, y: 20},
//         visible: {opacity: 1, y: 0}
//     };
//
//     return (
//         <section id="skills" className="py-6 lg:py-11">
//             <motion.h1
//                 initial={{opacity: 0, y: 20}}
//                 animate={{opacity: 1, y: 0}}
//                 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
//             >
//                 Tech & Tools
//             </motion.h1>
//
//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="flex flex-wrap gap-8 sm:gap-10 items-center"
//             >
//                 {techs.map((tech, index) => (
//                     <motion.div
//                         key={index}
//                         variants={itemVariants}
//                         whileHover={{y: -5}}
//                         className="flex flex-col items-center"
//                     >
//                         <div className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]">
//                             <Image
//                                 src={tech.icon}
//                                 alt={tech.title}
//                                 fill
//                                 className="object-contain transition-transform duration-300 group-hover:scale-110"
//                             />
//                         </div>
//                         <span className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
//                             {tech.title}
//                         </span>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </section>
//     );
// }