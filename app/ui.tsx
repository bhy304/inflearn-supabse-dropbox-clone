'use client'

import { useState } from 'react'

import Header from 'components/header'
import SearchInput from 'components/search-input'
import FileDragDropZone from 'components/file-drag-drop-zone'
import DropboxImageList from 'components/dropbox-image-list'

export default function UI() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <main className='w-full p-4 flex flex-col gap-4'>
      <Header />
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <FileDragDropZone />
      <DropboxImageList searchInput={searchInput} />
    </main>
  )
}
