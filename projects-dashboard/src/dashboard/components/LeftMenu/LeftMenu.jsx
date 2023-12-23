import './LeftMenu.css'
import { Link, useLocation } from 'react-router-dom'
import { usePath } from '../../contexts/PathContext'
/* These are al svg React components imported from resources/svg index.js */
import { FaLayerGroup } from 'react-icons/fa'
import { BsHouseDoor, BsFolder2Open, BsDisplay } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

export default function DBLeftMenu() {

    const pathNav = usePath();

    const homeNavBar = {
        title: "Home",
        path: "/dashboard/home",
        svg: BiHome
    }
    const projectsNavBar = {
        title: "Projects",
        path: "/dashboard/projects",
        svg: BsFolder2Open
    }
    const visualizeNavBar = {
        title: "Visualizer",
        path: "/dashboard/visualizer",
        svg: BsDisplay
    }

    return (
        <div className="dashboard_leftMenu containerH">
            <div className="containerH">
                <div className="leftMenu_header tableRowH flexAlignCenterH">
                    <span className="header_logo tableCellH">
                        <FaLayerGroup size="20"/>
                    </span>
                    <span className="header tableCellH">
                        <b>My Projects</b><br/> <small>Dashboard</small>
                    </span>
                </div>
                <div className="leftMenu_navLinks">
                    <NavBar navBarInfo={homeNavBar} onClick={() => pathNav.clearPath()}/>
                    <NavBar navBarInfo={projectsNavBar}
                            onClick={() => pathNav.clearAndAddPath("projects")}/>
                    <NavBar navBarInfo={visualizeNavBar}
                            onClick={() => pathNav.clearAndAddPath("visualize")}/>
                </div>
            </div>
        </div>
    )
}

function NavBar({ navBarInfo, onClick }) {

    const param = useLocation().pathname;

    return (
        <Link to={navBarInfo.path} className="overrideLink" onClick={onClick}>
            <div className={`navBar ${param.startsWith(navBarInfo.path) ? "selectedNavBar" : "navBar_hover"}`}>
                <span className="navBar_logo">
                    <navBarInfo.svg size="20" style={{marginTop: '2px'}}/> {/* This will load the svg for us */}
                </span>
                <span className="navBar_name">{navBarInfo.title}</span>
            </div>
        </Link>
    )
}
