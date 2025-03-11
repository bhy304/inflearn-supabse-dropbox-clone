'use client'

import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@material-tailwind/react'
import { searchFiles } from 'actions/storage-actions'
import DropboxImage from './dropbox-image'

export default function DropboxImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ['images', searchInput],
    queryFn: () => searchFiles(searchInput),
  })

  return (
    <section className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
      {searchImagesQuery.isLoading && <Spinner />}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image) => (
          <DropboxImage key={image.id} {...image} />
        ))}
    </section>
  )
}
