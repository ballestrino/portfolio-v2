import { projects } from '@/data'
import Project from './project'

export default function Projects() {
  return (
    <div className='flex flex-col gap-12'>
      <h2 className='text-first text-center text-4xl sm:text-5xl md:text-6xl font-semibold'>
        Projects
      </h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  )
}
