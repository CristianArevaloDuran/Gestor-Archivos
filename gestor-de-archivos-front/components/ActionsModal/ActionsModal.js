export default function ActionsModal({isOpen, children}) {
    return (
        <main className={`fixed w-dvw h-dvh bg-white/30 top-0 left-0 backdrop-blur-xs flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white py-5 px-10 rounded-xl shadow-xl/40 shadow-black/90 flex flex-col justify-center items-center">
                {children}
            </div>
        </main>
    )
}