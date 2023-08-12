import { Inter } from 'next/font/google'
//
import '../assets/css/globals.css'
import { NavBar } from '../components/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Template',
  description: 'Nextjs Template with Typescript, Tailwind and  Prisma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
