'use client';
import { useState, createContext, useContext, useRef, useEffect } from "react";
import useGetFiles from "@/hooks/useGetFiles";
import useUploadFile from "@/hooks/useUploadFile";

const FilesContext = createContext();
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function FilesProvider({children}) {
    const [contextFiles, setContextFiles] = useState([]);
    const timeouts = useRef({});
    const [contextLoader, setContextLoader] = useState(false)

    //Get files
    const {files, loading} = useGetFiles();

    //Upload file
    const {handleUpload, progress} = useUploadFile();

    useEffect(()=> {
        setContextFiles(files);
    }, [files])

    //Function to delete a file
    const deleteFile = async (filename) => {
        setContextLoader(true);
        try {
          const response = await fetch(`${apiUrl}delete/${filename}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            setContextFiles(prev => prev.filter(d => d.fileName !== filename));
            setContextLoader(false);
          }
        } catch(err) {
            setContextLoader(false);
            console.log(err.message);
        }
    };
    
    //Function to upload a file
    const uploadFile = async (file) => {
        const res = await handleUpload(file);
        if(res.status === 200) {
            setContextFiles(prev => [
                ...prev, 
                {
                    fileName: res.data.file.fileName,
                    originalName: res.data.file.originalName,
                    size: res.data.file.size,
                    type: res.data.file.type,
                    url: res.data.file.url,
                    _id: res.data.file._id
                }
            ]);
        }

        return res;
    };
    

    //Function for starting a new download
    /*const getFiles = async () => {
        
        setDownloads(prev => [...prev,
            {
                id: file._id,
                name: file.originalName,
                progress: 0,
                controller
            }
        ]);
    };

    //Function for updating progress
    const updateProgress = (id, progress) => {
        setDownloads(prev => 
            prev.map(d => d.id === id ? {...d, progress} : d)
        );
    };

    //Function for cancelling download
    const cancelDownload = (id) => {
        timeouts.current[id] = setTimeout(() => {
            setDownloads(prev => prev.filter(d => d.id !== id));
            delete timeouts.current[id];
        }, 2000);
    };

    //Function for deleting completed downloads
    const completeDownload = (id) => {
        timeouts.current[id] = setTimeout(() =>{
            setDownloads(prev => prev.filter(d => d.id !== id));
            delete timeouts.current[id];
        },5000);
    };
    */

    return (
        <FilesContext.Provider value={{contextFiles, loading, deleteFile, uploadFile, progress, contextLoader}}>
            {children}
        </FilesContext.Provider>
    );
}

export const useFiles = () => useContext(FilesContext);