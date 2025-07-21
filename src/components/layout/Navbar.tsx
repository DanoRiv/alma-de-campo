'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href={'/'} className='text-lg font-semibold'>
          <Image
            src='/logo-negro-sf.png'
            alt='Alma de Campo Logo'
            width={100}
            height={100}
            className='h-10 w-auto'
          />
        </Link>
      </nav>
    </header>
  )
}
