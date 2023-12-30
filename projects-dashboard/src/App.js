import './App.css';
import './shared/css/Helper.css'
import { Outlet } from 'react-router-dom'
import { LeftMenu, Header, Content } from './containers'
import HigherOrderContextProvider from './shared/contexts/HigherOrderContext'

function App() {
    return (
        <div className="Dashboard">
            <HigherOrderContextProvider>
            <Header/>
            <div className="Dashboard-wrapper">
                <LeftMenu/>
                <div className="Dashboard-Body">
                    <div className="Dashboard-content">
                        <Content/>
                    </div>
                </div>
            </div>
            </HigherOrderContextProvider>
        </div>
    );
}

export default App;
