import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BsStar, BsStarFill,
         BsArchive, BsArchiveFill,
         BsCapslock, BsCapslockFill,
         BsFillGridFill } from 'react-icons/bs';
 import { PiListBold } from "react-icons/pi";
import { IconBar, DropDown, SearchBar } from '../../components'
import ProjectBlock from './components/ProjectBlock/ProjectBlock'
import { Link } from 'react-router-dom'
import { usePath } from '../../shared/contexts/PathContext'
import { retrieveAllProjectsApi } from '../../api/ProjectApiService.js'
import moment from 'moment';
import './ProjectList.css'

export default function ProjectList() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        refreshProjects();
    }, [])

    async function refreshProjects() {
        await retrieveAllProjectsApi()
            .then(data => setProjects(data))
            .catch(error => {
                console.log(error)
                alert("Something went wrong check the console")
            });
    }

    const projectsCount = 123;
    const iconsSize = 16;
    const folders = ["Practice", "40 Idea Projects", "Training"]
    const [isList, setIsList] = useState(true);

    const headers = ["", 'NAME & DESCRIPTION', 'ADDED ON', 'PRIORITY', '# OF TASKS', 'STATUS','# OF BUGS', ''];

    const path = usePath();

    return (
        <div className="project_container">
            <div className="header borderBBlack"> {/* flex */}
                <div className="flexAlignCenterH">
                    <div className="title">
                        Projects<span className="projects_count textSmallGreyH">&#0183;{projectsCount}</span>
                    </div>
                </div>
                <div className="action_bars flexAlignCenterH spaceAroundH">
                    <Link to="add-project" className="success_btnH overrideLinkH"
                          onClick={() => path.addPath("add-project")}>
                        Add Project
                    </Link>
                </div>
            </div>
            <div className={`collection ${isList && 'displayTableH'}`}>
                {isList &&
                    <tr className="list_header">
                        { headers.map(header =>
                             <th>
                                {header}
                                {header && <IconBar name="view" title={`Order by name`}
                                          sideEffort={false} checked={true} key={header}/>}
                             </th>)
                        }
                    </tr>
                }
                { projects.map(project => <ProjectBlock project={project} isList={isList}/>) }
            </div>
        </div>
    )
}