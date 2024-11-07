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
                Frontend Developer specializing in React.js and NEXT.js, with a keen eye for converting
                designs and ideas into seamless, responsive code. My expertise lies in crafting intuitive user
                interfaces that prioritize usability, enjoyment, and accessibility.
                <br/>
                <br/>
                With a robust skill set encompassing Redux Toolkit, RTK Query, Tailwind CSS, and popular UI libraries
                like shadcn UI and Material UI, I excel at both building UIs and Fullstack web applications from the ground up as well as
                contributing effectively to existing projects.
                <br/>
                <br/>
                Committed to continuous learning and staying abreast of emerging technologies, I bring a blend of creativity and technical acumen to every project,
                ensuring optimal user experiences and efficient, scalable solutions.
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
