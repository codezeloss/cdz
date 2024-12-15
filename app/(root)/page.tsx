import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "codezeloss | Frontend Developer",
    description: "Frontend Developer, NEXTjs Frontend Developer, Reactjs Developer. Portfolio website | Passionate Frontend Developer specializing in React.js and NEXT.js, with a keen eye for converting designs and ideas into seamless, responsive code. My expertise lies in crafting intuitive user interfaces that prioritize usability, enjoyment, and accessibility.",
};

export default function Home() {
    return (
        <main>
            <Container>
                <div className="space-y-6 lg:space-y-11">
                    <Hero/>
                    <AboutMe/>
                    <TechStack/>
                    <Projects/>
                    <Contact/>
                </div>
            </Container>
        </main>
    );
}
