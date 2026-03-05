import React from "react";
import Header from "../partials/auth/header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (<>
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#f5efe6]">
                <div className="bg-[#fffaf3] shadow-xl rounded-2xl w-full max-w-md p-8 border border-[#e7dccb]">
                    {/* header */}
                    <Header />
                    {children}
                </div>
            </div>
        </>

    </>)
}