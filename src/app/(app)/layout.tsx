import './globals.scss'

import { Quicksand } from 'next/font/google'
import React from 'react'

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: '400',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={quickSand.className}>
      <head>{/* todo: add meta here */}</head>
      <body>
        <header>
          <h1>HEADER</h1>
        </header>

        {children}
      </body>
    </html>
  )
}

export default Layout
