import './ListActions.css';
import { BsThreeDots, BsStar, BsArchive, BsTrash } from "react-icons/bs";
import { useState, useRef } from 'react'
import { useDetectOutsideWrapper } from '../../../../shared/hooks'

export default function ListActions() {

    const [ isActive, setIsActive ] = useState(false);

    /* Close dialog onclick outside of the dropdown */
    const actionOutsideDetectRef =  useRef(null);
    useDetectOutsideWrapper(actionOutsideDetectRef, () => setIsActive(false))

    const handleDropDownClick = (event) => {
        /* To Skip the parent pointer event */
        event.preventDefault();
        setIsActive(!isActive);
    }
    return(
        <div className="_dropdown" onClick={handleDropDownClick} ref={actionOutsideDetectRef}>
            <BsThreeDots className={`action_cell ${isActive ? 'active_dropdown' : 'action_cell_hover'}`} size={24} onClick={() => setIsActive(true)}/>
            {isActive &&
                <div className="_dropdown_contents">
                    <div className="_dropdown_content flexAlignCenterH" onClick={() => setIsActive(false)}>
                        <BsStar/><span className="ml10H">Mark as Favorite</span>
                    </div>
                    <div className="_dropdown_content flexAlignCenterH" onClick={() => setIsActive(false)}>
                        <BsArchive/><span className="ml10H">Archive</span>
                    </div>
                    <div className="_dropdown_content flexAlignCenterH" onClick={() => setIsActive(false)}>
                        <BsTrash/> <span className="ml10H">Delete</span>
                    </div>
                </div>
            }
        </div>
    )
}