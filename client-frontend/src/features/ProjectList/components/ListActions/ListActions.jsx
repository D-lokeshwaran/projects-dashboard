import './ListActions.css';
import { BsThreeDots, BsStar, BsArchive, BsPencilSquare, BsTrash } from "react-icons/bs";
import { useState, useRef } from 'react'
import { useDetectOutsideWrapper } from '../../../../shared/hooks'
import { useNavigate } from 'react-router-dom'
import { deleteProjectApi } from '../../../../api/ProjectApiService'

export default function ListActions({ project, actions }) {

    const [ isActive, setIsActive ] = useState(false);

    /* Close dialog onclick outside of the dropdown */
    const actionOutsideDetectRef =  useRef(null);
    useDetectOutsideWrapper(actionOutsideDetectRef, () => setIsActive(false))

    const handleThreeDotClick = (event) => {
        /* To Skip the parent pointer event */
        event.preventDefault();
        setIsActive(!isActive);
    }

    const handleActionClick = (action, handleClick) => {
        setIsActive(false);
        if(handleClick && handleClick !== undefined) {
            handleClick(project.oid);
        }
    }

    return(
        <div className="_dropdown" onClick={handleThreeDotClick} ref={actionOutsideDetectRef}>
            <BsThreeDots className={`action_cell ${isActive ? 'active_dropdown' : 'action_cell_hover'}`} size={24} onClick={() => setIsActive(true)}/>
            {isActive &&
                <div className="_dropdown_contents">
                    { actions && Object.keys(actions).map(actionName => {
                            const action = actions[actionName]
                            return (
                            <div className="_dropdown_content flexAlignCenterH" onClick={() => handleActionClick(actionName, action.handleClick)}>
                                {action.icon}<span className="ml10H action_title">{action.title}</span>
                            </div>)
                        })
                    }
                </div>
            }
        </div>
    )
}