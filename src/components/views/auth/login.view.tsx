export default function LoginView() {
    return (<>
        <form className="space-y-4">
            <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </div>
            <div>
                <label className="text-sm text-gray-700">Password</label>
                <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium">
                Login
            </button>
        </form>
        <div className="my-6 flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
        </div>
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-50">
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
            />
            <span className="text-gray-700 font-medium">Login with Google</span>
        </button>
        <p className="text-center text-sm text-gray-600 mt-6">
            Don't have account?
            <a className="text-amber-600 font-medium">Register</a>
        </p>
    </>)
}