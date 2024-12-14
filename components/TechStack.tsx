import Image from "next/image";

export default function TechStack() {
    const techs = [
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
                Tech Stack
            </h1>

            <div className="flex items-center flex-wrap space-x-1 md:-space-x-2.5 md:-space-y-2">
                {techs.map((skill, index) => (
                    <div key={index} className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]">
                        <Image className="absolute w-full h-full text-xs hover:transition hover:scale-105" src={skill.icon} alt={skill.title}
                               fill/>
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