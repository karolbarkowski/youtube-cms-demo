import './globals.scss'

import { Work_Sans } from 'next/font/google'
import React from 'react'
import Header from './_components/Header/header'
import Footer from './_components/Footer/footer'

const quickSand = Work_Sans({
  subsets: ['latin'],
  weight: '400',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={`${quickSand.className} bg-white-0 text-gray-300`}>
      <head>{/* todo: add meta here */}</head>

      <body className="flex h-screen flex-col">
        <Header />
        <main className="container mx-auto flex-1 p-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
