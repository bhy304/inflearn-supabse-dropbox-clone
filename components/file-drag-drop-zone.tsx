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
    if (acceptedFiles.length > 0) {
      const formData = new FormData()

      acceptedFiles.forEach((file) => {
        formData.append(file.name, file)
      })

      const result = await uploadImageMutation.mutate(formData)
      console.log(result)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  })

  return (
    <div
      {...getRootProps()}
      className='w-full py-20 border-4 border-dotted border-blue-600 flex flex-col items-center justify-center rounded-lg cursor-pointer'>
      <input {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p className="text-gray-500">Drop the files here.</p>
      ) : (
        <p className="text-gray-500">Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}
