import { useState } from 'react'

const useLocalStorage = (key:string) => {

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getItem = () => {
        var storedValue = localStorage.getItem(key);
        if(storedValue) {
            if (storedValue.includes('{') || storedValue.includes('[')){
                try {
                    storedValue = JSON.parse(storedValue)
                } catch(error) {
                    setItem(key, '');
                    console.log('unable to parse ', storedValue)
                    return '';
                }
            } else {
                storedValue = storedValue.replaceAll('"', '');
            }
        }
        return storedValue;
    }

    return [setItem, getItem]
}

export default useLocalStorage;