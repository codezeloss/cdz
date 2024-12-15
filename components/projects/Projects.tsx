import ProjectItem from "@/components/projects/ProjectItem";
import {data} from "@/components/projects/data";

export default function Projects() {
    return (
        <section id="projects" className="py-6 lg:py-11">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-16">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((project) => (
                    <ProjectItem
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

