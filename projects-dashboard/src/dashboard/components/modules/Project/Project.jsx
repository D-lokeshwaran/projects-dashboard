import './Project.css'
import styled from 'styled-components';
import { useState } from 'react';
import { BsStar, BsStarFill,
         BsArchive, BsArchiveFill,
         BsFillGridFill, BsList } from 'react-icons/bs';
import { IconBar, DropDown, SearchBar } from '../components'

export default function Project() {

    const project = {
        profile: '',
        name: 'Test Project',
        description: 'Test Project Description',
        addedOn: '20/12/23',
        tasks: 10,
        status: 'In-active'
    };
    const projectsCount = 123;
    const iconsSize = 16;
    const folders = ["Practice", "40 Idea Projects", "Training"]

    return (
        <div className="project_container ptenH">
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
                    <div className="views flexAlignCenterH ml10H">
                        <span className="textSmallBold">VIEW:</span>
                        <IconBar name="view" beforeSelected={<BsList size={iconsSize} title="List View"/>}
                                 afterSelected={<BsFillGridFill size={iconsSize} title="Grid View"/>}/>
                    </div>
                    <div className="add_project ml20H">
                        <button className="actionSuccessH userSelectNone">
                            Add Project
                        </button>
                    </div>
                </div>
            </div>
            <table className="list">
                <thead>
                    <tr className="list_header order_by">
                        <th>NAME &#38; DESCRIPTION</th>
                        <th>ADDED ON</th>
                        <th>&#35; OF TASKS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="list_row ptenH">
                        <td>
                            NAME: {project.name}<br/>
                            Description: {project.name}
                        </td>
                        <td>{project.addedOn}</td>
                        <td>{project.tasks}</td>
                        <td>{project.status}</td>
                    </tr>
                </tbody>
            </table>
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