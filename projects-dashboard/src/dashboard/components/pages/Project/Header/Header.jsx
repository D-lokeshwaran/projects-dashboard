import styled from 'styled-components'
import { BsSearch,
         BsStar,
         BsStarFill,
         BsArchive,
         BsArchiveFill,
         BsFillGridFill, BsList } from 'react-icons/bs';
import { IconBar, DropDown } from '../components'
import { useState } from 'react';
import './Header.css';

export default function Header() {

    const projectsCount = 123;
    const iconsSize = 16;
    const folders = ["Practice", "40 Idea Projects", "Training"]

    return(
        <div className="header borderBBlack"> {/* flex */}
            <div className="title">
                Projects<span className="projects_count textSmallGreyH">&#0183;{projectsCount}</span>
            </div>
            <div className="search_bar flexAlignCenterH ml20H">
                <BsSearch size={iconsSize}/>
                <input type="text" className="search_input overrideInputH" placeholder="Search Projects..."/>
            </div>
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
    )
}