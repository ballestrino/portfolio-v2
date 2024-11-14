import AboutMe from '@/components/about-me'
import Presentation from '@/components/presentation'
import Projects from '@/components/projects'
import Technologies from '@/components/technologies'

export default function page() {
  return (
    <div className='w-full flex items-center justify-center pb-20'>
      <div className='xl:w-1/2 md:w-4/6 lg:w-3/5 flex items-center flex-col gap-20 justify-center px-10'>
        <Presentation />
        <AboutMe />
        <Technologies />
        <Projects />
      </div>
    </div>
  )
}
