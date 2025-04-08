import axios from "axios";

const API_KEY = "wxfcp38c19sxfrocv"
const BASE_URL = "https://techhk.aoscdn.com/"

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        const enhancedImageData = await PollForEnhancedImage(taskId); // Use polling instead of direct fetch
        return enhancedImageData; 
    } catch (error) {
        console.error("Error enhancing image:", error);
        throw error;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
     formData.append("image_file", file); 
 
     const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
         headers: {
             "Content-Type": "multipart/form-data",
             "X-API-KEY": API_KEY,
         },
     });
     if (!data?.data?.task_id) {  // Changed from taskId to task_id
         throw new Error("Task ID not found in response");
     }
     // console.log(data);
     return data.data.task_id;  // Changed from taskId to task_id
 };
const fetchEnhancedImage = async (taskId) => {
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    
    if (!data?.data) {
        throw new Error("Image not found in response");
    }
    
    // Add response validation
    if (typeof data.data.state === 'undefined') {
        throw new Error("Invalid response format - missing state");
    }
    
    return data.data;
};


//{status: 200, message: 'success', data: {task_id: '6a851eea-12d6-46ae-95f0-e02d3b0583c5'}}

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);
    
    // Successful completion state (adjust if your API uses different state codes)
    if (result.state === 3) {
        if (!result.url) { // Make sure the URL exists
            throw new Error("Enhanced image URL not found in response");
        }
        return result.url; // Return just the URL
    }
    
    // Processing state - keep polling
    if (result.state === 1 || result.state === 4) {
        console.log(`Processing... (Attempt ${retries + 1}, State: ${result.state})`);
        
        if (retries >= 20) {
            throw new Error("Max retries exceeded. Image enhancement failed.");
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
        return PollForEnhancedImage(taskId, retries + 1);
    }

    // Error states
    throw new Error(`Image processing failed with state: ${result.state}`);
};