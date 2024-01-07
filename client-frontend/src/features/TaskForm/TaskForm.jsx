import { MasterInput } from '../../components'
import { createTaskForProjectApi } from '../../api/ProjectApiService.js'
import { Formik, Form } from 'formik'
import './TaskForm.css'

/** Don't get confused where this closeDialog is came from
   This is cloned on the showDialog and added closeDialog function to the content...
   @src/components/ShowDialog/ShowDialog.jsx
*/
export default function TaskForm({ closeDialog, projectId }) {

    const task = {
        name: '',
        startDate: '',
        endDate: '',
        status: 'InProgress',
    }

    const handleSubmit = (taskVal) => {
        createTaskForProjectApi(projectId, taskVal)
            .catch(error => console.log("Can't create task", error))
        closeDialog();
    }

    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Please enter Task name';
        }
        if (!values.startDate) {
            errors.startDate = 'Please enter Start date';
        }
        if (!values.endDate) {
            errors.endDate = 'Please enter End date'
        }
        return errors;
    }

    return (
        <div className="task_form_container">
            <Formik initialValues={ task }
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                    validate={handleValidate}
                    validateOnBlur={false}
            >
            {
                (props) => (
                    <Form className="task_form">
                         <MasterInput name="name" label="Name" requiredField/>
                         <div className="widthFullH flexAlignCenterH">
                             <MasterInput name="startDate" label="Start Date" requiredField type="date" wrapperClass="widthHalfH"/>
                             <MasterInput name="endDate" label="End Date" requiredField type="date" wrapperClass="widthHalfH ml20H"/>
                         </div>
                         <MasterInput name="status" label="status" variant="select"
                                     children={<><option>In-progress</option><option>Completed</option><option>Rejected</option></>}/>
                         <div className="actions mt20H">
                             <button className="success_btnH" type="submit">Create</button>
                             <button className="secondary_btnH ml20H" onClick={closeDialog} type="button">cancel</button>
                         </div>
                    </Form>
                )
            }
            </Formik>
        </div>
    )
}