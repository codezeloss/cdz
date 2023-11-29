import Container from "@/components/ui/Container";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="border-t borde-t-">
      <Container>
        <nav className="flex flex-col-reverse justify-center gap-y-6 items-center md:flex-row md:justify-between w-full py-11 md:py-16 lg:py-14">
          <p className="text-left text-xs dark:text-white text-muted-foreground">
            &copy;2024 codezeloss. All rights reserved.
          </p>

          <div className="hidden lg:flex items-center gap-x-6 font-semibold">
            <Link
              className="hover:text-[#4EE1A0] hover:font-bold"
              href="#skills"
            >
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
              href="#about"
            >
              About Me
            </Link>
            <Link
              className="hover:text-[#4EE1A0] hover:font-bold"
              href="#contact-me"
            >
              Contact Me
            </Link>
          </div>

          <div className="dark:hidden items-center gap-x-4 md:gap-x-6 flex text-black">
            <Link target="_blank" href={`${process.env.LINKEDIN}`}>
              <FaLinkedin size={24} />
            </Link>
            <Link target="_blank" href={`${process.env.GITHUB}`}>
              <FaGithub size={24} />
            </Link>
            <Link target="_blank" href={`${process.env.XTWITTER}`}>
              <FaXTwitter size={24} />
            </Link>
            <ModeToggle />
          </div>

          <div className="dark:flex items-center gap-x-4 md:gap-x-6 hidden">
            <Link target="_blank" href={`${process.env.LINKEDIN}`}>
              <Image
                className="cursor-pointer"
                src="/icons/icon-linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link target="_blank" href={`${process.env.GITHUB}`}>
              <Image
                className="cursor-pointer"
                src="/icons/icon-github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />{" "}
            </Link>
            <Link target="_blank" href={`${process.env.XTWITTER}`}>
              <Image
                className="cursor-pointer"
                src="/icons/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />{" "}
            </Link>
            <ModeToggle />
          </div>
        </nav>
      </Container>
    </div>
  );
}
