import Image from 'next/image'

export default function Presentation() {
  return (
    <div className='flex md:flex-row h-screen flex-col-reverse w-full gap-20 justify-center md:justify-between items-center select-none'>
      <div className='flex flex-col'>
        <h1 className='text-7xl sm:text-8xl font-bold text-first hover:text-first/90 transition-colors duration-200 '>
          Hi i&apos;m <br /> Nacho
        </h1>
        <p className='pl-1 text-xl sm:text-2xl font-semibold'>
          Front End Developer
        </p>
      </div>
      <div>
        <Image src={'/I.png'} alt='' width={250} height={250} />
      </div>
    </div>
  )
}
