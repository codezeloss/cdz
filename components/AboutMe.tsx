import Image from "next/image";

const AboutMe = () => {
    // lg:max-w-[50%]
    return (
        <section id="about-me" className="py-6 lg:py-11">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center lg:gap-12">
                <div className="w-full">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
                        About Me
                    </h1>

                    <p className="text-lg font-medium mb-6 lg:mb-16">
                        I&apos;m a <span className="w-fit bg-muted rounded px-2 font-semibold">Frontend Developer</span> with
                        a proven track record of delivering high-quality web applications.
                        My expertise lies in transforming complex design requirements
                        into polished, responsive interfaces using React.js and Next.js.
                        <br/>
                        <br/>
                        In my professional journey, I&apos;ve mastered the art of creating intuitive user experiences through
                        modern technologies like Redux Toolkit, RTK Query, and Tailwind CSS. While frontend development
                        is my core strength, I also build <span className="w-fit bg-muted rounded px-2 font-semibold">full-stack applications</span> using
                        Next.js, leveraging its powerful
                        features for end-to-end solutions.
                        <br/>
                        <br/>
                        What sets me apart is my dedication to pixel-perfect implementation and user-centric design.
                        Whether it&apos;s crafting new features or optimizing existing ones, I ensure every project meets
                        the highest standards of performance, accessibility, and user satisfaction. I stay current with
                        emerging technologies and best practices, bringing innovative solutions to every challenge.
                    </p>
                </div>

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
            </div>
        </section>
    );
};

export default AboutMe;
