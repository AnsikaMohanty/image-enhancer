import React from 'react'

const ImagePreview = (props) => {
  const handleDownload = () => {
    if (props.enhanced) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = props.enhanced;
      
      // Set the file name for the download
      const fileName = 'enhanced-image.jpg';
      link.download = fileName;
      
      // Append to the document, trigger the download, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl'>  
      {/* Original Image */}
      <div className='bg-white shadow-lg overflow-hidden w-full aspect-square'>
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
      <div className='bg-white shadow-lg overflow-hidden w-full aspect-square'>
        <h2 className='text-base text-center font-semibold text-amber-400 bg-blue-800 py-2 px-2'>
          Enhanced Image
        </h2>
        <div className='h-full flex flex-col items-center justify-center'>
          {props.enhanced ? (
            <>
              <img 
                src={props.enhanced} 
                alt="Enhanced preview" 
                className='w-full h-full object-contain'
              />
              <button
                onClick={handleDownload}
                className='absolute bottom-4 text-black right-4 bg-amber-200 hover:bg-green-700 font-bold py-2 px-4 shadow-lg transition duration-200 ease-in-out'
              >
                Download
              </button>
            </>
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