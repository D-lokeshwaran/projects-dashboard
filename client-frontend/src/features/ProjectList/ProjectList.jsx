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
import moment from 'moment';
import './ProjectList.css'

export default function ProjectList() {

    const projects = [{
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU',
        name: 'TestProject',
        description: 'Test Project Description',
        addedOn: moment().format('DD - MMM - YYYY'),
        tasks: 10,
        status: 'In-Progress'
    }, {
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU',
        name: 'TestProject2',
        description: 'Test Project Description 2',
        addedOn: moment().format('DD - MMM - YYYY'),
        tasks: 13,
        status: 'Completed'
    }, {
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU',
        name: 'TestProject3',
        description: 'Test Project Description 2',
        addedOn: moment().format('DD - MMM - YYYY'),
        tasks: 13,
        status: 'Completed'
    }, {
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU',
        name: 'TestProject4',
        description: 'Test Project Description 2',
        addedOn: moment().format('DD - MMM - YYYY'),
        tasks: 13,
        status: 'Completed'
    }];
    const projectsCount = 123;
    const iconsSize = 16;
    const folders = ["Practice", "40 Idea Projects", "Training"]
    const [isList, setIsList] = useState(true);

    const headers = ["", 'NAME & DESCRIPTION', 'ADDED ON', '# OF TASKS', 'STATUS', ''];

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