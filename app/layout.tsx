import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { montserrat } from '@/fonts'

export const metadata: Metadata = {
  title: 'Ignacio Ballestrino Portfolio',
  description:
    'Portfolio of Ignacio Ballestrino, a fullstack developer from Uruguay'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(montserrat.className, ``)}>{children}</body>
    </html>
  )
}
