import {db} from "@/db";
import {table} from "@/db/schema";

export function createIdentity(displayName: string, userId: string){
    return db.insert(table.identity).values({
        displayName: displayName,
        userId: userId
    }).returning()
}

export function listIdentitesByUserId(userId: string){
    return db.query.identity.findMany({
        where: (posts, {eq}) => eq(table.user.id, userId)
    })
}