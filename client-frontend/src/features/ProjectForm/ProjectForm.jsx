import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft,
         BsPlusCircle,
         BsCircle,
         BsCheck2Circle } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { ImagePreviewField,
         PrefixReplaceField,
         AdditionalDexter,
         PriorityDropDown } from './components'
import { MasterInput, ShowDialog, CaptionTable } from '../../components'
import { createProjectApi, retrieveProjectApi } from '../../api/ProjectApiService.js'
import { retrieveAllFoldersApi } from '../../api/FolderApiService.js'
import TaskForm from '../TaskForm/TaskForm.jsx'
import './ProjectForm.css'

export default function ProjectForm() {

    const [folders, setFolders] = useState([]);

    const initialValues = {
        name: '',
        folder: folders && folders[0],
        priority: 'Normal',
        addedOn: new Date(),
        /* startOn: '', latter ......*/
        rootPath: '',
        description: '',
        status: 'InProgress'
    }
    const [project, setProject] = useState(initialValues);
    const projectId = useParams().projectId;

    useEffect(() => {
        refreshFolders();
        updateProjectForm();
    }, [projectId])

    async function refreshFolders() {
        await retrieveAllFoldersApi()
            .then(data => setFolders(data))
            .catch(error => {
                alert('unable to get folders');
                console.log(error);
            })
    }

    const updateProjectForm = () => {
        if (projectId && projectId > 0) {
            retrieveProjectApi(projectId)
                .then(project => setProject(project))
                .catch(error => console.log('failed to fetch projects', error));
        }
    }

    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Please enter project name"
        } else if (values.name && values.name.length < 5) {
            errors.name = "Name should be greater than 5 letters"
        }
        if (!values.rootPath) {
            errors.rootPath = "Please enter root path."
        }
        return errors;
    }

    const handleSubmit = (project, helpers) => {
        folders.map(folder => {
            if (folder.name === project['folder']) {
                project['folder'] = folder;
            }
        })
        createProjectApi(project)
            .catch(error => {
                alert("Can't create project")
                console.log(error);
            })
        setProject(initialValues);
    }
    const isUpdate = projectId > 0;

    return(
        <div className="project_form_module">
            <div className="project_form_container">
                <div className="project_form">
                    <Formik initialValues={ project }
                            enableReinitialize = {true}
                            onSubmit={handleSubmit}
                            validate={handleValidate}
                            validateOnBlur={true}
                    >
                    {
                        (props) => (
                            <Form className="hov_formik_container">
                                <div className="project_form_header flexAlignCenterH spaceBetweenH">{isUpdate ? 'Update' : 'Add'} Project
                                    <PriorityDropDown name="priority"/>
                                </div>
                                <div className=" flexAlignStartH spaceBetweenH">
                                    <div className="project_details">
                                        <MasterInput type="text" name="name" label='Name' placeholder="Project Name" requiredField/>
                                        <MasterInput variant='select' label='Folder' name="folder"
                                                children={folders.map(o => <option>{o.name}</option>)}/>

                                        <PrefixReplaceField match='\s' replaceWith='/'/>
                                        <MasterInput variant='textarea' label='Description' name="description" rows='8' cols="40" className="description_textarea"
                                                     placeholder="Describe about this project..."/>
                                    </div>
                                    <input type="hidden" name="addedOn"/>
                                    <div className="dummy_wrapper additional_features">
                                        <AdditionalDexter task={{title: 'Tasks', dialog: {title:'Create Task',  content: <TaskForm/>},
                                                    captions: [{title: 'Test Task 1', startDate: '02/12/23', endDate: '02/12/23', status: 'In-Progress'}] }}
                                                        bugs={{title: 'Bugs', dialog:{title: 'Create Bug', content: <TaskForm/>}, disable: true,
                                                    captions: [{name: 'Default status should be In-Progress', foundedAt: '1/1/24', status: 'In Progress'}]}}/>
                                    </div>
                                </div>
                                <div className="form_actions">
                                    <Link to="/dashboard/projects" className="secondary_btnH overrideLinkH">Cancel</Link>
                                    <button className="success_btnH m10H" type="submit">{isUpdate ? 'Update' : 'Add'} Project</button>
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