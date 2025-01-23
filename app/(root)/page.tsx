import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import type {Metadata} from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
    title: "codezeloss | Full-Stack Developer",
    description: "Full-Stack Developer, NEXTjs Full-Stack Developer, Reactjs Developer. Portfolio website | Full-Stack Next.js Developer specializing in Frontend development, with a keen eye for converting designs and ideas into seamless, responsive code. My expertise lies in crafting intuitive user interfaces that prioritize usability, enjoyment, and accessibility.",
};

export default function Home() {
    return (
        <main>
            <Container>
                <div className="space-y-6 lg:space-y-11">
                    <Hero/>
                    <AboutMe/>
                    <Services/>
                    <TechStack/>
                    <Projects/>
                    <Contact/>
                </div>
            </Container>
        </main>
    );
}
