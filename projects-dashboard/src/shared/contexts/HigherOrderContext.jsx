import { createContext, useContext, useState } from 'react';
import ThemeContextProvider from './ThemeContext'
import PathContextProvider from './PathContext'
import { useRecord } from '../hooks'

const HigherOrderContext = createContext();
export const useHOContext = () => useContext(HigherOrderContext);

export default function HigherOrderContextProvider({children}) {

    const[hocData, addHocData, clear] = useRecord('hocData');

    return (
        <HigherOrderContext.Provider value={{ hocData, addHocData }}>
            <PathContextProvider>
                {children}
            </PathContextProvider>
        </HigherOrderContext.Provider>
    )
}