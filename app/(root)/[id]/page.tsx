import {redirect} from "next/navigation";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { productionLiveProjectsData} from "@/components/projects/data";
import Container from "@/components/ui/Container";

export async function generateMetadata({params}: { params: { id: string } }) {
    const project = productionLiveProjectsData.find(p => p.id === params.id);

    return {
        title: project ? `${project.title} | Project` : 'Project Not Found',
        description: project?.description
    };
}

export default function ProjectPage({params}: { params: { id: string } }) {
    const project = productionLiveProjectsData.find(p => p.id === params.id);

    if (!project) {
        redirect('/projects');
    }

    return <Container>
        <ProjectDetails project={project}/>
    </Container>;
}