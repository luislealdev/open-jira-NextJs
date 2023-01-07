import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [{
        _id: uuidv4(),
        description: 'Primera entrada',
        createdAt: Date.now(),
        status: 'pending'
    },
    {
        _id: uuidv4(),
        description: 'Segunda entrada',
        createdAt: Date.now() - 1000000,
        status: 'in-progress'
    },
    {
        _id: uuidv4(),
        description: 'Tercera entrada',
        createdAt: Date.now() - 100000,
        status: 'finished'
    },
    ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entries] - addEntry', payload: newEntry });
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods

            addNewEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

