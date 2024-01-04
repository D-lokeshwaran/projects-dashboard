import './AdditionalDexter.css'
import { useState } from 'react'
import { CaptionTable, ShowDialog  } from '../../../../components'

export default function AdditionalDexter(props) {
    const [show, setShow] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(Object.values(props)[0]['title']);

    const NavBar = ({label, index}) =>
        <div tabIndex={index} key={label + index} className={`features_nav ${selectedLabel === label && 'selected_feature_nav'}`}
             onClick={() => setSelectedLabel(label)} onFocus={() => setSelectedLabel(label)}>{label}</div>

    const navSections = Object.values(props).filter(prop => !prop.disable).map(prop => prop['title']);

    return(
        <div>
            <div className="dummy_wrapper additional_features">
                <div className="features_nav_container flexAlignStartH">
                    { navSections.map((section, i) => <NavBar label={section} key={i}/>) }
                </div>

                {Object.values(props).map((section) => selectedLabel === section.title &&
                        <div className="association_list">
                            <button className={`success_btnH`} type="button" onClick={() => setShow(true)}>New</button>
                            {show && <ShowDialog title={section.dialog.title} content={section.dialog.content} handleClose={(ev) => setShow(false)}/>}
                            <CaptionTable title={section.title} captions={section.captions}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}