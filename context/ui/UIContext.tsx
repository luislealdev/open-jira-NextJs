import { createContext } from 'react';


interface ContextProps {
    sideBarOpen: boolean;
    isAddingEntry: boolean;

    // Methods
    closeSideBar: () => void;
    openSideBar: () => void;
    changeIsAddingEntry: (value: boolean) => void;
}


export const UIContext = createContext({} as ContextProps);
