(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const FilesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const apiUrl = ("TURBOPACK compile-time value", "http://a.zorilla-altered.ts.net:3000/");
function FilesProvider({ children }) {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const timeouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    //Function for starting a new download
    const getFiles = async ()=>{
        try {
            const response = await fetch(`${apiUrl}files`);
        } catch (err) {
            console.log(err.message);
        }
        setDownloads((prev)=>[
                ...prev,
                {
                    id: file._id,
                    name: file.originalName,
                    progress: 0,
                    controller
                }
            ]);
    };
    //Function for updating progress
    const updateProgress = (id, progress)=>{
        setDownloads((prev)=>prev.map((d)=>d.id === id ? {
                    ...d,
                    progress
                } : d));
    };
    //Function for cancelling download
    const cancelDownload = (id)=>{
        timeouts.current[id] = setTimeout(()=>{
            setDownloads((prev)=>prev.filter((d)=>d.id !== id));
            delete timeouts.current[id];
        }, 2000);
    };
    //Function for deleting completed downloads
    const completeDownload = (id)=>{
        timeouts.current[id] = setTimeout(()=>{
            setDownloads((prev)=>prev.filter((d)=>d.id !== id));
            delete timeouts.current[id];
        }, 5000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilesContext.Provider, {
        value: {
            downloads,
            startDownload,
            updateProgress,
            cancelDownload,
            completeDownload
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/FilesContext.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(FilesProvider, "ynUTXubSLiNc9si6QQr8CMRoDHc=");
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

//# sourceMappingURL=context_FilesContext_b61fbea0.js.map