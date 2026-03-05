import React from "react";
import Navbar from "../partials/main/navbar";

export default function MainLayout({children}:{children:React.ReactNode}) {
    return (<>
        <>

            {/* NAVBAR */}
            <Navbar />
            {/* FEED */}
            <div className="bg-[#f5efe6] min-h-screen py-10">
              {children}
            </div>
        </>

    </>)
}