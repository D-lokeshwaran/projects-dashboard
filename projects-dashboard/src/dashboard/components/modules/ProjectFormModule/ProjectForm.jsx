import styled from 'styled-components';
import { Formik, Form, Field } from 'formik'
import { DropDown } from '../components'

const Fieldset = styled.fieldset `
    outline: none;
    border: none;
    display: flex;
    align-items: center;
`;

export default function ProjectForm() {
    return(
        <div className="project_form_hoc_container ptenH">
            <div className="back_btn">
            </div>
            <div className="project_form_container">
                <div className="project_form">
                    <div className="project_form_title">

                    </div>
                    <Formik className="project_form_formik">
                        <Form>
                            <Fieldset>
                                <label>Folder</label>
                                <DropDown onHover={false} contents={["folder1", "folder2", "folder3"]}/>
                            </Fieldset>
                            <Fieldset></Fieldset>
                            <Fieldset></Fieldset>
                            <Fieldset></Fieldset>
                            <Fieldset></Fieldset>
                            <Fieldset>
                                <label>Project Path</label>
                            </Fieldset>
                        </Form>
                    </Formik>
                    <div className="project_form_actions">
                    </div>
                </div>
            </div>
        </div>
    )
}