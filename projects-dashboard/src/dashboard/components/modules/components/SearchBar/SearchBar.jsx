import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

export default function SearchBar({iconsSize}) {
    const[isActive, setActive] = useState(false);

    return(
        <div className={`search_bar flexAlignCenterH ml20H ${isActive && 'search_border'}`}>
            <BsSearch size={iconsSize}/>
            <input type="text" className="search_input overrideInputH"
                   placeholder="Search Projects..."
                   onFocus={() => setActive(true)}
                   onBlur={() => setActive(false)}/>
        </div>
    )
}