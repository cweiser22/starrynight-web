import React, {ReactNode} from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className={"flex-1 overflow-y-auto container mx-auto max-w-md"}>
            {children}
        </div>
    )
}