import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

/*
 DESCRIPTION: By using this hook u can effectively manage LocalStorage record
 WORKING: once u use this hook it will create a state with initialValue and
          on useEffect the real value is loaded from local storage
          If u need u can use setNewValue to add new unique data in LocalStorage for the same key rather different
 Eg: const [data, setData] = useLocalStorage('data', ['local', 'storage']); // in Component1
     data => ['local', 'storage'] // same data in component 2
     setData(['stored', 'in', 'local', 'storage']);
 TODOs: 1. In Future need to update this to all JS objects...
        2. useImmer instead of state next time.
*/
const initialValue = [];

const useRecord = (key:string) => {
    const [record, setRecord] = useState(initialValue);
    const [setItem, getItem] = useLocalStorage(key);

    useEffect(() => {
        let storedValue = getItem();
        if (storedValue) {
            setRecord(storedValue);
        }
    }, [key])

    const addRecord = (value:object) => {
        if (!record.includes(value)) {
            const updatedRecord = [...record, value];
            setRecord(updatedRecord);
            setItem(updatedRecord);
            return true;
        } else return false;
    }

    const removeRecordByIndex = (index:number) => {
        if (index > record.length) return false
        const removedValue = record.splice(index, 1);
        setRecord(record);
        setItem(record);
        return removedValue;
    }

    const clear = () => {
        setRecord(initialValue);
        setItem(initialValue);
    }

    return [record, addRecord, clear, removeRecordByIndex];
}
export default useRecord;