import './PriorityDropDown.css'
import { DropDown } from '../../../../components'
import { BsPlus } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react';
import { BsFillFlagFill, BsFlag, BsCheck } from "react-icons/bs";
import { useField, useFormikContext } from 'formik';
import { useDetectOutsideWrapper } from '../../../../shared/hooks'

PriorityDropDown.defaultProps = {
    contents: [0, 1, 2]
}

export default function PriorityDropDown({ contents, ...props }) {

    const propertyName = useRef(props.name);
    const[isActive, setIsActive] = useState(false);
    const[selectedColor, setSelectedColor] = useState('Green');
    const [field, meta, helpers] = useField(props); // is to retrieve value from formik
    const { setFieldValue } = useFormikContext(); // load value into formik

    const priorityLevels = [{color: 'Red', name: "High"}, {color: '#ff7200', name: "Medium"},
            {color: 'Green', name: "Normal"}, {color: 'grey', name: "No"}]; //TODO: need to change Low => Normal

    useEffect(() => {
        const storedPriority = field.value;
        if ( storedPriority ) {
            priorityLevels.map(pr => {
                if (pr.name === storedPriority) {
                    setSelectedColor(pr.color);
                }
            })
        }
    }, []);

    const ref = useRef(null);
    useDetectOutsideWrapper(ref, () => setIsActive(false))

    const handleClick = (priority) => {
        setIsActive(false);
        setSelectedColor(priority.color);
        /* Description about setFieldValue
           setFieldValue(field: string, value: any, shouldValidate?: boolean) */
        setPriority(priority.name);
    }

    const setPriority = (priority) => setFieldValue(props['name'], priority, false)

     return (
         <div className="flexAlignCenterH ml10H priority_dropdown">
             <div className="priority_selected" tabIndex='0' ref={ref} style={{border: `1px dashed ${selectedColor}`}} onClick={() => setIsActive(!isActive)}>
                 <BsFillFlagFill size={15} style={{color: selectedColor}}/>
            </div>
            {isActive == true &&
                <div className="priorities">
                    {priorityLevels.map(pr =>
                        <span className="priority flexAlignCenterH spaceBetweenH" onClick={() => handleClick(pr)}>
                            <div className="flexAlignCenterH">
                                <BsFillFlagFill size={15} style={{color: pr.color}}/>
                                <span className="priority_name">{pr.name}</span>
                            </div>
                            {selectedColor === pr.color && <BsCheck size={15} style={{color: 'blue'}}/>}
                        </span>
                    )}
                </div>
            }
         </div>
     )
}