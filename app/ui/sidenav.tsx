'use client'

import Link from 'next/link'
import Image from 'next/image'
import NavLinks from '@/app/ui/nav-links'
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'
import Search from '@/app/ui/search'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-fit w-auto items-center justify-center rounded-md bg-black p-2 md:h-fit"
        href="/"
      >
        <Image
          src={'/snoopy-logo.png'}
          alt="snoopy logo image"
          width={400}
          height={400}
          priority
        />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Search placeholder="Search people" />
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-logo-bg-light md:block"></div>
        <form
          action={() => {
            signOut()
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-logo-bg-light p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowRightStartOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
