import AuthLayout from "@/components/layouts/auth.layout";
import RegisterView from "@/components/views/auth/register.view";

export default function RegisterPage() {
    return (<>
        <AuthLayout>
            <RegisterView />
        </AuthLayout>
    </>)
}