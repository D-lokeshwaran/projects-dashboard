import { useState } from 'react'

const useLocalStorage = (key:string) => {

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getItem = () => {
        const storedValue = localStorage.getItem(key);
        if(typeof storedValue === 'string') {
            return storedValue.replaceAll('"', "");
        } else {
            return JSON.parse(storedValue);
        }
        return '';
    }

    return [setItem, getItem]
}

export default useLocalStorage;