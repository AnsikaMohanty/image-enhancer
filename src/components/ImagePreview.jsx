import React from 'react'

const ImagePreview = (props) => {
    console.log(props)
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl'>  
      {/* Original Image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-xl w-full aspect-square'>
        <h2 className='text-base text-center font-semibold text-white bg-gray-800 py-2 px-2'>
          Original Image
        </h2>
        <div className='h-full flex items-center justify-center'>
          {props.uploaded ? (
            <img 
              src={props.uploaded} 
              alt="Uploaded preview" 
              className='w-full h-full object-contain'
            />
          ) : (
            <div className='text-black'>No Image Selected</div>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-xl w-full aspect-square'>
        <h2 className='text-base text-center font-semibold text-white bg-blue-800 py-2 px-2'>
          Enhanced Image
        </h2>
        <div className='h-full flex items-center justify-center'>
          {props.enhanced ? (
            <img 
              src={props.enhanced} 
              alt="Enhanced preview" 
              className='w-full h-full object-contain'
            />
          ) : (
            <div className='text-black'>
              {props.loading ? 'Processing...' : 'No Enhanced Image'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImagePreview