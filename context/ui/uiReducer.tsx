import { UIState } from './UIProvider';

type UIActionType = | { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' } | { type: 'UI - changeIsAddingEntry', payload: boolean } | { type: 'UI - Start Dragging' } | { type: 'UI - End Dragging' }

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

      case 'UI - Start Dragging':
         return {
            ...state,
            isDragging: true
         }

      case 'UI - End Dragging':
         return {
            ...state,
            isDragging: false
         }

      default:
         return state;
   }
}
