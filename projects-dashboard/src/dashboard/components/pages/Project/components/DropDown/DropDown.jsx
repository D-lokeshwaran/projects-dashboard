import { useState } from 'react';
import { BsChevronDown, BsChevronUp  } from 'react-icons/bs'
import './DropDown.css';

DropDown.defaultProps = {
    name: 'default',
    contents: [1, 2, 3],
    onHover: false
}

export default function DropDown({ name, contents, onHover, className }) {

    const[clicked, setClicked] = useState(false);

    return (
        <>
            { name && <small className={`mr10H ${className}`}><b>{name}</b></small> }
            <div className={`${onHover && 'dropdown_hover'}`}>
                <div className="forceFlexH selected_dropdown" onClick={() => setClicked(!clicked)}>
                    <span className="selected_dropdown_box tableCellH">{contents[0]}</span>
                    <BsChevronDown size="18" className="icon tableCellH"/>
                </div>
                <div className={`dropdownContents ${clicked && 'inlineBlock'}`}>
                    {
                        contents.map(content =>
                            <div className="dropdownContent"
                                 onClick={() => setClicked(false)}>{content}</div>)
                    }
                </div>
            </div>
        </>
    )
}