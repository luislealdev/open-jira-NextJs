import { createContext } from 'react';


interface ContextProps {
    sideBarOpen: boolean;

    // Methods
    closeSideBar: () => void;
    openSideBar: () => void;
}


export const UIContext = createContext({} as ContextProps );
