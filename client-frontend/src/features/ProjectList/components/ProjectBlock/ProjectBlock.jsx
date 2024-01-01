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

    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRziyaJ8STRBFKemJca2_YulXUKSQSdgRqQ&usqp=CAU'

    return(
        <Link to={`/dashboard/visualizer/${project.name}`}
              className={`data_container ${isList ? 'listRow' : 'gridBlock'} overrideLinkH`}
              onClick={handleVisualiseProject}>
            <div>
                <img src={defaultImg} height="18" className="profile"/>
            </div>
            <div>
                <div className="name textBoldH">{project.name}</div>
                <p className="textSmallH">{project.description}</p>
            </div>
            <div>{project.addedOn}</div>
            <div>{project.priority}</div>
            <div>{project.noOfTasks}</div>
            <div>{project.status}</div>
            <div>{project.noOfBugs}</div>
            <div>*</div>
        </Link>
    )
}