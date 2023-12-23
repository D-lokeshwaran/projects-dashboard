import './Project.css'
import styled from 'styled-components';
import { useState } from 'react';
import Header from './Header/Header'

const hardCodedProjects = [
    {
        profile: '',
        name: 'Test Project',
        description: 'Test Project Description',
        addedOn: '20/12/23',
        tasks: 10,
        status: true
    }
]

export default function Project() {

    return (
        <div className="project_container ptenH">
            <Header/>
            <table className="collection">
                <tr className="order_by">
                    <th>NAME & DESCRIPTION</th>
                    <th>ADDED ON</th>
                    <th># OF TASKS</th>
                    <th>STATUS</th>
                </tr>
                <tr className="list_projects">
                    {
                        hardCodedProjects.map(project => <ProjectRow info={project}/>)
                    }
                </tr>
            </table>
        </div>
    )
}

function ProjectRow({info}) {
    return(
        <tr>
            {
            }
        </tr>
    )
}