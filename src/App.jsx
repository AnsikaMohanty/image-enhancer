import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>
          AI Image enhancer 
        </h1>
        <p className='text-lg text-gray-600 mt-2'>
        Upload your image and let AI enhnace it in seconds!
        </p>
      </div>

      <Home />

      <div className='text-sm text-gray-500 mt-6'>
        Made with ❤️ by Bismay
      </div>
       
    </div>
  )
}

export default App