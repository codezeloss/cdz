import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="space-y-6 lg:space-y-11">
          <Hero />
          <TechStack />
          <Projects />
          <AboutMe />
          <Contact />
        </div>
      </Container>
    </main>
  );
}
