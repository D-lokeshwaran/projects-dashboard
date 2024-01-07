import './PriorityDropDown.css'
import { InputWrapper } from '../../../../components'
import { BsPlus } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react';
import { BsFillFlagFill, BsFlag, BsCheck, BsFillCaretUpFill, BsChevronDown } from "react-icons/bs";
import { useField, useFormikContext } from 'formik';
import { useDetectOutsideWrapper } from '../../../../shared/hooks'
import Select from 'react-select'

PriorityDropDown.defaultProps = {
    contents: [0, 1, 2]
}

export default function PriorityDropDown({ contents, ...props }) {

    const[isActive, setIsActive] = useState(false);
    const[selected, setSelected] = useState({color: 'Green', name: "Normal"});
    const [field, meta, helpers] = useField(props); // is to retrieve value from formik
    const { setFieldValue } = useFormikContext(); // load value into formik

    const priorityLevels = [{color: 'Red', name: "Most Important"}, {color: '#ff7200', name: "Important"},
            {color: 'Green', name: "Normal"}, {color: 'grey', name: "Simple/Basic"}]; //TODO: need to change Low => Normal

    useEffect(() => {
        const storedPriority = field.value;
        if ( storedPriority ) {
            priorityLevels.map(pr => {
                if (pr.name === storedPriority) {
                    setSelected(pr);
                }
            })
        }
    }, []);

    const ref = useRef(null);
    useDetectOutsideWrapper(ref, () => setIsActive(false))

    const handleClick = (priority) => {
        setIsActive(false);
        setSelected(priority);
        /* Description about setFieldValue
           setFieldValue(field: string, value: any, shouldValidate?: boolean) */
        setPriority(priority.name);
    }

    const setPriority = (priority) => setFieldValue(props['name'], priority, false)

    const [priorityLevel, setPriorityLevel] = useState(2);

     return (
        <InputWrapper label='Priority' className="widthHalfH">
            <div className="priority_dropdown">
                 <div className="priority_selected flexAlignCenterH" ref={ref} tabIndex='0' onClick={() => setIsActive(!isActive)}>
                     <div className="flexAlignCenterH priority_selected_content">
                        <BsFillFlagFill size={15} style={{color: selected.color}}/>
                        <span className="ml10H">{selected.name}</span>
                     </div>
                     <BsChevronDown className="ml5H"/>
                </div>
                {isActive && <div className="priorities">
                    {priorityLevels.map(pr =>
                        <span className="priority flexAlignCenterH spaceBetweenH" onClick={() => handleClick(pr)}>
                            <div className="flexAlignCenterH">
                                <BsFillFlagFill size={15} style={{color: pr.color}}/>
                                <span className="priority_name">{pr.name}</span>
                            </div>
                            {selected.color === pr.color && <BsCheck size={15} style={{color: 'blue'}}/>}
                        </span>
                    )}
                </div>
                }
             </div>
         </InputWrapper>

     )
}