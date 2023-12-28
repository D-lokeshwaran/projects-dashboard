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
            <Link to="/dashboard/projects" className="back_btn overrideLinkH"
                  onClick={() => path.clearAndAddPath("projects")}>
                <BsArrowLeft/>
            </Link>
            <div className="project_form_container">
                <div className="project_form">
                    <div className="project_form_title">
                        Add Project
                    </div>
                    <Formik initialValues={initialValues}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}
                            validate={validateProject}>
                        <Form className="project_form_formik flexAlignStartH">
                            <div className="hov_formik_container">
                                <div className="flexAlignStartH">
                                    <div>
                                        <MasterInput type="text" name="name" label='Name' description="Please provide unique Name." required/>
                                        <MasterInput variant='select' label='Folder' name="folder" className='field_dropdown'
                                                description="Please make sure selected folder doesn't contain this project name"
                                                children={optionsTest.map(o => <option>{o}</option>)} required/>
                                    </div>
                                    <ImagePreviewField profile={profile} setProfile={setProfile} required={true}/>
                                </div>
                                <MasterInput variant='textarea' label='Description' name="description" className=''
                                        description="Minimum length should be 100 characters." rows="6"/>
                                <MasterInput name="addedOn" type="hidden" variant='hidden'/>
                                <MasterInput variant='select' label='Status' name="status" className='fitContent'
                                        children={"In-Progress, Completed, Give Up".split(', ').map(o => <option>{o}</option>)}/>
                                <PrefixReplaceField control={{ rootPath, setRootPath }} className="field" match='\s' replaceWith='/'/>
                                <div className="tasks">
                                </div>
                            </div>
                            <div>
                                {/* for future; */}
                            </div>
                        </Form>
                    </Formik>
                    <div className="project_form_actions">
                        <button className="actionSuccessH">Add</button>
                        <Link to="/dashboard/projects" className="ptenH ml20H">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}