import React, {ReactNode} from "react";
import IdentityBar from "@/components/layout/identity-bar";
import AppBar from "@/components/layout/app-bar";

export default function CLayout({children}: {children: ReactNode}) {
    return (
        <div className={"h-screen flex flex-col"}>
        <header>
            <AppBar/>
        </header>
            <main className={"flex-1"}>{children}</main>
            <footer>
                <IdentityBar/>
            </footer>
        </div>
    )
}