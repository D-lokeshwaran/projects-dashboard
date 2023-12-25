import './Dashboard.css';
import './dashboard/Helper.css'
import { Outlet } from 'react-router-dom'
import { LeftMenu, Header } from './dashboard/elements'
import HigherOrderContextProvider from './dashboard/contexts/HigherOrderContext'

function Dashboard() {
    return (
        <div className="Dashboard">
            <HigherOrderContextProvider>
                <LeftMenu/>
                <div className="Dashboard-Body">
                    <Header/>
                    <div className="Dashboard-content">
                        <Outlet/>
                    </div>
                </div>
            </HigherOrderContextProvider>
        </div>
    );
}

export default Dashboard;
