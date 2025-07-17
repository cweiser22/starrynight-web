
import {SignUpForm} from "@/components/signup/signup-form";

export default function LoginPage() {
    return (
        <div className={"w-full flex justify-center flex-col"}>
            <h2 className={"text-2xl"}>Welcome to starry!</h2>
            <SignUpForm/>
        </div>
    )
}