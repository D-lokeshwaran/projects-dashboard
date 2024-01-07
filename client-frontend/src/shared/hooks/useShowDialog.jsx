import { useState, useEffect } from 'react';

const useShowDialog = ({ identifier }) => {
    const [idOpen, setIdOpen] = useState({identifier: false});

    const isOpen = isOpen[identifier];
    const open = () => {
        setIdOpen({identifier: true});
    }
    const close = () => {
        setIdOpen({identifier: false});
    }

    return [ isOpen, open, close, Dialog ]
}