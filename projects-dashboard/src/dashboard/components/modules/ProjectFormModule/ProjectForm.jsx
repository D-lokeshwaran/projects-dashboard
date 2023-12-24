import { Formik, Form, Field } from 'formik'
import { DropDown } from '../components'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePath } from '../../../contexts/PathContext'
import './ProjectForm.css'

export default function ProjectForm() {

    const[profile, setProfile] = useState();
    const path = usePath();

    return(
        <div className="ptenH project_form_module">
            <Link to="/dashboard/projects" className="back_btn overrideLink"
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
                            <div>
                                <div className="flexAlignStartH">
                                    <div>
                                        <fieldset>
                                            <label className="required_field full_lengthField">Name</label>
                                            <input type="text" className="field"/>
                                            <small className="mb10H">Project name should be unique.</small>
                                        </fieldset>
                                        <fieldset>
                                            <label className="required_field">Folder</label>
                                            <select className="field field_dropdown">
                                                <option>folder1</option>
                                                <option>folder2</option>
                                                <option>folder3</option>
                                            </select>
                                            <small className="mb10H">Please make sure selected folder
                                            doesn't contain this project name.<br/> for more customize go to folders.</small>
                                        </fieldset>
                                    </div>
                                    <fieldset className="ml20H">
                                        <label className="required_field">Profile</label>
                                        <input type="file" className="field profile_field"/>
                                    </fieldset>
                                </div>
                                <fieldset>
                                    <label>Description</label>
                                    <textarea className="field" rows="6"/>
                                    <small className="mb10H">Minimum length should be 100 characters.</small>
                                </fieldset>
                                <fieldset>
                                    <label>Status</label>
                                    <select className="field field_dropdown fitContent">
                                        <option>In-Progress</option>
                                        <option>Completed</option>
                                        <option>Give Up</option>
                                    </select>
                                </fieldset>
                                <fieldset className="full_lengthField">
                                    <label className="required_field">Project Root Component Path</label>
                                    <input type="text" className="field"/>
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