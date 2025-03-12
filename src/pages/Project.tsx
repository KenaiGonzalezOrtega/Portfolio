import { useLocation } from 'wouter';
import projects from '../data/projects';

export default function Project({ projectId }: { projectId: string }) {
  const project = projects.find(item => item.id === projectId);
  const [, setLocation] = useLocation()
  if (project === undefined) {
    setLocation("/")
    return null
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">

      <header className="py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">
          {project.name}
        </h1>
      </header>

    </div>
  )
}