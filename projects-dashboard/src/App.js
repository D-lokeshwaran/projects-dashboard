import './App.css';
import './shared/css/Helper.css'
import { Outlet } from 'react-router-dom'
import { LeftMenu, Header, Content } from './containers'
import HigherOrderContextProvider from './shared/contexts/HigherOrderContext'

function App() {
    return (
        <div className="Dashboard">
            <HigherOrderContextProvider>
                <LeftMenu/>
                <div className="Dashboard-Body">
                    <Header/>
                    <div className="Dashboard-content">
                        <Content/>
                    </div>
                </div>
            </HigherOrderContextProvider>
        </div>
    );
}

export default App;
