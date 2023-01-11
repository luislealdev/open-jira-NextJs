import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entries';
import entriesApi from '../../apis/entriesApi';
import { useSnackbar } from 'notistack';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [

    ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const { enqueueSnackbar } = useSnackbar();

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = async (description: string) => {

        const { data: newEntry } = await entriesApi.post('/entries', { description });

        dispatch({ type: '[Entries] - addEntry', payload: newEntry });
    }

    const updateEntry = async ({ _id, description, status }: Entry, showUpdatedAlert: boolean = false) => {
        try {
            const { data: updatedEntry } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: '[Entries] - entryUpdated', payload: updatedEntry });

            if (showUpdatedAlert) enqueueSnackbar('Entrada actualizada', {
                variant: 'success',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
        } catch (error) {
            console.log(error);
        }
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

