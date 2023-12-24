import styled from 'styled-components';
import { Formik, Form, Field } from 'formik'
import { DropDown } from '../components'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './ProjectForm.css'

const Fieldset = styled.fieldset `
    outline: none;
    border: none;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    label {
        font-weight: bold;
        font-size: .8rem;
    }
`;

export default function ProjectForm() {
    return(
        <div className="ptenH project_form_module">
            <Link to="/dashboard/projects" className="back_btn overrideLink">
                <BsArrowLeft/>
            </Link>
            <div className="project_form_container">
                <div className="project_form">
                    <div className="project_form_title">
                        Add Project
                    </div>
                    <Formik>
                        <Form className="project_form_formik">
                            <div className="flexAlignCenterH">
                                <Fieldset>
                                    <label className="required_field">Name</label>
                                    <input type="text" className="field"/>
                                </Fieldset>
                                <Fieldset>
                                    <label className="required_field">Profile</label>
                                    <input type="file" className="field"/>
                                </Fieldset>
                            </div>
                            <Fieldset>
                                <label className="required_field">Folder</label>
                                <select className="field field_dropdown">
                                    <option>folder1</option>
                                    <option>folder2</option>
                                    <option>folder3</option>
                                </select>
                            </Fieldset>
                            <Fieldset>
                                <label>Description</label>
                                <textarea className="field"/>
                            </Fieldset>
                            <Fieldset>
                                <label>Status</label>
                                <select className="field field_dropdown">
                                    <option>In-Progress</option>
                                    <option>Completed</option>
                                    <option>Give Up</option>
                                </select>
                            </Fieldset>
                            <Fieldset>
                                <label className="required_field">Project Path</label>
                                <input type="text" size="30" className="field"/>
                            </Fieldset>
                            <div className="tasks">
                            </div>
                        </Form>
                    </Formik>
                    <div className="project_form_actions">
                        <button>Add</button>
                        <Link to="/dashboard/projects">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}