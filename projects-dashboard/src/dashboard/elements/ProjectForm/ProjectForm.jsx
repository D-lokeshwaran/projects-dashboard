import { Formik, Form, Field } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePath } from '../../contexts/PathContext'
import './ProjectForm.css'

const initialProject = {
    profile: '',
    name: '',
    description: '',
    addedOn: moment().format('DD - MMM - YYYY'),
    tasks: 0,
    status: ''
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

    const handlePathChange = (event) => {
        let value = event.target.value;
        const lastIndex = value.length -1;
        if(value.charAt(lastIndex).match(/\s/g)) {
            value = value.replaceAll(' ', '');
            value = value.concat('/');
        }
        setRootPath(value);
    }

    const handleImagePreview = (event) => {
        var reader = new FileReader();
        reader.onload = function(event) {
            setProfile(reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);
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
                    <Formik>
                        <Form className="project_form_formik flexAlignStartH">
                            <div className="hov_formik_container">
                                <div className="flexAlignStartH">
                                    <div>
                                        <fieldset>
                                            <label className="required_field full_lengthField">Name</label>
                                            <Field type="text" className="field"/>
                                            <small className="mb10H">Project name should be unique.</small>
                                        </fieldset>
                                        <fieldset>
                                            <label className="required_field">Folder</label>
                                            <Field as='select' className="field field_dropdown">
                                                <option>folder1</option>
                                                <option>folder2</option>
                                                <option>folder3</option>
                                            </Field>
                                            <small className="mb10H">Please make sure selected folder
                                            doesn't contain this project name, for more customize go to folder settings.</small>
                                        </fieldset>
                                    </div>
                                    <fieldset className="ml20H">
                                        <label className="required_field">Profile</label>
                                        <label className="field profile_label" for={`${profile == null && 'profile'}`}>
                                            {profile == null ? <div>Drop your profile</div>
                                              : <img src={profile} className="preview" height="100" alt="Profile Preview"/>
                                            }
                                        </label>
                                        <Field type="file" id="profile" hidden accept="image/*"/>
                                    </fieldset>
                                </div>
                                <fieldset>
                                    <label>Description</label>
                                    <Field as="textarea" className="field" rows="6"/>
                                    <small className="mb10H">Minimum length should be 100 characters.</small>
                                </fieldset>
                                <fieldset>
                                    <label>Status</label>
                                    <Field as='select' className="field field_dropdown fitContent">
                                        <option>In-Progress</option>
                                        <option>Completed</option>
                                        <option>Give Up</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="full_lengthField">
                                    <label className="required_field">Project Root Component Path</label>
                                    <div className="field flexAlignCenterH widthMax">
                                        <span style={{color: 'grey'}}>src/projects/</span>
                                        <Field type="text" className="overrideInputH root_path_field"
                                               onChange={handlePathChange} value={rootPath}/>
                                    </div>
                                    <small className="mb10H">
                                        Provide project root component path, Initial path starts with <code>src/projects</code>
                                        , After entered path wait until the verification complete.
                                    </small>
                                </fieldset>
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