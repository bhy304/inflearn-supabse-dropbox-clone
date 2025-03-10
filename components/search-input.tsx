'use client'

import { Input } from '@material-tailwind/react'

export default function SearchInput({ searchInput, setSearchInput }) {
  return (
    <Input
      label='Search Images'
      color='blue'
      icon={<i className='fa-solid fa-magnifying-glass' />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  )
}
