import { Formik, Form, Field } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePath } from '../../shared/contexts/PathContext'
import { ImagePreviewField, PrefixReplaceField } from './components'
import { Input, InputWrapper, InputWrapperSelectField } from '../../components'
import './ProjectForm.css'

const initialProject = {
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

    const [project, setProject] = useState(initialProject);

    const handleProjectFormChange = (event) => {
        const form = event.target;
    }

    const[profile, setProfile] = useState();
    /* need to manage in object after */
    const [rootPath, setRootPath] = useState('');
    const path = usePath();


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
                    <Formik>
                        <Form className="project_form_formik flexAlignStartH">
                            <div className="hov_formik_container">
                                <div className="flexAlignStartH">
                                    <div>
                                        <InputWrapper required={true} label="Name" description="Project name should be unique.">
                                            <Input type="text"/>
                                        </InputWrapper>
                                        <InputWrapperSelectField label="Folder" name='folder' required={true} className='field_dropdown'
                                                options="Public, Folder1, Folder2" description="Please make sure selected folder doesn't contain this project name"/>
                                    </div>
                                    <ImagePreviewField profile={profile} setProfile={setProfile} required={true}/>
                                </div>
                                <InputWrapper required={false} label="Description" description="Minimum length should be 100 characters.">
                                    <Input variant='textarea' className="field" rows="6" name="description"/>
                                </InputWrapper>
                                <Input name="addedOn" type="hidden"/>
                                <InputWrapperSelectField label="Status" name='status' required={false} className='fitContent'
                                            options="In-Progress, Completed, Give Up"/>
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