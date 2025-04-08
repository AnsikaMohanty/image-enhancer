import React from 'react'

const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0]
    if (file) {
        props.uploadImageHandler(file);
    }
  };
  return (
    <div className='bg-blue-950 shadow-lg p-4 w-full flex items-center justify-center max-w-6xl text-amber-50'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition duration-200'>
            <input type="file" id="fileInput" className='hidden' onChange={showImageHandler}/>
            <p className='text-base font-medium text-gray-600'>
                Click to upload your image
            </p>

        </label>
    </div>
  )
}

export default ImageUpload