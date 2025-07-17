import {startTestDb} from "@/lib/test/setup-db";
import {beforeAll, vi, expect, describe, it} from "vitest";
import {createIdentity} from "@/lib/services/identityService";
import {betterAuth} from "better-auth";
import {startTestAuth} from "@/lib/test/setup-auth";

let auth: ReturnType<typeof betterAuth>;
let testUser: {
    id: string;
    email: string;
    name: string;
};

// 👇 Mock the db used in the service file
vi.mock('@/db', async () => {
    const container = await startTestDb();
    const actual = await vi.importActual<typeof import('@/db')>('@/db');
    return {
        ...actual,
        db: container.db, // override the default db instance
    };
});

beforeAll(async () => {
    auth = startTestAuth();
    const response = await auth.api.signUpEmail({body: {
        email: 'testemail@example.com',
        password: '123456admintest124',
        name: 'Test User',
    }});
    testUser = response.user;
})

describe('createIdentity()', () => {
    it('should insert a new identities', async () => {
        const result = await createIdentity('Test User', testUser.id);
        expect(result[0].displayName).toBe('Test User');
    });
});