import { Outlet } from 'react-router-dom'
import './Content.css'

const Content = ({ future }) => {
    return (
        <div className="app-content_container">
            <Outlet/>
        </div>
    )
}
export default Content;