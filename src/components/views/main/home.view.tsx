export default function HomeView() {
    return (<>
        <div className="max-w-3xl mx-auto space-y-6">
            {/* POST */}
            <div className="bg-[#fffaf3] rounded-xl shadow p-6 border border-[#e7dccb]">
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">nugie</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <p className="text-gray-700 mb-4">
                    Today I learned how authentication works in Next.js and Prisma. Pretty
                    cool journey.
                </p>
                <img src="https://picsum.photos/600/400" className="rounded-lg" />
                <div className="flex gap-6 mt-4 text-gray-600 text-sm">
                    <span>❤️ 12 Likes</span>
                    <span>💬 3 Comments</span>
                </div>
            </div>
            <div className="bg-[#fffaf3] rounded-xl shadow p-6 border border-[#e7dccb]">
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src="https://i.pravatar.cc/40"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">nugie</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <p className="text-gray-700 mb-4">
                    Today I learned how authentication works in Next.js and Prisma. Pretty
                    cool journey.
                </p>
                <img src="https://picsum.photos/600/400" className="rounded-lg" />
                <div className="flex gap-6 mt-4 text-gray-600 text-sm">
                    <span>❤️ 12 Likes</span>
                    <span>💬 3 Comments</span>
                </div>
            </div>
        </div>
    </>)
}