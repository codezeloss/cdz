"use client"

import {motion} from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id="about-me"
            className="w-full py-6 md:py-11 lg:py-20"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
        >
            <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
            >
                About Me
            </motion.h1>

            <motion.div
                className="w-full space-y-8 text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-300"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <p>
                    Hello! 👋 I&apos;m Elhoussaine, a <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{scale: 1.05}} transition={{duration: 0.2}}>Full-Stack Web Developer</motion.span> with
                    a strong focus on building production-ready digital solutions using the <strong>Next.js
                    ecosystem</strong>.
                </p>

                <p>
                    I specialize in <strong>frontend development</strong> with React.js and Tailwind CSS, and I also handle
                    full-stack application development — from building intuitive interfaces to designing performant
                    backend APIs. My strength lies in turning ideas into fast, responsive, and reliable web apps.
                </p>

                <p>
                    I’ve worked with startups and tech teams to deliver scalable solutions, including internal tools and
                    early-stage SaaS platforms. I take pride in writing clean code, building accessible UI, and focusing
                    on performance, UX, and real-world business impact.
                </p>

                <p>
                    I regularly use modern tools like <strong>Prisma ORM, PostgreSQL, React Query, Redux Toolkit, and AI-powered
                    APIs</strong> to accelerate development and deliver value quickly. I also enjoy leveraging AI tools
                    during the development process to ship faster and smarter.
                </p>

                <p>
                    Whether it&apos;s a sleek marketing site, a custom dashboard, or a full-stack SaaS MVP — I love building
                    products that users enjoy and businesses rely on.
                </p>

                <p>
                    Always learning, always building — I&apos;m currently deepening my experience in <strong>AI integration
                    and scalable architecture</strong> to stay ahead in the fast-evolving tech world.
                </p>

            </motion.div>
        </motion.section>
    );
};

export default AboutMe;

{/*
<div className="hidden w-full lg:max-w-[50%]">
                    <div className="w-fit h-fit">
                        <Image
                            className="w-[600px] h-[400px] object-cover"
                            src="/images/aboutMe-picture.jpg"
                            alt="Codezeloss"
                            width={620}
                            height={400}
                        />
                    </div>
                </div>
*/
}