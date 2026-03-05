import AuthLayout from "@/components/layouts/auth.layout";
import LoginView from "@/components/views/auth/login.view";

export default function LoginPage() {
    return (<>
        <AuthLayout>
            <LoginView />
        </AuthLayout>
    </>)
}