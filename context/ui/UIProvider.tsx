import { ChildContextProvider, FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideBarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}


const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
  isAddingEntry: false,
  isDragging: false
}


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);


  const openSideBar = () => dispatch({ type: 'UI - Open Sidebar' });

  const closeSideBar = () => dispatch({ type: 'UI - Close Sidebar' });

  const changeIsAddingEntry = (value: boolean) => dispatch({ type: 'UI - changeIsAddingEntry', payload: value });

  const startDragging = () => dispatch({ type: 'UI - Start Dragging' });

  const endDragging = () => dispatch({ type: 'UI - End Dragging' });

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      closeSideBar,
      openSideBar,
      changeIsAddingEntry,
      startDragging,
      endDragging
    }}>
      {children}
    </UIContext.Provider>
  )
};