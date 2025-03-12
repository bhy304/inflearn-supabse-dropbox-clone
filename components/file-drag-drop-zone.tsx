'use client'

import { useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Spinner } from '@material-tailwind/react'
import { useDropzone } from 'react-dropzone'
import { uploadFile } from 'actions/storage-actions'
import { queryClient } from 'config/ReactQueryClientProvider'

export default function FileDragDropZone() {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['images'],
      })
    },
  })

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0]

    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      await uploadImageMutation.mutate(formData)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      {...getRootProps()}
      className='w-full py-20 border-4 border-dotted border-blue-600 flex flex-col items-center justify-center rounded-lg cursor-pointer'>
      <input {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}
