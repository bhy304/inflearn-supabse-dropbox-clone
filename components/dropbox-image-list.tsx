'use client'

import DropboxImage from './dropbox-image'

export default function DropboxImageList() {
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
    </section>
  )
}
