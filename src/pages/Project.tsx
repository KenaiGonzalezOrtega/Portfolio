import type { TFunction } from 'i18next';
import { useLocation } from 'wouter';
import projects from '../data/projects';
import GitHubIcon from '../icons/GitHubIcon';
import LinkIcon from '../icons/LinkIcon';
import generateId from '../services/generateID';

export default function Project({ projectId, t }: { projectId: string, t: TFunction }) {
  const project = projects.find(item => item.id === projectId);
  const [, setLocation] = useLocation()
  if (project === undefined) {
    setLocation("/")
    return null
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-background-secondary dark:bg-dark-background-secondary text-text-secondary dark:text-dark-text-secondary pt-10 md:pt-0">

      <header className="flex flex-col gap-10 py-10 md:py-20 text-justify md:text-center">
        <h1 className=" text-4xl font-bold dark:text-dark-title-secondary text-title-secondary">
          {project.name}
        </h1>
        <div className='flex justify-around'>

          <a href={project.githubUrl} className='w-12' target='_blank' rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href={project.appUrl} className='w-12' target='_blank' rel="noopener noreferrer">
            <LinkIcon />
          </a>
        </div>
      </header>

      <section className='grid lg:grid-cols-2 items-center gap-10 p-10 md:p-20  bg-background-primary dark:bg-dark-background-primary text-text-primary dark:text-dark-text-primary'>
        <p className=' md:text-center md:text-xl text-primary-text mb-6'>
          {t(`projects.${project.name}.description`)}
        </p>
        <img className='border rounded-2xl' src={project.coverImgUrl} alt="Img 1" />
      </section>

      <section className='flex flex-col justify-center items-center gap-10 p-10 md:p-20  bg-background-secondary dark:bg-dark-background-secondary  text-text-secondary dark:text-dark-text-secondary'>
        <h2 className="text-2xl font-semibold text-title-secondary dark:text-dark-title-secondary">
          {t("projects.technologies")}
        </h2>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <p className='text-justify md:text-center md:text-xl text-primary-text mb-6 md:w-3/4' dangerouslySetInnerHTML={{
          __html: t(`projects.${project.name}.technologies`)
        }} />
        <div className='grid columns-auto grid-cols-2 md:grid-cols-[repeat(5,100px)]  gap-10 w-full justify-around'>
          {project.icons.map(item => ({ ...item, key: generateId() }))}
        </div>

      </section>
      <section className='gap-10 p-10 md:p-20 bg-background-secondary dark:bg-dark-background-secondary'>
        <video muted controls preload='metadata' className='max-h-[90vh]'>
          <source src={project.demoUrl} type="video/webm" />
        </video>
      </section>
    </div>
  )
}