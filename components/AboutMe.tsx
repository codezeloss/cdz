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
                    Hi! 👋 I&apos;m Elhoussaine, a <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >Frontend Developer</motion.span> who loves building websites and web applications. I specialize in React.js and Next.js,
                    turning designs into smooth, responsive websites that people enjoy using.
                </p>

                <p>
                    What I do best is create beautiful user interfaces. I&apos;m really good at taking a design and bringing it to life
                    exactly as envisioned, making sure it works perfectly on all devices. While I&apos;m mainly focused on frontend development,
                    I also enjoy building <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >Full-Stack applications</motion.span> using Next.js when projects need both frontend and backend work.
                </p>

                <p>
                    I&apos;ve worked with various companies and startups, helping them create great web experiences. I use modern tools
                    like Redux Toolkit and Tailwind CSS to build efficient, user-friendly applications. What makes me different is my
                    attention to detail and focus on quality – I believe that small details make a big difference in how people experience
                    a website.
                </p>

                <p>
                    I&apos;m passionate about learning and staying up-to-date with new technologies, always looking for better ways to solve
                    problems and create amazing web experiences.
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