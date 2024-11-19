import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="w-full h-[40vh] md:[60vh] lg:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between py-6 sm:py-16 md:py-20 lg:py-28 xl:py-32">
            <div className="">
                <div className="mb-7 lg:mb-14">
                    <h1 className="font-bold text-3xl lg:text-6xl">
                        Hi 👋! I&apos;m Elhoussaine
                    </h1>
                    <h2 className="font-bold text-xl md:text-3xl md:mt-1 mb-4">
                        Frontend developer ✨
                    </h2>
                    <h1 className="font-bold text-4xl lg:text-7xl text-[#2bc47f] dark:text-[#4EE1A0]">
                        Working w/ Modern Web Technologies
                    </h1>
                </div>
                <div>
                    <h2 className="font-bold text-xl md:text-2xl">
                        Have an idea? Existing or a New project?
                    </h2>
                    <h2 className="font-bold text-xl md:text-2xl mb-4">
                        Let&apos;s connect!!
                    </h2>
                    <Link href="#contact">
                        <Button className="font-bold" variant="default">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            <Image
                className="hidden rounded-full text-sm border-4 border-black dark:border-white mb-14 lg:mb-0 w-[300px] h-[300px] md:w-[445px] md:h-[445px]"
                src="/images/main-picture.jpg"
                alt="Developer profile"
                width={445}
                height={445}
            />
        </section>
    );
}
