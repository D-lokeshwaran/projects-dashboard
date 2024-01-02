import './FormikProjectForm.css'
import { useFormik } from 'formik'
import TaskForm from '../../../TaskForm/TaskForm.jsx'
import { MasterInput, ShowDialog, CaptionTable } from '../../../../components'
import { usePath } from '../../../../shared/contexts/PathContext'
import { ImagePreviewField,
         PrefixReplaceField,
         AdditionalDexter,
         PriorityDropDown } from '../'
import moment from 'moment'
import { Link } from 'react-router-dom'

const initialValues = {
    name: '',
    folder: '',
    priority: '',
    addedOn: moment().format('DD - MMM - YYYY'),
    status: '',
    rootPath: '',
    description: '',
}

const validateProject = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Please enter project name"
    } else if (values.name && values.name.length < 5) {
        errors.name = "Name should be greater than 5 letters"
    }
    if (!values.rootPath) {
        errors.rootPath = "Please enter root path."
    }
    return errors;
}

export default function FormikProjectForm() {

    const path = usePath();

    const projectFormik = useFormik({
        initialValues,
        validateProject,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <form className="hov_formik_container" onSubmit={projectFormik.handleSubmit}>
            <div className="project_form_header flexAlignCenterH spaceBetweenH">Project
                <PriorityDropDown name="priority"/>
            </div>
            <div className=" flexAlignStartH spaceBetweenH">
                <div className="project_details">
                    <MasterInput type="text" name="name" label='Name' placeholder="Project Name" requiredField />
                    <MasterInput variant='select' label='Folder' name="folder"
                            children={['fl1', 'fl2'].map(o => <option>{o}</option>)}/>

                    <PrefixReplaceField className="field" match='\s' replaceWith='/'/>
                    <MasterInput variant='textarea' label='Description' name="description" rows='8' cols="40" className="description_textarea"
                                 placeholder="Describe about this project..."/>
                </div>
                <div className="dummy_wrapper additional_features">
                    <AdditionalDexter task={{title: 'Tasks', dialog: {title:'Create Task',  content: <TaskForm/>},
                                captions: [{title: 'Test Task 1', startDate: '02/12/23', endDate: '02/12/23', status: 'In-Progress'}] }}
                                    bugs={{title: 'Bugs', dialog:{title: 'Create Bug', content: <TaskForm/>}, disable: true,
                                captions: [{name: 'Default status should be In-Progress', foundedAt: '1/1/24', status: 'In Progress'}]}}/>
                </div>
            </div>
            <div className="form_actions">
                <Link to="/dashboard/projects" className="secondary_btnH overrideLinkH"
                        onClick={() => path.clearAndAddPath("projects")}>Cancel</Link>
                <button className="success_btnH m10H" type="submit">Add Project</button>
            </div>
        </form>
    )
}

