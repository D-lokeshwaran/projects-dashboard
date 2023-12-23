import styled from 'styled-components';
import { useState } from 'react';
import { BsStar, BsStarFill,
         BsArchive, BsArchiveFill,
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

    return (
        <div className="project_container">
            <div className="header borderBBlack"> {/* flex */}
                <div className="title">
                    Projects<span className="projects_count textSmallGreyH">&#0183;{projectsCount}</span>
                </div>
                <SearchBar iconsSize={iconsSize}/>
                <div className="action_bars flexAlignCenterH">
                    <DropDown name="FOLDER" contents={folders} onHover={false} className="mr20H"/>
                    <div className="col_customize_bars flexAlignCenterH ml20H">
                        <div className="filters flexAlignCenterH">
                            <small><b>FILTER BY:</b></small>
                            <IconBar name="favorite" beforeSelected={<BsStar size={iconsSize}/>} afterSelected={<BsStarFill size={iconsSize}/>}
                                     className="ml10H"/>
                            <IconBar name="archive" beforeSelected={<BsArchive size={iconsSize}/>} afterSelected={<BsArchiveFill size={iconsSize}/>}/>
                        </div>
                    </div>
                    <div className="views flexAlignCenterH ml10H" onClick={() => setIsList(!isList)}>
                        <span className="textSmallBold">VIEW:</span>
                        <IconBar name="view" beforeSelected={<PiListBold size={iconsSize} title="List View"/>}
                                 afterSelected={<BsFillGridFill size={iconsSize} title="Grid View"/>}/>
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
                        <th></th>
                        <th>NAME &#38; DESCRIPTION</th>
                        <th>ADDED ON</th>
                        <th>&#35; OF TASKS</th>
                        <th>STATUS</th>
                        <th></th>
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