// lib/test/setup-db.ts
import {drizzle, NodePgDatabase} from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import {PostgreSqlContainer} from "@testcontainers/postgresql";
import * as schema from "@/db/schema";
import { migrate } from 'drizzle-orm/node-postgres/migrator';

export async function startTestDb() {
    const container = await new PostgreSqlContainer("postgres:latest").start()

    const pool = new Pool({
        host: container.getHost(),
        port: container.getPort(),
        database: container.getDatabase(),
        user: container.getUsername(),
        password: container.getPassword(),

    });
    await pool.connect();

    await pool.query("create extension if not exists ltree");

    const db: NodePgDatabase<typeof schema> = drizzle(pool);
    await migrate(db, {
        migrationsFolder: './drizzle'
    })

    return {
        db,
        pool,
        container,
    };
}
