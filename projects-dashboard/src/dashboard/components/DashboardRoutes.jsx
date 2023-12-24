import { Routes, Route,
         Navigate, Link, Outlet} from 'react-router-dom'
import { Home, ProjectList, Visualization, ProjectForm } from './modules'
import Header from './Header/Header'

export default function DashboardRoutes() {

    return (
        <div className="dashboard_router pOneFiveH">
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard/home"/>}/>
                <Route path="dashboard">
                    <Route path="home" element={<Home/>}/>
                    <Route path="projects">
                        <Route path="" element={<ProjectList/>}/>
                        <Route path="add-project" element={<ProjectForm/>}/>
                    </Route>
                    <Route path="project/:projectName">
                        <Route path="" element={<Visualization/>}/>
                        <Route path="tasks" element={<ProjectList/>}/>
                    </Route>
                    <Route path="visualizer" element={<Visualization/>}/>
                </Route>
                <Route path="*" element={<UnableToSupport/>}/>
            </Routes>
            <Outlet className="ptenH"/>
        </div>
    )
}

const UnableToSupport = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Unable to support this url</h2>
            <div>Back to <Link to="/project-management/home">home</Link></div>
        </div>
    )
}