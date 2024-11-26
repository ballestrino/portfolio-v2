export interface Project {
  title: string
  href: string
  description: string
  images: string[]
}

export const projects = [
  // {
  //   title: 'E-commerce + Login + Admin Panel',
  //   description:
  //     'E-commerce website made with NextJs, shadCn, postgreSQL and Mercado Pago',
  //   images: [
  //     '/projects/ecommerce/ecommerce-0.webp',
  //     '/projects/ecommerce/ecommerce-1.webp',
  //     '/projects/ecommerce/ecommerce-2.webp',
  //     '/projects/ecommerce/ecommerce-3.webp'
  //   ],
  //   href: ''
  // },
  {
    title: 'InnovaWave',
    description:
      'Website for my personal brand made with NextJs, tailwind and ShadCn',
    images: [
      '/projects/innovawave/iw-1.webp',
      '/projects/innovawave/iw-2.webp',
      '/projects/innovawave/iw-3.webp'
    ],
    href: 'https://innovawaveuruguay.com/'
  },
  {
    title: 'Cleaning Company Website',
    description:
      'Website for a cleaning company made with Vite, React and Tailwind',
    images: [
      '/projects/trebol/trebol-1.webp',
      '/projects/trebol/trebol-2.webp',
      '/projects/trebol/trebol-3.webp'
    ],
    href: 'https://www.eltrebollimpieza.com/'
  },

  {
    title: 'Todo App + Drag and Drop',
    description:
      'Todo app with drag and drop functionality made with Vite, React, Tailwind and dndKit',
    images: [
      '/projects/todo/todo-app-1.webp',
      '/projects/todo/todo-app-2.webp'
    ],
    href: 'https://todo-app-taupe-zeta.vercel.app/'
  }
]
