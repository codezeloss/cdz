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
                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-16"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
            >
                Crafting Products, Not Just Writing Code
            </motion.h1>

            <motion.div
                className="w-full space-y-8 text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-300"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <p>
                    Salam alaykoum 👋!! This is Elhoussaine ( the developer you're looking for (; )! I&apos;m a <motion.span
                    className="inline-block bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-1 font-semibold text-neutral-900 dark:text-white"
                    whileHover={{scale: 1.05}} transition={{duration: 0.2}}>Full-Stack Web Developer & Product
                    Builder</motion.span> focused on shipping production-ready digital solutions using the <strong>NEXT.js
                    ecosystem</strong>.
                </p>

                <p>
                    I specialize in <strong>Frontend development</strong> (React.js/Next.js + Tailwind CSS), and can
                    take full responsibility as a Full-stack for bringing a product idea to life — from intuitive
                    interfaces to performant backend APIs and deployment. I love turning problems into fast, reliable
                    and elegant web apps.
                </p>

                <p>
                    I&apos;ve been building my own digital products — such as <strong>tadbeery.com</strong>, a Moroccan SaaS
                    platform helping businesses digitalize inventory, sales, payments and day-to-day management — driven
                    by a vision of empowering real-world businesses through technology.
                </p>

                <p>
                    My current toolkit includes <strong>Prisma ORM, MongoDB/PostgreSQL, React Query, Redux Toolkit,
                    Next-Auth, AWS</strong> and more. I constantly push myself to <strong>leverage AI tools and
                    automation</strong> to build smarter and deliver real business impact.
                </p>

                <p>
                    Whether it&apos;s a sleek landing page, an internal dashboard, or a full-stack SaaS application — my goal
                    is always the same: build something users enjoy and businesses can depend on.
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