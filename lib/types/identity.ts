export interface Identity{
    publicId: string;
    displayName: string;
}

export type CurrentIdentity = Identity | null;