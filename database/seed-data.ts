interface seedData {
    entries: seedEntry[]

}

interface seedEntry {
    description: string,
    createdAt: number
    status: string,
}

export const seedData: seedData = {
    entries: [
        {
            description: 'Primera entrada',
            createdAt: Date.now(),
            status: 'pending'
        },
        {
            description: 'Segunda entrada',
            createdAt: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            description: 'Tercera entrada',
            createdAt: Date.now() - 100000,
            status: 'finished'
        },
    ]
}