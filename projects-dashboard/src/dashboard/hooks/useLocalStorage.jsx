import { createContext, useContext, useState, useEffect } from 'react'

/*
 DESCRIPTION: By using this hook u can effectively manage LocalStorage
 WORKING: once u use this hook it will create a state with initialValue and
          on useEffect the real value is loaded from local storage
          If u need u can use setNewValue to add new data in LocalStorage for the same key rather different
 Eg: const [data, setData] = useLocalStorage('data', ['local', 'storage']); // in Component1
     data => ['local', 'storage'] // same data in component 2
     setData(['stored', 'in', 'local', 'storage']);
*/
const useLocalStorage = ({ key, initialValue }) => {
    const[value, setValue] = useState(initialValue);

    /* Does the magic of loading ls data into local */
    useEffect(() => {
        const storedValue = LocalStorage.getItem(key);
        if(storedValue) {
            setValue(storedValue);
        }
    }, [key])

    const setNewValue = (key, newValue) => {
        setValue(newValue);
        LocalStorage.setItem(key, newValue);
    }

    return [value, setNewValue];
}