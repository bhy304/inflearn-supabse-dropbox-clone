'use client'

import { IconButton } from '@material-tailwind/react'
import { getImageURL } from 'utils/supabase/storage'

export default function DropboxImage(props) {
  const { name } = props

  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      {/* Image */}
      <div>
        <img
          src={getImageURL(name)}
          alt='cutedog'
          className='w-full aspect-square rounded-sm'
        />
      </div>
      {/* FileName */}
      <p className='text-sm break-words'>{name}</p>
      {/* Delete Image Button */}
      <div className='absolute top-4 right-4'>
        <IconButton
          variant='text'
          className='rounded-sm hover:bg-[#1DA1F2] focus:bg-[#1DA1F2] active:bg-[#1DA1F2]'>
          <i className='fas fa-trash text-md text-white' />
        </IconButton>
      </div>
    </div>
  )
}
