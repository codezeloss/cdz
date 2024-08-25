import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  techs: string[];
  preview: string;
  code: string;
}

const btnClasses =
  "uppercase font-bold text-base pb-2.5 border-b-2 border-b-[#4EE1A0] z-20 hover:text-[#4EE1A0]";

const btnClassesSm =
  "uppercase font-bold text-base pb-2.5 border-b-2 border-b-[#4EE1A0] z-20 hover:text-[#4EE1A0]";

const ProjectItem = ({ src, title, techs, preview, code }: Props) => {
  return (
    <div className="uppercase">
      <div className="object-cover relative w-full h-[280px] sm:h-[450px] md:h-[350px] lg:h-[400px] border-2 border-muted-foreground mb-5 hover:border-2 hover:border-[#4EE1A0]">
        <Image
          className="absolute w-full h-auto z-10"
          src={src}
          alt="Project image"
          fill
          loading="lazy"
        />
        <div className="hidden w-full h-full absolute bg-[#000]/[.75] lg:flex flex-col justify-center items-center gap-y-4 z-20 opacity-0 hover:opacity-100 3bp:hidden">
          <Link href={`${preview}`} target="_blank">
            <button className={`${btnClasses} text-white`}>View Project</button>
          </Link>
          <Link href={`${code}`} target="_blank">
            <button className={`${btnClasses} text-white`}>View Code</button>
          </Link>
        </div>
      </div>

      <div>
        <div>
          <p className="font-bold text-2xl">{title}</p>
          <div className="font-semibold text-muted-foreground text-xs sm:text-sm flex gap-x-4">
            {techs.map((tech: string, index: number) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden gap-7 mt-5">
          <Link href={`${preview}`} target="_blank">
            <button className={btnClassesSm}>View Project</button>
          </Link>
          <Link href={`${code}`} target="_blank">
            <button className={btnClassesSm}>View Code</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
