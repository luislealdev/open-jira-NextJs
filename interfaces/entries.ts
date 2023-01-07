
export interface Entry {
    uid: string,
    description: string,
    createdAt: number,
    status: EntryStatus
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';