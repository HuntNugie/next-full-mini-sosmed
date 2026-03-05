import Link from "next/link";

export default function RegisterView() {
    return (<>
        <form className="space-y-4">
            <div>
                <label className="text-sm text-gray-700">Username</label>
                <input
                    type="text"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black"
                />
            </div>
            <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black"
                />
            </div>
            <div>
                <label className="text-sm text-gray-700">Password</label>
                <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black"
                />
            </div>
            <div>
                <label className="text-sm text-gray-700">Profile Photo</label>
                <input
                    type="file"
                    className="w-full mt-1 border border-gray-300 rounded-lg text-black p-2"
                />
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium">
                Register
            </button>
            <p className="text-center text-sm text-gray-600 mt-6">
                Have account?
                <Link href={"/login"} className="text-amber-600 font-medium">Login</Link>
            </p>
        </form>
    </>)
}