import { Header } from './components'
import DashBoardContextProvider from './utils/DashboardContext'
import { BrowserRouter, Routes, Route, Navigate, Link, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Projects } from './pages/Project/Projects'
import PresentProject from './pages/Project/PresentProject'
import Project from './pages/Project/Project'
import './Dashboard.css';

const UnableToSupport = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Unable to support this url</h2>
            <div>Back to <Link to="/project-management/home">home</Link></div>
        </div>
    )
}

export default function Dashboard() {

    return (
        <>
            <DashBoardContextProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/projects-management/home"/>}/>
                        <Route path="projects-management">
                            <Route path="home" element={<HomePage/>}/>
                            <Route path="projects">
                                <Route path="" element={<Projects/>}/>
                                <Route path=":projectName" element={<PresentProject/>}/>
                                <Route path="createProject" element={<Project/>}/>
                            </Route>
                        </Route>
                        <Route path="*" element={<UnableToSupport/>}/>
                    </Routes>
                </BrowserRouter>
            </DashBoardContextProvider>
        </>
    )
}