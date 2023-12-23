import { LeftMenu, Routes } from './components'
import { BrowserRouter } from 'react-router-dom'
import HigherOrderContextProvider from './contexts/HigherOrderContext'
import './DashboardHelper.css'

export default function Dashboard() {

    return (
        <div className="dashboard">
            <HigherOrderContextProvider>
                <BrowserRouter>
                    <LeftMenu/>
                    <Routes/>
                </BrowserRouter>
            </HigherOrderContextProvider>
        </div>
    )
}