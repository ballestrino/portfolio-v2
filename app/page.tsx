import AboutMe from '@/components/about-me'
import Presentation from '@/components/presentation'

export default function page() {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='xl:w-1/2 md:w-4/6 lg:w-3/5 flex items-center flex-col gap-10 justify-center px-10'>
        <Presentation />
        <AboutMe />
      </div>
    </div>
  )
}
