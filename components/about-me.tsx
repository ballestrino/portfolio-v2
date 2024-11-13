import React from 'react'

export default function AboutMe() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 md:w-full'>
      <h2 className='text-first text-6xl font-semibold'>
        About <span className='text-Me'>Me</span>
      </h2>
      <p className='md:text-lg'>
        I'm a passionate 18-year-old developer from Montevideo, Uruguay. Since I
        was 8, I've dreamed of becoming a video game programmer, drawn to the
        idea of bringing digital worlds to life. Now, I focus on technology and
        creating clean, beautiful, and intuitive interfaces that make a lasting
        impact. My strengths lie in my discipline, productivity, and a
        relentless drive to seek out new challenges. Whether it's a complex
        project or a new skill, I dive in headfirst, aiming to deliver efficient
        and thoughtful solutions every time.
      </p>
    </div>
  )
}
