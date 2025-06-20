import { useState, useEffect } from "react";

export default function useGetFiles() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true)

  const getFiles = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${apiUrl}files`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setFiles(data);
        setLoading(false)
      } catch(err) {
        console.log(err);
      };
  }
  
  useEffect(() => {
    getFiles();
  }, [])

  return {files, loading}
}