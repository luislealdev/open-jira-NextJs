import { EntriesState } from './EntriesProvider';
import { Entry } from '../../interfaces/entries';

type EntriesActionType = | { type: '[Entries] - addEntry', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case '[Entries] - addEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }

        default:
            return state;
    }
}