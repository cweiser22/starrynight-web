import * as identityService from "@/lib/services/identityService";
import {auth} from "@/lib/auth";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: Request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session);

    if (!session) {
        return new NextResponse("Unauthorized", { status: 401 });
    }


    const user = session.user;

    const identities = await identityService.listIdentitiesByUserId(user.id)

    return NextResponse.json(identities);

}