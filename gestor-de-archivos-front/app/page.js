'use client';
import { useFiles } from "@/context/FilesContext";
import FileCard from "@/components/FileCard/FileCard";
import FileUpload from "@/components/FileUpload/FileUpload";
import DownloadManager from "@/components/DownloadManager/DownloadManager";

export default function Home() {
  
  const {contextFiles, loading} = useFiles();

  return (
    <main className="bg-black w-dvw h-dvh flex flex-row flex-wrap gap-5 p-10 content-start justify-center overflow-auto relative"> 
      {
        loading ? (<p className="font-display text-sky-50">Loading...</p>) : contextFiles.map(file => (
          <FileCard file={file} key={file._id} />
        ))
      }
      <FileUpload />
      <DownloadManager />
    </main>
  );
}
