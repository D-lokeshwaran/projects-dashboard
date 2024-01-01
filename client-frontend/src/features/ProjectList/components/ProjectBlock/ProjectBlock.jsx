import { Link } from 'react-router-dom'
import { usePath } from '../../../../shared/contexts/PathContext'
import { useRecord, useLocalStorage } from '../../../../shared/hooks'
import { useState, useEffect } from 'react'
import './ProjectBlock.css'

export default function ProjectBlock({project, isList}) {

    const path = usePath();

    const[projects, setProjects] = useState([]);
    const [record, addRecord] = useRecord('activeProjects');
    const [setItem] = useLocalStorage('active');

    const handleVisualiseProject = () => {
        path.addPath(project.name.replace(' ', '-'));
        addRecord(project.name);
        setItem(project.name);
    }

    return(
        <Link to={`/dashboard/visualizer/${project.name}`}
              className={`data_container ${isList ? 'listRow' : 'gridBlock'} overrideLinkH`}
              onClick={handleVisualiseProject}>
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
        </Link>
    )
}