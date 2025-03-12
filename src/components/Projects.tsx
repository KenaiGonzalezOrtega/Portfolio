import type { TFunction } from "i18next";
import projects from "../data/projects"
import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }: { t: TFunction }) {
  let visibleItems: number;
  const width = window.innerWidth
  if (width >= 1024) {
    visibleItems = 3
  } else if (width >= 768) {
    visibleItems = 2
  } else {
    visibleItems = 1
  }
  //const visibleItems = window.innerWidth >= 1024 ? 3 : 2
  return (
    <section id="projects" className="py-16 w-full bg-white px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">{t('projects.title')}</h2>
      </div>
      <Carousel visibleItems={visibleItems} totalItems={projects.length}>
        {projects.map(project => <ProjectCard t={t} project={project} key={project.id} />)}
      </Carousel>
    </section>
  )
}