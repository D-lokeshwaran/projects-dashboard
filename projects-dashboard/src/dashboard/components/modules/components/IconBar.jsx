import { useState } from 'react';

export default function IconBar({name, beforeSelected, afterSelected, className}) {

    const[isSelected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!isSelected);
    }

    return(
        <div className={`iconActionH ml5H ${className}`} onClick={toggleSelected}
             title="Filter by Archived">
            <button className="customInputH">{ isSelected ? afterSelected : beforeSelected }</button>
        </div>
    )
}