import { useRef, useEffect } from 'react'

/*
 This is a simple hook to detect the click outside of the referred DOM element
 using useRef() hoot and useEffect callback hook
 */

const useDetectOutsideWrapper = (ref, execute) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                execute();
            }
        }
        window.addEventListener("click", handleClickOutside);
        console.log(ref);
    }, [ref]);
}

export default useDetectOutsideWrapper;