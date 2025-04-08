import React from 'react'

const ImagePreview = () => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl'>  
      {/* Original Image  */}
        <div className='bg-white shadow-lg overflow-hidden rounded-xl'>
            <h2 className='text-base text-center font-semibold text-white bg-gray-800 py-2 px-2'>
                Original Image
            </h2>
            <img src="" alt="" className='w-full h-full object-cover'/>
            <div className='flex items-center justify-center h-80 text-black'>No Image Selected</div>
        </div>
        {/* Enhanced Image  */}
        <div className='bg-white shadow-lg overflow-hidden rounded-xl'>
            <h2 className='text-base text-center font-semibold text-white bg-blue-800 py-2 px-2'>
                Enhanced Image
            </h2>
            <img src="" alt="" className='w-full h-full object-cover'/>
            <div className='flex items-center justify-center h-80 text-black'>No Enhanced Image</div>
        </div>
    </div>
  )
}

export default ImagePreview