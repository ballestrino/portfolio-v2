import { Project as ProjectType } from '@/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Link from 'next/link'

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className='flex flex-col gap-2 w-full border border-cyan-300 bg-blue-50 rounded-lg p-5 shadow-md'>
      <div className='rounded-xl w-full h-[300px] md:h-[400px] flex items-center justify-center  '>
        <Carousel className='w-full'>
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem key={index}>
                <div className='w-full flex justify-center h-[200px] md:h-[300px] lg:h-[400px]'>
                  <img src={img} alt='' className='object-cover rounded-lg' />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-3' />
          <CarouselNext className='absolute right-3' />
        </Carousel>
      </div>

      <Link href={project.href} target='_blank'>
        <h3 className='text-3xl text-first font-semibold hover:text-first/60 hover:underline transition-colors duration-100'>
          {project.title}
        </h3>
      </Link>
      <p className='text-lg'>{project.description}</p>
    </div>
  )
}
