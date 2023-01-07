import { EntriesState } from './EntriesProvider';

type EntriesActionType = | { type: '[Entries] - firstAction' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case '[Entries] - firstAction':
            return {
                ...state,
            }

        default:
            return state;
    }
}