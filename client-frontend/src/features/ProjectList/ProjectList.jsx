import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BsStar, BsStarFill,
         BsArchive, BsArchiveFill,
         BsCapslock, BsCapslockFill,
         BsFillGridFill, BsPencilSquare, BsTrash } from 'react-icons/bs';
 import { PiListBold } from "react-icons/pi";
import { IconBar, DropDown, SearchBar } from '../../components'
import ProjectBlock from './components/ProjectBlock/ProjectBlock'
import { Link, useNavigate } from 'react-router-dom'
import { usePath } from '../../shared/contexts/PathContext'
import { retrieveAllProjectsApi, deleteProjectApi } from '../../api/ProjectApiService.js'
import { formatDate } from '../../utils/AppUtils'
import { ReactComponent as NoDataSVG } from './NoDataSVG.svg'
import './ProjectList.css'

export default function ProjectList() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        refreshAndFormatProjects();
    }, [])

    async function refreshAndFormatProjects() {
        await retrieveAllProjectsApi()
            .then(data => {
                formatProject(data);
                setProjects(data);
            })
            .catch(error => {
                console.log(error)
                alert("Something went wrong check the console")
            });
    }

    function formatProject(projects) {
        const formatProject = (project) => {
            project['addedOn'] = formatDate(project['addedOn']);
            return project;
        }
        const formattedProjects = projects.map(project => formatProject(project))
        return formattedProjects;
    }

    const navigateTo = useNavigate();

    const handleEditAction = (projectId) => {
        if (projectId && projectId != null) {
            navigateTo(`/dashboard/projects/${projectId}`);
        }
    }

    const handleRemoveAction = (projectId) => {
        if (projectId && projectId != null) {
            deleteProjectApi(projectId)
                .then(success => refreshAndFormatProjects())
                .catch(error => console.log("can't delete or refresh projects", error));
        }
    }

    const actions = {
       edit: {
          icon: <BsPencilSquare/>,
          title: 'Edit',
          handleClick: handleEditAction
    }, favorite: {
          icon: <BsStar/>,
          title: 'Mark as Favorite',
    }, archive: {
          icon: <BsArchive/>,
          title: 'Archive'
    }, delete: {
          icon: <BsTrash/>,
          title: 'Remove',
          handleClick: handleRemoveAction
    }}

    const projectsCount = projects.length;
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
            {projects.length > 0  ?
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
                    { projects.map(project =>
                        <ProjectBlock project={project} isList={isList} actions={actions}/>)}
                </div>
                :  <div className="noContent_wrapper">
                       <div className="noDataContent">
                           <NoDataSVG height={300}/>
                           <div className="textAlignCenterH">
                               <h1>No Projects yet</h1>
                               <span>Once you add Projects, they'll show up here.</span>
                           </div>
                       </div>
                   </div>
            }
        </div>
    )
}