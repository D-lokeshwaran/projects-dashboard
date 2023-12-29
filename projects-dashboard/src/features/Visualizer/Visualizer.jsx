import { useState, useEffect, suspense, useReducer } from 'react'
import { useRecord, useLocalStorage } from '../../shared/hooks'
import { TabBar } from '../../components'
import './Visualizer.css';

export default function Visualizer() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [projects, add, clear, removeIndex] = useRecord('activeProjects');
    const [setItem, getItem] = useLocalStorage('active');
    const [, forceUpdate] = useReducer(x => x + 1, 0); // enable forceUpdate by using iterator reducer.

    useEffect(() => {
        const activeProject = getItem();
        if(projects.includes(activeProject)) {
            const activeProjectIndex = projects.indexOf(activeProject);
            setActiveIndex(activeProjectIndex);
        }
    }, [projects])

    useEffect(() => { // another effect to handle change in tab to local storage.
        const currentActiveProject = projects.at(activeIndex);
        if (currentActiveProject && currentActiveProject != undefined) {
            setItem(currentActiveProject);
        }
    }, [activeIndex])

    const handleRemoveProject = (index) => {
        removeIndex(index);
        if ( index < activeIndex ) {
            setActiveIndex(activeIndex -1);
        } else {
            forceUpdate();
        }
    }

    return (
        <div className="visualizer_module">
            <div className="visualizer_container">
                <div className="multiple_tabs_container">
                    { projects.map((project, index) =>
                            <TabBar title={project} activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    index={index}
                                    handleRemoveProject={handleRemoveProject}/>)
                    }
                    <div className="tab_actions">
                        <button onClick={clear}>Close All Tabs</button>
                    </div>
                </div>
                <div className="visualizer">

                </div>
            </div>
        </div>
    )
}