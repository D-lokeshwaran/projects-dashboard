import { useState } from 'react';
import { BsChevronDown, BsChevronUp  } from 'react-icons/bs'
import './DropDown.css';

DropDown.defaultProps = {
    name: 'default',
    contents: [1, 2, 3],
    onHover: false
}

/*
 DESCRIPTION:
 This is a dropdown component if the onHover == true
 the dropdown will work on hover of the select box if == false
 work on clicks...
 */
export default function DropDown({ name, contents, onHover, className }) {

    const[clicked, setClicked] = useState(false);

    return (
        <div className="flexAlignCenterH ml10H">
            { name && <small className={`${className}`}><b>{name}</b></small> }
            <div className={`${onHover && 'dropdown_hover'}`} style={{zIndex: '2'}}>
                <div className="forceFlexH selected_dropdown" onClick={() => setClicked(!clicked)}>
                    <span className="selected_dropdown_box">{contents[0]}</span>
                    <BsChevronDown size="18" className="icon"/>
                </div>
                <div className={`dropdownContents ${!onHover && clicked && 'inlineBlock'}`}>
                    {
                        contents.map(content =>
                            <div className="dropdownContent"
                                 onClick={() => setClicked(false)}>{content}</div>)
                    }
                </div>
            </div>
        </div>
    )
}