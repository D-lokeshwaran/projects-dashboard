import styles from './header.module.css'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import ProfileThumbnail from './Profile/ProfileThumbnail'
import { useThemeContext } from '../../utils/ThemeContext'
import { Link, useLocation } from 'react-router-dom'
import dashboard from '../../package.json';
import { useState } from 'react';

const initialInfo = {
    primaryColor: 'white',
    secondaryColor: 'black',
    activeView: 'home'
}

export default function Header() {

    const themeContext = useThemeContext();
    const theme = themeContext.theme.toString();

    const[info, setInfo] = useState(initialInfo);
    const path = useLocation().pathname;

    const homeURL = "/projects-management/home";
    const projectsURL = "/projects-management/projects";

    return(
        <div className={styles.header}>
            <div className={styles.title}>
                <h2>{dashboard.dashboard.name}</h2>
            </div>
            <div className={styles.navLinksContainer}>
                <nav className={styles.navLinks}>
                    <NavLink name="Home" active={path === homeURL} path={homeURL}/>
                    <NavLink name="Projects" active={path.startsWith(projectsURL)} path={projectsURL}/>
                </nav>
            </div>
            <div className={styles.rightItems}>
                <SearchBar placeholder="Search" type="text"></SearchBar>
                <ProfileThumbnail/>
            </div>
        </div>
    )
}

function NavLink({ name, active, path }) {

    const Bottom = styled.span `
        ${active===true ? 'border-bottom: 2px solid blue' : ''};
        border-top-right-radius: 3px;
        padding: 13px 0px;
        span {
            transition: .5s;
            cursor: pointer;
            padding: 10px;
            span {
                ${active===true ? 'color: blue' : 'color: #606060'};
            }
            &:hover {
               span {
                   color: blue;
               }
            }
        }
    `;

    return (
        <Bottom><span>
                <Link to={path} className={styles.navLink}>
                    <span>{name}</span>
                </Link>
        </span></Bottom>
    )
}

const SearchBar = styled.input `
    height: 2em;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px;
    border: 2px solid #DFE1E6;
    width: 15rem;
    transition: all 0.5s ease 0s;
    direction: ltr;
    margin: 10px 12px;
    &:focus {
        outline: none;
        width: 40rem;
    }
`;