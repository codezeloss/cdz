import Container from "@/components/ui/Container";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex flex-col justify-center gap-y-4 md:gap-y-0 items-center md:flex-row md:justify-between w-full py-11">
        <div className="flex items-center gap-x-2.5">
          <Image
            src="/cdz-icon.png"
            alt="codezeloss icon"
            width={40}
            height={40}
          />
          <p className="font-extrabold text-3xl">codezeloss</p>
        </div>

        <div className="hidden lg:flex items-center gap-x-6 font-semibold">
          <Link className="hover:text-[#4EE1A0] hover:font-bold" href="#skills">
            Tech & Tools
          </Link>
          <Link
            className="hover:text-[#4EE1A0] hover:font-bold"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-[#4EE1A0] hover:font-bold"
            href="#about-me"
          >
            About Me
          </Link>
          <Link
            className="hover:text-[#4EE1A0] hover:font-bold"
            href="#contact"
          >
            Contact Me
          </Link>
        </div>

        <div className="dark:flex items-center gap-x-4 md:gap-x-6 hidden">
          <Link
            title="LinkedIn"
            target="_blank"
            href={`${process.env.LINKEDIN}`}
          >
            <Image
              title="LinkedIn"
              className="cursor-pointer"
              src="/icons/icon-linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Link>
          <Link title="GitHub" target="_blank" href={`${process.env.GITHUB}`}>
            <Image
              title="GitHub"
              className="cursor-pointer"
              src="/icons/icon-github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />{" "}
          </Link>
          <Link
            title="Twitter"
            target="_blank"
            href={`${process.env.XTWITTER}`}
          >
            <Image
              title="Twitter"
              className="cursor-pointer"
              src="/icons/icon-twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />{" "}
          </Link>
          <ModeToggle />
        </div>

        <div className="dark:hidden items-center gap-x-4 md:gap-x-6 flex text-black">
          <Link
            title="LinkedIn"
            target="_blank"
            href={`${process.env.LINKEDIN}`}
          >
            <FaLinkedin size={24} />
          </Link>
          <Link title="GitHub" target="_blank" href={`${process.env.GITHUB}`}>
            <FaGithub size={24} />
          </Link>
          <Link
            title="Twitter"
            target="_blank"
            href={`${process.env.XTWITTER}`}
          >
            <FaXTwitter size={24} />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </Container>
  );
}
