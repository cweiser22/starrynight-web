import {LogInForm} from "@/components/login/login-form";


export default function LoginPage() {

    return (
        <div className={"w-full flex justify-center flex-col"}>
            <h2 className={"text-2xl"}>Log In</h2>
            <LogInForm/>
        </div>
    )
}