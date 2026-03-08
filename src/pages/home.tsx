import MainLayout from "@/components/layouts/main.layout";
import HomeView from "@/components/views/main/home.view";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]";

export default function HomePage() {
    return (<>
        <MainLayout>
            <HomeView />
        </MainLayout>
    </>)
}

export async function getServerSideProps(ctx:GetServerSidePropsContext){
    const session = await getServerSession(ctx.req,ctx.res,AuthOptions)
    if(!session){
        return {
            redirect:{
                destination:"/login",
                permanent:false
            }
        }
    }
    return {
        props:{
            user:session.user
        }
    }
}