import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePath } from '../../shared/contexts/PathContext'
import { ImagePreviewField, PrefixReplaceField } from './components'
import { InputWrapper, MasterInput } from '../../components'
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
                <div className="flexAlignStartH">
                    <Link to="/dashboard/projects" className="back_btn overrideLinkH"
                          onClick={() => path.clearAndAddPath("projects")}>
                        <BsArrowLeft/>
                    </Link>
                    <h2 className="add_project_title">Add Project</h2>
                </div>
                <div className="project_form">
                    <Formik initialValues={initialValues}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}
                            validate={validateProject}>
                        <Form>
                            <div className="hov_formik_container">
                                <div className="project_details">
                                    <MasterInput type="text" name="name" label='Name' required placeholder="Project Name"/>
                                    <div className="flexAlignStartH">
                                        <MasterInput variant='select' label='Folder' name="folder" className='field_dropdown'
                                                children={optionsTest.map(o => <option>{o}</option>)} required wrapperClass="widthHalfH"/>
                                        <MasterInput variant='select' label='Priority' name="priority" className='widthFullH' wrapperClass="widthHalfH ml20H"
                                                children={"No, Low, Medium, High".split(', ').map(o => <option>{o}</option>)}/>
                                    </div>
                                    <PrefixReplaceField control={{ rootPath, setRootPath }} className="field" match='\s' replaceWith='/'/>
                                    <MasterInput variant='textarea' label='Description' name="description" rows='6' className="description_textarea"
                                                 placeholder="Describe about this project..."/>
                                    <MasterInput name="addedOn" type="hidden" variant='hidden'/>
                                </div>
                                <div className="tasks">
                                </div>
                            </div>
                            <div>
                                {/* for future; */}
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}