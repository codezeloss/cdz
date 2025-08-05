"use client"

import {motion} from "framer-motion";
import {Brain, Code, Layout, Paintbrush, Plug, Rocket} from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        description:
            "Building responsive and accessible user interfaces using React.js and Next.js. Focused on performance, interactivity, and pixel-perfect precision.",
        icon: Layout,
        color: "slate"
    },
    {
        title: "Full-Stack Development",
        description:
            "Creating robust web applications using Next.js — combining frontend expertise with backend logic, API routes, and database integration.",
        icon: Code,
        color: "teal"
    },
    // {
    //     title: "UI Implementation",
    //     description:
    //         "Turning designs into functional components using modern styling technologies & tools — with clean code and seamless animations.",
    //     icon: Dock,
    //     color: "cyan"
    // },
    {
        title: "API Integration",
        description:
            "Connecting and managing external APIs — from AI services to third-party platforms — to add powerful features to your application.",
        icon: Plug,
        color: "orange"
    },
    {
        title: "Performance Optimization",
        description:
            "Improving speed, SEO, and overall user experience using modern best practices, analysis tools, and server/client optimizations.",
        icon: Rocket,
        color: "slate"
    },
    {
        title: "Design to Code",
        description:
            "Transforming Figma or design mockups into production-ready components with pixel precision and clean architecture.",
        icon: Paintbrush,
        color: "pink"
    },
    {
        title: "AI Powered Features",
        description:
            "Integrating AI-driven technologies into web applications to offer personalized, intelligent experiences.",
        icon: Brain,
        color: "pink"
    }
];

export default function Services() {
    return (
        <section className="py-6 md:py-11 lg:py-20">
            <motion.h2
                id="services"
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
            >
                What I Offer
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: index * 0.15}}
                        className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800
                            bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm
                            hover:border-slate-500/50 dark:hover:border-slate-500/50
                            transition-all duration-300"
                    >
                        <service.icon
                            className={`w-12 h-12 mb-4 text-${service.color}-500 transition-transform duration-300 group-hover:scale-110`}
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
