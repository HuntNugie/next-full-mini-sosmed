import { useRouter } from "next/router"

export default function Header() {
    const {pathname} = useRouter();
    return (<>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
           {pathname === "/login" ? " Welcome Back" : "Create account"}
        </h1>
    </>)
}