import { UIState } from './UIProvider';

type UIActionType = | { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' } | { type: 'UI - changeIsAddingEntry', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

   switch (action.type) {
      case 'UI - Open Sidebar':
         return {
            ...state,
            sideBarOpen: true
         }

      case 'UI - Close Sidebar':
         return {
            ...state,
            sideBarOpen: false
         }

      case 'UI - changeIsAddingEntry':
         return {
            ...state,
            isAddingEntry: action.payload
         }

      default:
         return state;
   }
}
