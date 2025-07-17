import {db} from "@/db";
import {table} from "@/db/schema";

type IdentityMinimal = {
    publicId: string;
    displayName: string;
}

export async function createIdentity(displayName: string, userId: string): Promise<IdentityMinimal> {
    const [result] =  await db.insert(table.identity).values({
        displayName: displayName,
        userId: userId
    }).returning()

    if (!result.publicId || !result.displayName) {
        throw new Error()
    }

    return {
        publicId: result.publicId,
        displayName: result.displayName,
    } as IdentityMinimal;
}

export function listIdentitiesByUserId(userId: string) {
    return db.query.identity.findMany({
        where: (identities, {eq}) => eq(table.identity.userId, identities.userId)
    })

}