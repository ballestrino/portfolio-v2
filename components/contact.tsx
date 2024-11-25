'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const schema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres'
    })
    .max(20),
  email: z.string().email({ message: 'El email no es correcto' }),
  message: z.string().min(20, {
    message: 'El mensaje debe tener al menos 20 caracteres'
  })
})

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: zodResolver(schema) })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [sended, setSended] = useState(false)

  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (Cookies.get('sended')) {
      setSended(true)
    }
  }, [])

  const onSubmit = handleSubmit(async data => {
    if (sended) return

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    await emailjs
      .send(
        'service_vp8uhcu',
        'template_154ojle',
        templateParams,
        'wwsVvxzAcPcjExc-b'
      )
      .then(res => {
        if (res.status === 200) {
          setError(false)
          setSuccess(true)
          reset()
          Cookies.set('sended', 'sended', { expires: 15 / (24 * 60) })
          setTimeout(() => {
            setSended(true)
            setSuccess(false)
          }, 3000)
        } else {
          setSuccess(false)
          setError(true)
        }
      })
  })

  return (
    <form
      className='flex w-full flex-col items-center justify-center px-6 bg-gradient-to-br from-cyan-200 to-blue-900 rounded-lg shadow-xl p-5'
      id='contacto'
      onSubmit={onSubmit}
      ref={form}
    >
      <div className='flex w-full flex-col items-center justify-center gap-12'>
        <h3 className='text-white text-4xl sm:text-5xl md:text-6xl font-semibold'>
          Contact
        </h3>
        <div className='grid w-full grid-cols-1 gap-10 text-black'>
          <div className='relative flex w-full flex-col justify-center gap-2'>
            <Input
              type='text'
              className='input bg-white'
              placeholder='Name'
              {...register('name')}
              disabled={sended}
            />
            {errors.name ? (
              <p className='-bottom-6 pl-1 text-sm text-red-400'>
                {errors.name.message as string}
              </p>
            ) : null}
          </div>

          <div className='flex w-full flex-col justify-center'>
            <Input
              type='email'
              className='input bg-white'
              placeholder='Email'
              {...register('email')}
              disabled={sended}
            />
            {errors.email ? (
              <p className='-bottom-6 pl-1 text-sm text-red-400'>
                {errors.email.message as string}
              </p>
            ) : null}
          </div>
          <div className='flex w-full flex-col justify-center'>
            <Textarea
              className='input min-h-36 bg-white'
              placeholder='Message'
              {...register('message')}
              disabled={sended}
            />
            {errors.message ? (
              <p className='-bottom-6 pl-1 text-sm text-red-400'>
                {errors.message.message as string}
              </p>
            ) : null}
          </div>
        </div>

        <Button disabled={sended}>Send</Button>
        <span
          className={`${error && 'flex bg-red-400'} ${
            success && 'flex bg-green-500'
          } ${
            sended && 'flex bg-purple-500'
          } items-center justify-center text-balance rounded-lg px-5 py-2 text-center text-sm text-white`}
        >
          {error ? 'There was an error sending the message' : null}
          {success ? 'Message sent successfully' : null}
          {sended
            ? 'Thank you for sending your message, I will respond shortly'
            : null}
        </span>
        {sended && (
          <p className='text-balance text-center font-light text-white'>
            You will be able to send another message in 15 minutes
          </p>
        )}
      </div>
    </form>
  )
}
