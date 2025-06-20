import { useFiles } from "@/context/FilesContext"
import {useState, useRef} from "react";

const ICON_OPTS = {
  width: '100px',
  height: '100px',
  color: '#E632BE'
};

const ICONS = [
  {
    type: 'image',
    mimetype: [
      'image/png',
      'image/jpeg'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height={ICON_OPTS.height} viewBox="0 -960 960 960" width={ICON_OPTS.width} fill={ICON_OPTS.color}><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>
    )
  },
  {
    type: 'pdf',
    mimetype: [
      'application/pdf'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height={ICON_OPTS.height} viewBox="0 -960 960 960" width={ICON_OPTS.width}  fill={ICON_OPTS.color}><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
    )
  },
  {
    type: 'video',
    mimetype: [
      'video/mp4',
      'video/x-matroska'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height={ICON_OPTS.height} viewBox="0 -960 960 960" width={ICON_OPTS.width}  fill={ICON_OPTS.color}><path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z"/></svg>
    )
  },
  {
    type: 'compressed',
    mimetype: [
      'application/zip',
      'application/x-zip-compressed',
      'application/vnd.rar',
      'application/x-7z-compressed'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height={ICON_OPTS.height} viewBox="0 -960 960 960" width={ICON_OPTS.width}  fill={ICON_OPTS.color}><path d="M640-496v-92h92v92h-92Zm0 92h-92v-92h92v92Zm0 92v-92h92v92h-92ZM456-680l-60-60H140v520h408v-92h92v92h180v-460H640v92h-92v-92h-92ZM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60v-520 520Z"/></svg>
    )
  }
]

export default function FileCard({file}) {
    const {deleteFile, contextLoader} = useFiles();
    const optionsRef = useRef();

    const showOptions = () => {
      optionsRef.current.classList.toggle('hidden')
    }

    const getIconMimetype = (mimetype) => {
      const match = ICONS.find(icon => icon.mimetype.includes(mimetype));
      
      return match ? match.icon : (
        <svg xmlns="http://www.w3.org/2000/svg" height={ICON_OPTS.height} viewBox="0 -960 960 960" width={ICON_OPTS.width}  fill={ICON_OPTS.color}><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
      )
    }

    const getSizeNom = (size) => {
      if (size < 1024) {
        return `${size} B`;
      } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
      } else if (size < 1024 * 1024 * 1024) {
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
      } else {
        return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
      }
    };
    
    return (
        <article className="flex flex-col rounded-lg bg-white p-5 w-60 h-60 shadow-xl/40 shadow-sky-200/90 items-center justify-center relative" title={file.originalName}>
          {
            getIconMimetype(file.type)
          }
          <p className="font-display text-stone-600 w-full truncate max-h-24 mt-2 p-1 text-center font-black text-lg pointer-events-none selection:bg-transparent">{file.originalName}</p>
          <p className="font-display text-stone-600 w-full truncate p-1 text-center font-bold text-sm pointer-events-none selection:bg-transparent">{getSizeNom(file.size)}</p>
          <div className="absolute rounded-full flex justify-center items-center top-2 right-1 cursor-pointer" title="File options" onClick={showOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#E632BE"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
            <div className="absolute top-8 right-1 bg-black rounded-lg py-2 cursor-default hidden overflow-hidden" ref={optionsRef}>
              <a className="font-display text-sky-50 font-bold px-4 py-2 hover:bg-gray-700 text-right block" href={file.url} download={file.originalName}>Download</a>
              <p className="font-display text-red-500 font-bold px-4 py-2 hover:bg-gray-700 text-right cursor-pointer" onClick={() => deleteFile(file.fileName)}>Delete</p>
            </div>
          </div>
        </article>
    )
}