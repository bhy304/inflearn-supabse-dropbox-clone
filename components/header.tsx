'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex items-center gap-1'>
      <Image
        src='/images/dropbox_icon.png'
        alt='Mini Dropbox Logo'
        width={50}
        height={30}
        className='!w-8 !h-auto'
      />
      <h1 className='text-xl font-bold text-blue-600'>Minibox</h1>
    </header>
  )
}
