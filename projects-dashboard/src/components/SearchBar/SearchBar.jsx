import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

export default function SearchBar({iconsSize, placeholder}) {
    const[isActive, setActive] = useState(false);

    return(
        <div className={`search_bar flexAlignCenterH ml20H ${isActive && 'search_border'}`}>
            <BsSearch size={iconsSize} style={{color: 'black'}}/>
            <input type="text" className="search_input overrideInputH"
                   placeholder={placeholder}
                   onFocus={() => setActive(true)}
                   onBlur={() => setActive(false)}/>
        </div>
    )
}