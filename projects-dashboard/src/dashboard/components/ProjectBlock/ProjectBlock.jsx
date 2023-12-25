import { Link } from 'react-router-dom'
import { usePath } from '../../contexts/PathContext'
import './ProjectBlock.css'

export default function ProjectBlock({project, isList}) {

    const path = usePath();
    return(
        <Link to={`/dashboard/visualizer/${project.name}`} className={`data_container ${isList ? 'listRow' : 'gridBlock'} overrideLinkH`}
              onClick={() => path.addPath(project.name.replace(' ', '-'))}>
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