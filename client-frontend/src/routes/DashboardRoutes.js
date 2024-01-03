import App from '../App.js'
import { Dashboard, ProjectList, ProjectForm, Visualizer } from '../features'
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
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to='dashboard/home'/>
            }, {
                path: 'dashboard',
                children: [
                    {
                        path: 'home',
                        element: <Dashboard/>
                    }, {
                        path: 'projects',
                        children: [
                            {
                                index: true,
                                element: <ProjectList/>
                            }, {
                                path: ':projectId',
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
                                path: ':projectId',
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