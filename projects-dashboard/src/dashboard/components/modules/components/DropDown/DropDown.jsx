import { useState } from 'react';
import { BsChevronDown, BsChevronUp  } from 'react-icons/bs'
import './DropDown.css';

DropDown.defaultProps = {
    name: '',
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

    const[dropdown, setDropdown] = useState(false);

    const onHoverAndSet = (value) => {
        if(onHover === true) {
            setDropdown(value)
        }
    }
    //TODO: need to customize dynamically even more for css styling...
    return (
        <div className={`flexAlignCenterH ml10H`}>
            { name && <small className={`${className}`}><b>{name}</b></small> }
            <div className={`${onHover && 'dropdown_hover'}`} style={{zIndex: '2'}}
                 onMouseOver={() => onHoverAndSet(true)}
                 onMouseOut={() => onHoverAndSet(false)}>
                <div className="forceFlexH selected_dropdown" onClick={() => setDropdown(onHover ? dropdown : !dropdown)}>
                    <span className="selected_dropdown_box">{contents[0]}</span>
                    <BsChevronDown size="18" className="icon"/>
                </div>
                <div className={`dropdownContents ${dropdown == true && 'inlineBlock'}`}>
                    {
                        contents.map(content =>
                            <div className="dropdownContent"
                                 onClick={() => setDropdown(false)}>{content}</div>)
                    }
                </div>
            </div>
        </div>
    )
}