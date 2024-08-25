import Image from "next/image";

const techs = [
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NEXT.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Nodejs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "Prisma",
    icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png",
  },
  {
    title: "MUI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    title: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    title: "GitLab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-6 lg:py-11">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
        Tech & Tools
      </h1>

      <div className="grid gap-8 md:gap-11 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-24 xl:grid-cols-3 2xl:grid-cols-4">
        {techs.map((skill, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <Image src={skill.icon} alt="Icon" width={28} height={28} />
            <h2 className="font-space-grotesk text-2xl lg:text-3xl xl:text-4xl tracking-[-1.5px] font-semibold">
              {skill.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
