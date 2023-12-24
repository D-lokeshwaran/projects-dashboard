import { Routes, Route,
         Navigate, Link, Outlet} from 'react-router-dom'
import { Home, ProjectList, Visualizer, ProjectForm } from './modules'
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
                    <Route path="visualizer/:projectName">
                        <Route path="" element={<Visualizer/>}/>
                    </Route>
                    <Route path="visualizer">
                        <Route path="" element={<Visualizer/>}/>
                        <Route path="project/:projectName" element={<Visualizer/>}/>
                    </Route>
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