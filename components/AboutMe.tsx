"use client"

import {motion} from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id="about-me"
            className="w-full py-6 lg:py-11"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>

            <motion.div
                className="w-full space-y-8 text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>
                    Hi 👋! I&apos;m Elhoussaine, a <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >Frontend Developer</motion.span> with
                    a proven track record of delivering high-quality web applications.
                    My expertise lies in transforming complex design requirements
                    into polished, responsive interfaces using React.js and Next.js.
                </p>

                <p>
                    In my professional journey, I&apos;ve mastered the art of creating intuitive user experiences through
                    modern technologies like Redux Toolkit, RTK Query, and Tailwind CSS. While frontend development
                    is my core strength, I also build <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >full-stack applications</motion.span> using
                    Next.js, leveraging its powerful features for end-to-end solutions.
                </p>

                <p>
                    What sets me apart is my dedication to pixel-perfect implementation and user-centric design.
                    Whether it&apos;s crafting new features or optimizing existing ones, I ensure every project meets
                    the highest standards of performance, accessibility, and user satisfaction. I stay current with
                    emerging technologies and best practices, bringing innovative solutions to every challenge.
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