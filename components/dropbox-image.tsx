'use client'

import { IconButton } from '@material-tailwind/react'

export default function DropboxImage() {
  return (
    <div className='relative w-full flex flex-col gabp-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      {/* Image */}
      <div>
        <img
          src='/images/cutedog.jpeg'
          alt='cutedog'
          className='w-full aspect-square rounded-sm'
        />
      </div>
      {/* FileName */}
      <div>cutedog.jpeg</div>
      {/* Delete Image Button */}
      <IconButton
        variant='text'
        className='absolute top-4 right-4 rounded-sm hover:bg-[#1DA1F2] focus:bg-[#1DA1F2] active:bg-[#1DA1F2]'>
        <i className='fas fa-trash text-md text-white' />
      </IconButton>
    </div>
  )
}
