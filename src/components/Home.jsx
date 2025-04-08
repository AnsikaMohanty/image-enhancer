import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [enhancedImage, setEnhancedImage] = useState(null)

    const uploadImageHandler = (file) => {
        setUploadImage(URL.createObjectURL(file))
        setLoading(true);
        //calling API to enhance the image
    };

    return (
        <div className=''>
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
        </div>
    )
}

export default Home