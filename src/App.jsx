import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-200 mb-2'>
          AI Image Enhancer 
        </h1>
        <p className='text-lg text-amber-300 mt-2'>
        Upload your image and let AI enhnace it in seconds!
        </p>
      </div>

      <Home />

      <div className='text-sm text-cyan-200 mt-12'>
      © 2025 GraphiQue, Inc. All rights reserved.
      </div>
       
    </div>
  )
}

export default App