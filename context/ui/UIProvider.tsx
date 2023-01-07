import { ChildContextProvider, FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideBarOpen: boolean;
  isAddingEntry: boolean;
}


const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
  isAddingEntry: false
}


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);


  const openSideBar = () => dispatch({ type: 'UI - Open Sidebar' });

  const closeSideBar = () => dispatch({ type: 'UI - Close Sidebar' });

  const changeIsAddingEntry = (value: boolean) => dispatch({ type: 'UI - changeIsAddingEntry', payload: value });

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      closeSideBar,
      openSideBar,
      changeIsAddingEntry
    }}>
      {children}
    </UIContext.Provider>
  )
};