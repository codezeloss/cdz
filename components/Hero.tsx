import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-2 sm:py-4 md:py-6 lg:py-24 xl:py-32">
      <div className="">
        <div className="mb-7 lg:mb-14">
          <h1 className="font-bold text-3xl lg:text-6xl">
            Hi 👋! I&apos;m Elhoussaine
          </h1>
          <h2 className="font-bold text-xl lg:text-3xl mb-4">
            Frontend developer ✨
          </h2>
          <h1 className="font-bold text-4xl lg:text-7xl text-[#2bc47f] dark:text-[#4EE1A0]">
            Working w/ Modern Web Technologies
          </h1>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl">
            New idea? New business?
          </h2>
          <h2 className="font-bold text-xl lg:text-3xl mb-4">
            Let&apos;s connect!!
          </h2>
          <Link href="#contact">
            <Button className="" variant="default">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>

      <Image
        className="rounded-full text-sm border-4 border-black dark:border-white mb-14 lg:mb-0 w-[300px] h-[300px] md:w-[445px] md:h-[445px]"
        src="/images/main-picture.jpg"
        alt="Developer profile"
        width={445}
        height={445}
      />
    </section>
  );
}
