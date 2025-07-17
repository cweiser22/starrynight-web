"use client"

import Spacer from "@/components/layout/spacer";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import ModeToggle from "@/components/layout/mode-toggle";
import Link from "next/link";
import authClient from "@/lib/auth-client";


export default function AppBar(){
    const { data: currentUser } = authClient.useSession();

    async function handleLogout(){
        await authClient.signOut();
    }

    return (
        <div className={"w-full flex flex-row p-4  items-center justify-between"}>
            <div className={"flex flex-row items-center space-x-2 "}>
                <Star className="h-[1.4rem] w-[1.4rem] scale-100 rotate-0 transition-all" />


                <Link href={"/"}>
                    <h1 className={"text-2xl font-bold  "}>
                        starry
                    </h1>
                </Link>

            </div>

            <Spacer/>

            <div className={"space-x-2 flex flex-row items-center"}>
                {!currentUser ? <>
                <Link href="/auth/login">
                 <Button className={"rounded-full bg-indigo-600 dark:text-white"}>Log In</Button>
                </Link>
                    <Link href={"/auth/signup"}>
                    <Button className={"rounded-full "}>Join Starry</Button>
                    </Link>

                </>: <>
                    <p className={"text-sm font-bold"}>{currentUser?.user.email}</p>
                    <Button onClick={() => handleLogout()} className={"rounded-full bg-indigo-600 dark:text-white"}>Log Out</Button>
                </>}
                <ModeToggle/>
            </div>
        </div>
    )
}