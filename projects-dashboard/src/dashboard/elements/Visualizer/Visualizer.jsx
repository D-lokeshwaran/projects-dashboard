import { useState, useEffect, suspense } from 'react'
import { useRecord, useLocalStorage } from '../../hooks'
import { TabBar } from '../../components'
import './Visualizer.css';

export default function Visualizer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [projects, add, clear] = useRecord('activeProjects');
    const [setItem, getItem] = useLocalStorage('active');

    useEffect(() => {
        const activeProject = getItem();
        if(projects.includes(activeProject)) {
            const activeProjectIndex = projects.indexOf(activeProject);
            setActiveIndex(activeProjectIndex);
        }
    }, [projects])

    return (
        <div className="visualizer_module m10H">
            <div className="visualizer_container">
                <div className="multiple_tabs_container">
                    { projects.map((project, index) =>
                            <TabBar title={project} activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex} key={index +"-"+ project}
                                    index={index}/>)
                    }
                    <div className="tab_actions">
                        <button onClick={() => clear()}>Close All Tabs</button>
                    </div>
                </div>
                <div className="visualizer">

                </div>
            </div>
        </div>
    )
}