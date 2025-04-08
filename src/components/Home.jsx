import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { enhancedImageAPI } from '../utils/enhancedImageApi'


const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [enhancedImage, setEnhancedImage] = useState(null)

    const uploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        try {
            const enhancedData = await enhancedImageAPI(file);
            setEnhancedImage(enhancedData); // Or enhancedData.url/image if nested
            setLoading(false);
        } catch (error) {
            console.log(error);
            alert('Error enhancing image. Please try again.');
            setLoading(false);
        }
    };
    console.log(enhancedImage)

    return (
        <div className=''>
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
        </div>
    )
}

export default Home