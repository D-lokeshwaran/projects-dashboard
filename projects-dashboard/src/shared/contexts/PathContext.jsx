import { createContext, useContext, useState } from 'react';

const PathContext = createContext();
export const usePath = () => useContext(PathContext);

const initialPath = ["Home"];

export default function PathContextProvider({children}) {

    const [path, setPath] = useState(initialPath);

    const addPath = (pathPart:string) => {
        if(!path.includes(pathPart) && pathPart) {
            setPath([...path, pathPart])
        }
    }
    const removeLast = () => {
        setPath(path.slice(0, path.length -2));
    }
    const removeFrom = (index:number) => {
        setPath(path.slice(0, index));
    }
    const clearPath = () => {
        setPath(initialPath);
    }
    const clearAndAddPath = (path:string) => {
        setPath([...initialPath, path])
    }

    return (
        <PathContext.Provider value={{ path, addPath, removeLast, removeFrom, clearPath, clearAndAddPath }}>
            {children}
        </PathContext.Provider>
    )
}
