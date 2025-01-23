// components/Services.tsx
"use client"

import {motion} from "framer-motion";
import {Code, Dock, Layout, Rocket} from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        description: "Building responsive, performant user interfaces with React and Next.js. Focus on clean code and pixel-perfect implementation.",
        icon: Layout,
        color: "slate"
    },
    {
        title: "Full-stack Development",
        description: "End-to-end web applications using Next.js, combining frontend expertise with backend integration and database management.",
        icon: Code,
        color: "teal"
    },
    {
        title: "UI Implementation",
        description: "Transforming designs into interactive, accessible interfaces with attention to detail and smooth animations.",
        icon: Dock,
        color: "cyan"
    },
    {
        title: "Performance Optimization",
        description: "Optimizing web applications for speed, SEO, and user experience using modern best practices and tools.",
        icon: Rocket,
        color: "slate"
    }
];

export default function Services() {
    return (
        <section className="py-6 md:py-11 lg:py-20">
            <motion.h2
                id="services"
                className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
            >
                Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.2}}
                        className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800
                           bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm
                           hover:border-slate-500/50 dark:hover:border-slate-500/50
                           transition-all duration-300"
                    >
                        <service.icon
                            className={`w-12 h-12 mb-4 text-${service.color}-500 transition-transform duration-300
                               group-hover:scale-110`}
                            strokeWidth={1.5}
                        />
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}