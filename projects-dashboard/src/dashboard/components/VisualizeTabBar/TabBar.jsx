import React from 'react'
import { BsX, BsAppIndicator } from "react-icons/bs"
import './TabBar.css'

export default class TabBar extends React.Component {

    render() {
        const activeIndex = this.props.activeIndex;
        const index = this.props.index;
        const title = this.props.title;
        const setActiveIndex = this.props.setActiveIndex;

        return(
            <span className={`tab ${activeIndex == index && 'selected_tab'}`}
                 onClick={() => setActiveIndex(index)} key={title}>
                <BsAppIndicator/>
                <span className="align_tab_title">{title}</span>
                <BsX size="15" className="close_tab"/>
            </span>
        )
    }

}