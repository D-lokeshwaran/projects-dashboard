import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft, BsPlusCircle, BsCircle, BsCheck2Circle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePath } from '../../shared/contexts/PathContext'
import { ImagePreviewField, PrefixReplaceField } from './components'
import { InputWrapper, MasterInput, ShowDialog, CaptionTable } from '../../components'
import './ProjectForm.css'

const initialValues = {
    name: '',
    folder: '',
    profile: '',
    description: '',
    addedOn: moment().format('DD - MMM - YYYY'),
    status: '',
    rootPath: '',
    tasks: [{}],
}

export default function ProjectForm() {

    const [project, setProject] = useState(initialValues);
    const [show, setShow] = useState(false);

    const handleProjectFormChange = (event) => {
        const form = event.target;
    }

    const[profile, setProfile] = useState();
    /* need to manage in object after */
    const [rootPath, setRootPath] = useState('');
    const path = usePath();

    const validateProject = (values) => {
        const errors = {};
        if(!values.name) {
            errors.name = 'Please Enter Project Name';
        }
        return errors;
    }

    const optionsTest = ['Default', 'Folder1', 'Folder2'];
    const handleSubmit = (values) => {
        alert(values, null, 2);
    }

    return(
        <div className="ptenH project_form_module">
            <div className="project_form_container">
                <div className="project_form">
                    <Formik initialValues={initialValues}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}
                            validate={validateProject}>
                        <Form className="hov_formik_container">
                            <h2 className="add_project_title">Add Project</h2>
                            <div className=" flexAlignStartH spaceBetweenH">
                                <div className="project_details">
                                    <MasterInput type="text" name="name" label='Name' required placeholder="Project Name"/>
                                    <div className="flexAlignStartH">
                                        <MasterInput variant='select' label='Folder' name="folder" className='field_dropdown'
                                                children={optionsTest.map(o => <option>{o}</option>)} required wrapperClass="widthHalfH"/>
                                        <MasterInput variant='select' label='Priority' name="priority" className='widthFullH' wrapperClass="widthHalfH ml20H"
                                                children={"No, Low, Medium, High".split(', ').map(o => <option>{o}</option>)}/>
                                    </div>
                                    <PrefixReplaceField control={{ rootPath, setRootPath }} className="field" match='\s' replaceWith='/'/>
                                    <MasterInput variant='textarea' label='Description' name="description" rows='6' cols="40" className="description_textarea"
                                                 placeholder="Describe about this project..."/>
                                    <MasterInput name="addedOn" type="hidden" variant='hidden'/>
                                </div>
                                <div className="dummy_wrapper">
                                    <CaptionTable captions={[{task: 'Need to implement backyard practice', date:'12/12/23'}, {task: 'task2', date:'12/11/23'}]}/>
                                </div>
                                {show && <ShowDialog title="Create Task" content={
                                              <div>Welcome ME</div>

                                          } handleClose={() => setShow(false)}/>}
                            </div>
                            <div className="form_actions">
                                <Link to="/dashboard/projects" className="secondary_btnH overrideLinkH"
                                        onClick={() => path.clearAndAddPath("projects")}>Cancel</Link>
                                <button className="success_btnH" type="submit">Add Project</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

function TaskRow({task, date}) {

    return (
        <div className="task flexAlignStartH verticalTopH tableRowH">
            <BsCircle className="ml10H"/>
            <span className="tableCellH task_cell">{task}</span>
            <span className="tableCellH task_cell">{date}</span>
        </div>
    )
}