import { BsX, BsAppIndicator } from "react-icons/bs"
import './TabBar.css'

const TabBar = ({ title, activeIndex, setActiveIndex, index, handleRemoveProject}) => {

    return(
        <div className={`tab_container ${activeIndex == index ? 'selected_tab' : ''}`} key={title}>
            <span className="tab" onClick={() => setActiveIndex(index)}>
                <BsAppIndicator/>
                <span className="align_tab_title" >{title}</span>
            </span>
            <BsX size="15" className="close_tab" onClick={() => handleRemoveProject(index)}/>
        </div>
    )
}

export default TabBar;