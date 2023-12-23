import { createContext, useContext, useState } from 'react';
import ThemeContextProvider from './ThemeContext'
import PathContextProvider from './PathContext'

const HigherOrderContext = createContext();
export const useHOContext = () => useContext(HigherOrderContext);

export default function HigherOrderContextProvider({children}) {

    return (
        <HigherOrderContext.Provider>
            <PathContextProvider>
                {children}
            </PathContextProvider>
        </HigherOrderContext.Provider>
    )
}