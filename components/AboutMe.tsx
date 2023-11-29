import Image from "next/image";
const AboutMe = () => {
  return (
    <section id="about-me" className="py-6 lg:py-11">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center lg:gap-12">
        <div className="w-full lg:max-w-[50%]">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
            About Me
          </h1>

          <p className="text-lg font-medium mb-6 lg:mb-16">
            I convert designs & ideas to code. React/Nextjs are the technologies
            I love to work with. I code responsive websites/apps from scratch
            and contribute to existing projects.
            <br />
            <br /> Usable, enjoyable, and accessible User Interfaces are the
            motivation and the goals I work towards achieving on every project.
          </p>
        </div>

        <div className="w-full lg:max-w-[50%]">
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
