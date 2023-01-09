import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import entriesApi from '../../apis/entriesApi';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [

    ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = async (description: string) => {
        
        const { data: newEntry } = await entriesApi.post('/entries', { description });

        dispatch({ type: '[Entries] - addEntry', payload: newEntry });
    }

    const updateEntry = (entry: Entry) => {

        dispatch({ type: '[Entries] - entryUpdated', payload: entry });

    }

    const loadEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('entries');
        dispatch({ type: '[Entries] - loadEntries', payload: data });
    }

    useEffect(() => {
        loadEntries();
    }, [])


    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods

            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

