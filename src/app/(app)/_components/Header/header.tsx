import React from 'react'
import Image from 'next/image'
import logo from 'public/mediapart_logo.png'
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const Header: React.FC = () => (
  <header className="container mx-auto flex flex-row items-center justify-between py-4">
    <Image src={logo} width={200} height={100} alt="Mediapart Logo" />

    <nav className="flex flex-row gap-4 uppercase">
      <Link href="/">Nowości</Link>
      <Link href="/news">Promocje</Link>
      <Link href="/cms">Outlet</Link>
      <Link href="/cms/subpage">Kontakt</Link>
    </nav>

    <div className="flex flex-row gap-6">
      <MagnifyingGlassIcon className="size-5" />
      <UserIcon className="size-5" />
      <HeartIcon className="size-5" />
      <ShoppingBagIcon className="size-5" />
    </div>
  </header>
)

export default Header
