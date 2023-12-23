import { useLocation } from 'react-router-dom'
import { usePath } from '../../contexts/PathContext'
import './Header.css';

export default function DBHeader() {

    const paths = usePath().path;

    return (
        <div className="header_container">
            <div className="navPath ptenH">
                {
                    paths.map(path =>
                        <>
                            <small>&nbsp;{path}&nbsp;/</small>
                        </>
                    )
                }
            </div>
            <div className="user_profile ptenH">
                 <div className="thumbnail">

                 </div>
                 <div className="name">

                 </div>
            </div>
        </div>
    )
}