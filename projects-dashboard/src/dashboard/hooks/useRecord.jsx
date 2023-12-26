import { useState, useEffect } from 'react'

/*
 DESCRIPTION: By using this hook u can effectively manage LocalStorage record
 WORKING: once u use this hook it will create a state with initialValue and
          on useEffect the real value is loaded from local storage
          If u need u can use setNewValue to add new unique data in LocalStorage for the same key rather different
 Eg: const [data, setData] = useLocalStorage('data', ['local', 'storage']); // in Component1
     data => ['local', 'storage'] // same data in component 2
     setData(['stored', 'in', 'local', 'storage']);
 NOTE: LocalStorage only accept and return strings so convert it into array to manage.
*/
const initialValue = [];

const useRecord = (key:string) => {
    const [record, setRecord] = useState(initialValue);

    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setRecord(JSON.parse(storedValue));
        }
    }, [key])

    const addRecord = (value:object) => {
        if (!record.includes(value)) {
            const updatedRecord = [...record, value];
            setRecord(updatedRecord);
            localStorage.setItem(key, JSON.stringify(updatedRecord));
            return true;
        } else return false;
    }

    const removeRecord = (index:number) => {
        if (index > record.length) return false
        delete record[index];
    }

    const clear = () => {
        setRecord(initialValue);
        localStorage.setItem(key, JSON.stringify(initialValue));
    }

    return [record, addRecord, clear, removeRecord];
}
export default useRecord;