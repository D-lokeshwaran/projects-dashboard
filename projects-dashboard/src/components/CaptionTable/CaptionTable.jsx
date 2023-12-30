import { BsCircle, BsPlusCircle } from 'react-icons/bs'
import { useState } from 'react';
import { ShowDialog } from '../'
import './CaptionTable.css'

export default function CaptionTable({ title, captions, dialog, disable}) {

    const [show, setShow] = useState(false);

    if (captions) {
        captions = captions.map((cap, index) => {
            cap['icon', 0] = <BsCircle/>
            return cap;
        })
    }

    return (
        <>
            {show && <ShowDialog title={dialog.title} content={dialog.content} handleClose={() => setShow(false)}/>}
            <div className={`caption_table_container ${disable && 'caption_disabled'}`}>
                <div className="caption_header flexAlignStartH">
                    {title} {!disable && <button className="overrideButtonH ml10H" onClick={() => setShow(true)}
                                                type="button">
                              <BsPlusCircle className="add_caption"/></button>}
                </div>
                <div className="captions widthFullH">
                    { captions && captions.map(cap => <Caption {...cap} disable={disable}/>) }
                </div>
            </div>
        </>
    )
}

function Caption(props) {

    return (
        <div className={`caption flexAlignStartH verticalTopH ${props.disable ? '' : 'caption_hover'}`}>
            {Object.values(props).map(prop => <span className="caption_cell">{prop}</span>)
            }
        </div>
    )
}