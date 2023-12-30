import { MasterInput } from '../../components'
import { Link } from 'react-router-dom'
import './TaskForm.css'

export default function TaskForm({ closeDialog }) {
    console.log(closeDialog);
    return (
        <div className="task_form_container">
            <form className="task_form">
                <MasterInput name="title" label="Title" required/>
                <div className="widthFullH flexAlignCenterH">
                    <MasterInput name="startDate" label="Start Date" required type="date" wrapperClass="widthHalfH"/>
                    <MasterInput name="endDate" label="End Date" required type="date" wrapperClass="widthHalfH ml20H"/>
                </div>
                <MasterInput name="status" label="status" variant="select"
                            children={<><option>In-progress</option><option>Completed</option><option>Rejected</option></>}/>
                <div className="actions mt20H">
                    <button className="success_btnH"><Link to="/tasks/create" className="overrideLinkH">Create Task</Link></button>
                    <button className="secondary_btnH ml20H" onClick={closeDialog} type="button">cancel</button>
                </div>
            </form>
        </div>
    )
}