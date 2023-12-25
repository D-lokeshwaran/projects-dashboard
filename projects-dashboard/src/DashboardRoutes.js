import Dashboard from './Dashboard.js'
import { Home, ProjectList, ProjectForm, Visualizer } from './dashboard/elements'
import { Navigate } from 'react-router-dom'

const UnableToSupport = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Unable to support this url</h2>
            <div>Back to home</div>
        </div>
    )
}

const routes = [
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                index: true,
                element: <Navigate to='dashboard/home'/>
            }, {
                path: 'dashboard',
                children: [
                    {
                        path: 'home',
                        element: <Home/>
                    }, {
                        path: 'projects',
                        children: [
                            {
                                index: true,
                                element: <ProjectList/>
                            }, {
                                path: ':projectName',
                                element: <ProjectForm/>
                            }
                        ]
                    }, {
                        path: 'visualizer',
                        children: [
                            {
                                index: true,
                                element: <Visualizer/>
                            }, {
                                path: ':projectName',
                                element: <Visualizer/>
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        path: '*',
        element: <UnableToSupport/>
    }
]
export default routes;