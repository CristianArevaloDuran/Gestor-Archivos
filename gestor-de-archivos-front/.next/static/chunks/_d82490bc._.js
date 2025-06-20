(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/hooks/useGetFiles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useGetFiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useGetFiles() {
    _s();
    const apiUrl = ("TURBOPACK compile-time value", "http://a.zorilla-altered.ts.net:3000/");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const getFiles = async ()=>{
        try {
            setLoading(true);
            const res = await fetch(`${apiUrl}files`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setFiles(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetFiles.useEffect": ()=>{
            getFiles();
        }
    }["useGetFiles.useEffect"], []);
    return {
        files,
        loading
    };
}
_s(useGetFiles, "zMnqggxtwlDmTOERg77mrfWXT00=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useUploadFile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useUploadFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useUploadFile() {
    _s();
    const apiUrl = ("TURBOPACK compile-time value", "http://a.zorilla-altered.ts.net:3000/");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleUpload = async (file)=>{
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${apiUrl}upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent)=>{
                    const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    setProgress(percent);
                }
            });
            if (res.status === 200) {
                setTimeout(()=>{
                    setProgress(0);
                }, 3000);
                return res;
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    return {
        handleUpload,
        progress
    };
}
_s(useUploadFile, "MDavqfnVfXtrXQtLNoGNVIaRLCY=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/context/FilesContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FilesProvider": (()=>FilesProvider),
    "useFiles": (()=>useFiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGetFiles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGetFiles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUploadFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useUploadFile.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const FilesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const apiUrl = ("TURBOPACK compile-time value", "http://a.zorilla-altered.ts.net:3000/");
function FilesProvider({ children }) {
    _s();
    const [contextFiles, setContextFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const timeouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [contextLoader, setContextLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //Get files
    const { files, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGetFiles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    //Upload file
    const { handleUpload, progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUploadFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesProvider.useEffect": ()=>{
            setContextFiles(files);
        }
    }["FilesProvider.useEffect"], [
        files
    ]);
    //Function to delete a file
    const deleteFile = async (filename)=>{
        setContextLoader(true);
        try {
            const response = await fetch(`${apiUrl}delete/${filename}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setContextFiles((prev)=>prev.filter((d)=>d.fileName !== filename));
                setContextLoader(false);
            }
        } catch (err) {
            setContextLoader(false);
            console.log(err.message);
        }
    };
    //Function to upload a file
    const uploadFile = async (file)=>{
        const res = await handleUpload(file);
        if (res.status === 200) {
            setContextFiles((prev)=>[
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
    */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilesContext.Provider, {
        value: {
            contextFiles,
            loading,
            deleteFile,
            uploadFile,
            progress,
            contextLoader
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FilesContext.js",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
_s(FilesProvider, "E7TumTJLjU+RNp8KLoq4qlB8lo0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGetFiles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useUploadFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = FilesProvider;
const useFiles = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilesContext);
};
_s1(useFiles, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "FilesProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d82490bc._.js.map