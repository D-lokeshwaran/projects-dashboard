import { useLocation } from 'react-router-dom'
import { usePath } from '../../shared/contexts/PathContext'
import { SearchBar } from '../../components'
import { FaLayerGroup } from 'react-icons/fa'
import './Header.css';

export default function Header() {

    const paths = usePath().path;

    return (
        <div className="header_container">
            <div className="wrapper flexAlignCenterH">
                <div className="leftMenu_header flexAlignCenterH">
                    <span className="header_logo">
                        <FaLayerGroup size="20"/>
                    </span>
                    <span className="left_menu_header">
                        <span>My Projects</span>
                    </span>
                </div>
                <SearchBar placeholder="Search..." className="ml40H"/>
            </div>
            <div className="user_profile ptenH">
                 <div className="thumbnail">

                 </div>
                 <div className="name">

                 </div>
            </div>
        </div>
    )
}