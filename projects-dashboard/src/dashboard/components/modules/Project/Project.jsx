import styled from 'styled-components';
import { useState } from 'react';
import { BsStar, BsStarFill,
         BsArchive, BsArchiveFill,
         BsCapslock, BsCapslockFill,
         BsFillGridFill } from 'react-icons/bs';
 import { PiListBold } from "react-icons/pi";
import { IconBar, DropDown, SearchBar } from '../components'
import moment from 'moment';
import './Project.css'

export default function Project() {

    const project = {
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU',
        name: 'Test Project',
        description: 'Test Project Description',
        addedOn: moment().format('DD - MMM - YYYY'),
        tasks: 10,
        status: 'In-active'
    };
    const projectsCount = 123;
    const iconsSize = 16;
    const folders = ["Practice", "40 Idea Projects", "Training"]
    const [isList, setIsList] = useState(true);

    const headers = ["", 'NAME & DESCRIPTION', 'ADDED ON', '# OF TASKS', 'STATUS', ''];

    return (
        <div className="project_container">
            <div className="header borderBBlack"> {/* flex */}
                <div className="title">
                    Projects<span className="projects_count textSmallGreyH">&#0183;{projectsCount}</span>
                </div>
                <SearchBar iconsSize={iconsSize}/>
                <div className="action_bars flexAlignCenterH">
                    <DropDown name="FOLDER" contents={folders} onHover={true} className="mr20H"/>
                    <div className="col_customize_bars flexAlignCenterH ml20H">
                        <div className="filters flexAlignCenterH">
                            <small><b>FILTER BY:</b></small>
                            <IconBar name="favorite" beforeSelected={<BsStar size={iconsSize}/>} afterSelected={<BsStarFill size={iconsSize}/>}
                                     className="ml10H" title="Filter by Favorites"/>
                            <IconBar name="archive" beforeSelected={<BsArchive size={iconsSize}/>}
                                     afterSelected={<BsArchiveFill size={iconsSize}/>} title="Filter by Archived"/>
                        </div>
                    </div>
                    <div className="views flexAlignCenterH ml10H" onClick={() => setIsList(!isList)}>
                        <span className="textSmallBold">VIEW:</span>
                        <IconBar name="view" beforeSelected={<PiListBold size={iconsSize}/>}
                                 afterSelected={<BsFillGridFill size={iconsSize}/>} title={`Toggle to ${isList ? 'Grid' : 'List'} View.`}/>
                    </div>
                    <div className="add_project ml20H">
                        <button className="actionSuccessH userSelectNone">
                            Add Project
                        </button>
                    </div>
                </div>
            </div>
            <div className={`collection ${isList && 'displayTableH'}`}>
                {
                    isList &&
                    <tr className="list_header">
                        {
                            headers.map(header => <th>{header}{header && <IconBar name="view" beforeSelected={<BsCapslock/>}
                               afterSelected={<BsCapslockFill/>} title={`Order by name`} sideEffort={false} checked={true}/>}</th>)
                        }
                    </tr>
                }
                <div className={`data_container ${isList ? 'listRow' : 'gridBlock'}`}>
                    <div>
                        <img src={project.profile} height="18" className="profile"/>
                    </div>
                    <div>
                        <div className="name textBoldH">{project.name}</div>
                        <p className="textSmallH">{project.description}</p>
                        </div>
                    <div>{project.addedOn}</div>
                    <div>{project.tasks}</div>
                    <div>{project.status}</div>
                    <div>*</div>
                </div><div className={`data_container ${isList ? 'listRow' : 'gridBlock'}`}>
                    <div>
                        <img src={project.profile} height="18" className="profile"/>
                    </div>
                    <div>
                        <div className="name textBoldH">{project.name}</div>
                        <p className="textSmallH">{project.description}</p>
                        </div>
                    <div>{project.addedOn}</div>
                    <div>{project.tasks}</div>
                    <div>{project.status}</div>
                    <div>*</div>
                </div><div className={`data_container ${isList ? 'listRow' : 'gridBlock'}`}>
                    <div>
                        <img src={project.profile} height="18" className="profile"/>
                    </div>
                    <div>
                        <div className="name textBoldH">{project.name}</div>
                        <p className="textSmallH">{project.description}</p>
                        </div>
                    <div>{project.addedOn}</div>
                    <div>{project.tasks}</div>
                    <div>{project.status}</div>
                    <div>*</div>
                </div>
            </div>
        </div>
    )
}

function ProjectRow({info}) {
    return(
        <tr className="list_projects">
            {
                Object.keys(info).map(key => <td>{info[key]}, </td>)
            }
        </tr>
    )
}