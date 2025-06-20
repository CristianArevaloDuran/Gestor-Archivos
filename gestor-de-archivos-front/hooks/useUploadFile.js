import axios from "axios";
import { useState } from "react";

export default function useUploadFile() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [progress, setProgress] = useState(0);

    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        

        try{
            const res = await axios.post(`${apiUrl}upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percent);
                }
            })
            
            if (res.status === 200) {
                setTimeout(()=> {
                    setProgress(0);
                }, 3000);
                return res;
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    return {handleUpload, progress};
};