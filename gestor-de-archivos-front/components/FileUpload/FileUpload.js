import { useRef, useState } from "react";
import { useFiles } from "@/context/FilesContext";
import ActionsModal from "../ActionsModal/ActionsModal";


export default function FileUpload() {
    const uploadMenu = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const [file, setFile] = useState(null);
    const {uploadFile, progress} = useFiles();
    
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        const res = await uploadFile(file);
        if(res.status === 200) {
            setTimeout(()=>{
                setIsOpen(false);
            }, 3000);
        }
    }

    const showUpload = () => {
        uploadMenu.current.classList.toggle('hidden')
    }
    return (
        <>
            <button className="fixed bottom-5 right-5 p-2 bg-white rounded-full cursor-pointer border-2 border-[#D600DB]" onClick={showUpload}>
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
            <div className="fixed bottom-25 right-5 py-1 bg-white border-2 border-[#D600DB] rounded-lg hidden" ref={uploadMenu}>
                <button className="font-display cursor-pointer hover:bg-gray-400 py-3 px-5 text-nowrap" onClick={() => setIsOpen(true)}>Upload file</button>
            </div>
            <ActionsModal isOpen={isOpen}>
                    <form className="flex flex-col justify-center items-center">
                        <label htmlFor="file" className="bg-blue-400 py-2 px-5 rounded-xl font-display shadow-xl/50 shadow-black/50 cursor-pointer text-white">Select a file</label>
                        <input type="file" id="file" className="hidden" onChange={handleChange}/>
                        <div className={`w-full mt-3 bg-gray-200 rounded h-2 overflow-hidden ${progress === 0 ? 'hidden' : 'block'}`}>
                            <div className={`${progress !== 100 ? `bg-[#D600DB]` : `bg-green-600`} h-full transition-all`} style={{ width: `${progress}%` }} />
                        </div>
                        <div className="mt-3 flex flex-row gap-2">
                            <button className="bg-red-500 rounded-xl py-1 px-3 shadow-xl/50 shadow-black/50 font-display text-white cursor-pointer" onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                            }}>Cancelar</button>
                            <button className="bg-green-500 rounded-xl py-1 px-3 shadow-xl/50 shadow-black/50 font-display text-white cursor-pointer" onClick={handleUpload}>Enviar</button>
                        </div>
                    </form>
            </ActionsModal>
        </>
            
    );
};