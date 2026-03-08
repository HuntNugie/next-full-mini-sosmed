import AuthLayout from "@/components/layouts/auth.layout";
import LoginView from "@/components/views/auth/login.view";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]";

export default function LoginPage() {
    return (<>
        <AuthLayout>
            <LoginView />
        </AuthLayout>
    </>)
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = await getServerSession(ctx.req, ctx.res, AuthOptions);
    if (session) {
        return {
            redirect: {
                destination: "/home",
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}