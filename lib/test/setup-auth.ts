import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "@/db";
import * as schema from "@/db/schema";

export function startTestAuth(){
    return betterAuth({
        //...
        database: drizzleAdapter(db, {
            provider: "pg",
            schema: schema,
        }),
        emailAndPassword: {
            enabled: true
        }
    })
}