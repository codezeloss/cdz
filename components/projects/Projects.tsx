import ProjectItem from "@/components/projects/ProjectItem";
import { data } from "@/components/projects/data";

export default function Projects() {
  return (
    <section id="projects" className="py-6 lg:py-11">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
        My Projects
      </h1>

      <div className="grid grid-cols-1 gap-y-11 md:gap-y-16 md:grid-cols-2 gap-x-4 lg:gap-x-11">
        {data.map((project) => (
          <ProjectItem
            key={project.id}
            src={project.image}
            title={project.title}
            techs={project.techs}
            preview={project.live_url}
            code={project.code_url}
          />
        ))}
      </div>
    </section>
  );
}
