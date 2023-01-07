import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entries';

type EntriesActionType = | { type: '[Entries] - addEntry', payload: Entry } | { type: '[Entries] - entryUpdated', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case '[Entries] - addEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case '[Entries] - entryUpdated':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }

        default:
            return state;
    }
}