import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aniwatch',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar />
    <div className="font-inter">{children}</div>
    <Footer />
  </>
    
  )
}
