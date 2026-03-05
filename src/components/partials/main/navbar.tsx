export default function Navbar() {
    return (<>
        <nav className="bg-[#fffaf3] border-b border-[#e7dccb]">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl text-gray-800">MiniSocial</h1>
                <div className="flex items-center gap-6 text-gray-700">
                    <a className="hover:text-amber-600">Home</a>
                    <a className="hover:text-amber-600">Explore</a>
                    <a className="hover:text-amber-600">Create Post</a>
                    <a className="hover:text-amber-600">Profile</a>
                    <div className="flex items-center gap-2">
                        <img
                            src="https://i.pravatar.cc/40"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">nugie</span>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}