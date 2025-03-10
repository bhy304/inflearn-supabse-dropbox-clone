'use client'

export default function FileDragDropZone() {
  return (
    <section className='w-full py-20 border-4 border-dotted border-blue-600 flex flex-col items-center justify-center rounded-lg'>
      <input type='file' className='' />
      <p>Click to upload or drag and drop</p>
    </section>
  )
}
