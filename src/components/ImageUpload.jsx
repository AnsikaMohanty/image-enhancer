import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-whie shadow-lg p-4 w-full max-w-2xl'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition duration-200'>
            <input type="file" id="fileInput" className='hidden'/>
            <p className='text-base font-medium text-gray-600'>
                Click and drag to upload your image
            </p>

        </label>
    </div>
  )
}

export default ImageUpload