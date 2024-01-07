import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import moment from 'moment'
import { DropDown } from '../../components'
import { BsArrowLeft,
         BsPlusCircle,
         BsCircle,
         BsCheck2Circle } from 'react-icons/bs'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { BsFillFlagFill, BsFlag, BsCheck } from "react-icons/bs";
import { useState, useRef, useEffect } from 'react'
import { ImagePreviewField,
         PrefixReplaceField,
         AdditionalDexter,
         PriorityDropDown } from './components'
import { MasterInput, ShowDialog, CaptionTable } from '../../components'
import { createProjectApi, retrieveProjectApi, retrieveTasksByProjectId } from '../../api/ProjectApiService.js'
import { retrieveAllFoldersApi } from '../../api/FolderApiService.js'
import TaskForm from '../TaskForm/TaskForm.jsx'
import { formatDatePropertyOnList } from '../../utils/AppUtils.js'
import './ProjectForm.css'

export default function ProjectForm() {

    const [folders, setFolders] = useState([]);
    const navigateTo = useNavigate();

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
    const [tasks, setTasks] = useState([]);
    const projectId = useParams().projectId;

    useEffect(() => {
        refreshFolders();
        updateProjectForm();
    }, [projectId, tasks])

    async function refreshFolders() {
        await retrieveAllFoldersApi()
            .then(data => setFolders(data))
            .catch(error => {
                console.log(error);
            })
    }

    const updateProjectForm = () => {
        if (projectId && projectId > 0) {
            retrieveProjectApi(projectId)
                .then(project => setProject(project))
                .catch(error => console.log('failed to fetch projects', error));
        }
        retrieveTasksByProjectId(projectId)
            .then(tasks => {
                formatDatePropertyOnList(tasks, 'startDate', 'do-MMM-yy')
                formatDatePropertyOnList(tasks, 'endDate', 'do-MMM-yy')
                setTasks(tasks)
            })
            .catch(error => console.log('failed to fetch tasks',  error));
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
                    <div className="project_header flexAlignCenterH spaceBetweenH">
                        <span className="form_title">
                            Add Project
                        </span>
                        <span>
                            <input form='project_form' type='submit' value={isUpdate ? 'Update' : 'Add'} className="success_btnH"/>
                            <button className="secondary_btnH ml20H"
                                    onClick={() => navigateTo("/dashboard/projects")}>Cancel</button>
                        </span>
                    </div>
                    <div className="form_contents">
                        <div className="project_details_form">
                            <Formik initialValues={ project }
                                    enableReinitialize = {true}
                                    onSubmit={handleSubmit}
                                    validate={handleValidate}
                                    validateOnBlur={true}
                            >
                            {
                                (props) => (
                                    <Form id="project_form">
                                        <div className="basic_info_container form_group">
                                            <span className="subtitle">Basic INFO</span>
                                            <div className="form_contents">
                                                <div className="project_details">
                                                    <ImagePreviewField/>
                                                    <MasterInput type="text" name="name" label='Name' placeholder="Project Name" requiredField/>
                                                    <div className="flexAlignBaseLineH">
                                                        <PriorityDropDown name="priority"/>
                                                        <MasterInput type="date" label="Start From" name="startFrom"
                                                                wrapperClass="widthHalfH ml20H" requiredField/>
                                                    </div>
                                                    <MasterInput variant='textarea' label='Description' name="description" rows='8' cols="40" className="description_textarea"
                                                                 placeholder="Describe about this project..."/>
                                                </div>
                                                <input type="hidden" name="addedOn"/>
                                            </div>
                                        </div>
                                        <div className="advance_info_container form_group">
                                            <span className="subtitle">Essential INFO</span>
                                            <div className="form_contents">
                                                <div className="project_details">
                                                    <MasterInput variant='select' label='Folder' name="folder" requiredField
                                                                children={folders.map(o => <option>{o.name}</option>)}/>
                                                    <PrefixReplaceField match='\s' replaceWith='/'/>
                                                </div>
                                                <input type="hidden" name="addedOn"/>
                                            </div>
                                        </div>
                                    </Form>
                                    )
                                }
                            </Formik>
                            <div className="additional_features_container form_group">
                                <AdditionalDexter task={{title: 'Tasks', dialog: {title:'Create Task',  content: <TaskForm projectId={project.oid}/>},
                                            captions: tasks}}
                                                bugs={{title: 'Bugs', dialog:{title: 'Create Bug', content: <TaskForm projectId={project.oid}/>}, disable: true,
                                            captions: [{name: 'Default status should be In-Progress', foundedAt: '1/1/24', status: 'In Progress'}]}}/>
                            </div>
                        </div>
                        <div className="sections">
                        </div>
                    </div>
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