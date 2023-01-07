import { createContext } from 'react';


interface ContextProps {
    sideBarOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // Methods
    closeSideBar: () => void;
    openSideBar: () => void;
    changeIsAddingEntry: (value: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
}


export const UIContext = createContext({} as ContextProps);
