'use server'
import * as identityService from '@/lib/services/identityService'
import {auth} from '@/lib/auth'
import { headers } from 'next/headers';


export async function createIdentity(displayName: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session){
        return
    }

    const createdIdentity = await identityService.createIdentity(displayName, session?.user.id);
    console.log(createdIdentity);
}

export async function listIdentites(): Promise<ReturnType<typeof identityService.listIdentitiesByUserId>> {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session){
        return [];
    }

    return await identityService.listIdentitiesByUserId(session.user.id);
}