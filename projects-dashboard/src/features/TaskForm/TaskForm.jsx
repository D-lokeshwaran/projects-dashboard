import { MasterInput } from '../../components'
import './TaskForm.css'

export default function TaskForm() {
    return (
        <div className="task_form_container">
            <div className="task_form">
                <MasterInput name="title" label="Title" required/>
                <div className="actions">
                </div>
            </div>
        </div>
    )
}