import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="w-full h-full lg:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between py-6 sm:py-16 md:py-20 lg:py-28 xl:py-32">
            <div className="">
                <div className="mb-7 lg:mb-14">
                    {/* Main greeting - slightly smaller than main headline */}
                    <h1 className="hidden font-bold text-4xl lg:text-5xl mb-3">
                        Hi 👋! I&apos;m Elhoussaine
                    </h1>

                    {/* Main headline - largest text */}
                    <h1 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
                        Transforming Designs into Exceptional Web Experiences
                    </h1>

                    {/* Professional title - smaller for better hierarchy */}
                    <h2 className="font-bold text-xl md:text-2xl md:mt-1 mb-4">
                        Frontend & Next.js Developer | React Expert | UI Specialist
                    </h2>
                </div>

                <div>
                    {/* Call to action text - balanced size */}
                    <h2 className="font-bold text-base lg:text-lg">
                        Ready to bring your vision to life?
                    </h2>
                    <h2 className="font-bold text-base lg:text-lg mb-4">
                        Let&apos;s create something amazing together!
                    </h2>

                    <Link href="#contact">
                        <Button className="font-bold text-base" variant="default">
                            Get in Touch
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
