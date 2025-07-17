import {db} from "@/db";
import {table} from "@/db/schema";

export async function getPosts() {
    return db.query.post.findMany()
}