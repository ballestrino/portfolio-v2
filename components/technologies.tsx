import Image from 'next/image'

export default function Technologies() {
  const frontEnd = ['/react.svg', '/tailwind.svg', '/nextjs.svg']
  const backEnd = ['/node.svg', '/typescript.svg', '/postgresql.svg']
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-white text-4xl sm:text-5xl md:text-6xl font-semibold'>
          Technologies
        </h2>
        <p className='text-3xl font-semibold text-center'>Front-End</p>
      </div>
      <div className='grid md:grid-cols-3 gap-10'>
        {frontEnd.map((item, index) => (
          <div
            key={index}
            className='group bg-gray-100 p-10 rounded-full shadow-md items-center flex'
          >
            <Image
              src={item}
              alt=''
              width={100}
              height={100}
              className='group-hover:scale-105 transition-transform duration-200'
            />
          </div>
        ))}
      </div>
      <p className='text-3xl text-center font-semibold'>Back-End</p>
      <div className='grid md:grid-cols-3 gap-10'>
        {backEnd.map((item, index) => (
          <div
            key={index}
            className='group bg-gray-100 p-10 rounded-full shadow-md items-center flex'
          >
            <Image
              src={item}
              alt=''
              width={100}
              height={100}
              className='group-hover:scale-105 transition-transform duration-200'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
