import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft,
         BsPlusCircle,
         BsCircle,
         BsCheck2Circle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { usePath } from '../../shared/contexts/PathContext'
import { ImagePreviewField, PrefixReplaceField, AdditionalDexter } from './components'
import { MasterInput, ShowDialog, CaptionTable } from '../../components'
import { createProjectApi } from '../../api/ProjectApiService.js'
import { retrieveAllFoldersApi } from '../../api/FolderApiService.js'
import TaskForm from '../TaskForm/TaskForm.jsx'
import './ProjectForm.css'

const initialValues = {
    name: '',
    folder: '',
    priority: '',
    addedOn: moment().format('DD - MMM - YYYY'),
    status: '',
    rootPath: '',
    description: '',
}

export default function ProjectForm() {

    const [project, setProject] = useState(initialValues);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        refreshFolders();
    }, [])

    async function refreshFolders() {
        await retrieveAllFoldersApi()
            .then(data => {
                setFolders([]);
                data.map(folder => setFolders(prevFolders => [...prevFolders, folder['name']]))
            })
            .catch(error => {
                alert('unable to get folders');
                console.log(error);
            })
    }

    const handleProjectFormChange = (event) => {
        const form = event.target;
    }

    const[profile, setProfile] = useState();
    /* need to manage in object after */
    const [rootPath, setRootPath] = useState('');
    const path = usePath();

    const handleValidate = (values) => {
        const errors = {};
        if (values.name.trim() == '') {
            errors.name = "Please Enter project name"
        }
        return errors;
    }

    const handleSubmit = (values) => {
        alert(JSON.stringify(values), null, 2);
    }

    return(
        <div className="project_form_module">
            <div className="project_form_container">
                <div className="project_form">
                    <Formik initialValues={ initialValues }
                            enableReinitialize = {true}
                            onSubmit={handleSubmit}
                            validate={handleValidate}
                    >
                    {
                        (props) => (
                            <Form className="hov_formik_container">
                                <h2 className="add_project_title">Project Information</h2>
                                <div className=" flexAlignStartH spaceBetweenH">
                                    <div className="project_details">
                                        <MasterInput type="text" name="name" label='Name' required placeholder="Project Name" />
                                        <MasterInput variant='select' label='Folder' name="folder"
                                                children={folders.map(o => <option>{o}</option>)}/>
                                        <div className="flexAlignStartH spaceBetweenH">
                                            <MasterInput variant='select' label='Priority' name="priority" wrapperClass='widthFullH'
                                                    children={"No, Low, Medium, High".split(', ').map(o => <option>{o}</option>)}/>
                                            <MasterInput label='Added On' name="addedOn" type="date" className="widthHalfH" wrapperClass="widthHalfH ml20H"/>
                                        </div>
                                        <PrefixReplaceField control={{ rootPath, setRootPath }} className="field" match='\s' replaceWith='/'/>
                                        <MasterInput variant='textarea' label='Description' name="description" rows='6' cols="40" className="description_textarea"
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
                            </Form>
                            )
                        }
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