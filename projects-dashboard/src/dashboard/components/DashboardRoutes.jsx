import { Routes, Route,
         Navigate, Link} from 'react-router-dom'
import { Home, Project, Visualization } from './modules'
import Header from './Header/Header'

export default function DashboardRoutes() {

    return (
        <div className="dashboard_router pOneFiveH">
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard/home"/>}/>
                <Route path="dashboard">
                    <Route path="home" element={<Home/>}/>
                    <Route path="projects" element={<Project/>}/>
                    <Route path="project/:projectName" element={<Visualization/>}>
                        <Route path="tasks" element={<Project/>}/>
                    </Route>
                    <Route path="visualizer" element={<Visualization/>}/>
                </Route>
                <Route path="*" element={<UnableToSupport/>}/>
            </Routes>
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