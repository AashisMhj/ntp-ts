import { Inter } from 'next/font/google'
//
import '../assets/css/globals.css'
import { NavBar } from '../components/common'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Template',
  description: 'Nextjs Template with tailwind, prisma',
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
