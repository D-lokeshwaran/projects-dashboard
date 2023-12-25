import { useState, useEffect } from 'react'
import { BsX, BsAppIndicator } from "react-icons/bs"
import styled from 'styled-components'
import { useRecord } from '../../hooks'
import './Visualizer.css';

export default function Visualizer() {

    const[records, add, clear] = useRecord('activeProjects');

    return (
        <div className="visualizer_module m10H">
            <div className="visualizer_container">
                <div className="multiple_tabs_container">
                    <div className="tab_actions">
                        <button onClick={() => clear()}>Close All Tabs</button>
                    </div>
                </div>
                <div className="visualizer">

                </div>
            </div>
        </div>
    )
}

function TabBar({title}) {

    const[selected, setSelected] = useState(false);

    const Tab = styled.div `
        span {
            padding-left: 5px;
            padding-right: 14px;
        }
    `;
    return (
        <Tab className={`tab ${selected && 'selected_tab'}`} onClick={() => setSelected(!selected)}>
            <BsAppIndicator/>
            <span>{title}</span>
            <BsX size="15" className="close_tab"/>
        </Tab>
    )
}