import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [{
        uid: uuidv4(),
        description: 'Primera entrada',
        createdAt: Date.now(),
        status: 'pending'
    },
    {
        uid: uuidv4(),
        description: 'Segunda entrada',
        createdAt: Date.now() - 1000000,
        status: 'in-progress'
    },
    {
        uid: uuidv4(),
        description: 'Tercera entrada',
        createdAt: Date.now() - 100000,
        status: 'finished'
    },
    ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

