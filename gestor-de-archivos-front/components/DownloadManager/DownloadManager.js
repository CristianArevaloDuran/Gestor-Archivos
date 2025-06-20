import { useFiles } from "@/context/FilesContext";

export default function DownloadManager() {
    const {downloads} = useFiles();
    
    if (!downloads || downloads.length == 0) return null

    return(
      <div className="fixed bottom-5 right-5 w-80 bg-stone-900 shadow-lg rounded-lg p-4 z-50 space-y-3">
      <h3 className="text-gray-900 font-display font-semibold text-sm text-sky-50">Descargas activas</h3>
      {
        downloads.map(download => (
          <div key={download.id}>
            <p className="text-sm font-display text-sky-100 truncate" title={download.name}>{download.name}</p>
            <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
              <div
                className={`${download.progress !== 100 ? `bg-blue-600` : `bg-green-600`} h-full transition-all`}
                style={{ width: `${download.progress}%` }}
                />
            </div>
            <p className="font-display text-sky-100 text-right">{parseInt(download.progress)}%</p>
            <button className="text-red-600 text-xs ml-auto cursor-pointer hover:bg-stone-800 px-3 py-2 rounded-lg"onClick={() => downloads.find(d => d.id === download.id)?.controller?.abort()}>
              Cancelar</button>
          </div>
        ))
      }
      </div>
    )
}