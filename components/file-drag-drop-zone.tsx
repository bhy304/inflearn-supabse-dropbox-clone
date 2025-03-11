'use client'

import { useRef } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@material-tailwind/react'
import { uploadFile } from 'actions/storage-actions'
import { queryClient } from 'config/ReactQueryClientProvider'

export default function FileDragDropZone() {
  const fileRef = useRef(null)
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['images'],
      })
    },
  })

  return (
    <form
      className='w-full py-20 border-4 border-dotted border-blue-600 flex flex-col items-center justify-center rounded-lg'
      onSubmit={async (e) => {
        e.preventDefault()
        const file = fileRef.current.files?.[0]
        if (file) {
          const formData = new FormData()
          formData.append('file', file)
          const result = await uploadImageMutation.mutate(formData)
        }
      }}>
      <input type='file' className='' ref={fileRef} />
      <p>Click to upload or drag and drop</p>
      <Button type='submit' loading={uploadImageMutation.isPending}>
        Upload File
      </Button>
    </form>
  )
}
