import { useState, useEffect } from 'react';

IconBar.defaultProps = {
    sideEffort: true,
    checked: false
}

export default function IconBar({name, beforeSelected, afterSelected,
        className, title, sideEffort, checked}) {

    const[isSelected, setSelected] = useState(checked);

    useEffect(() => { // this useEffect is very effective to update the metadata from parent component...
        setSelected(checked);
    }, [checked]);

    const toggleSelected = () => {
        setSelected(!isSelected);
    }

    return(
        <div className={`${sideEffort === true && 'iconActionH'} inlineBlockH ml5H ${className}`} onClick={toggleSelected}
             title="Filter by Archived" title={title}>
            <button className="overrideInputH cursorPointerH mrlt2H">
                { isSelected ? afterSelected : beforeSelected }
            </button>
        </div>
    )
}