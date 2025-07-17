// lib/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {CurrentIdentity} from "@/lib/types/identity";

interface IdentityStore {
    currentIdentity: CurrentIdentity;
    setCurrentIdentity: (identity: CurrentIdentity) => void;
}

export const useIdentityStore = create<IdentityStore>()(
    persist(
        (set) => ({
            currentIdentity: null,
            setCurrentIdentity: (currentIdentity: CurrentIdentity) => set({currentIdentity}),
        }),
        { name: 'identity-store' } // localStorage key
    )
);
