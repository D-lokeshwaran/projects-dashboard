import { BsCircle, BsPlusCircle } from 'react-icons/bs'
import { useState } from 'react';
import './CaptionTable.css'

export default function CaptionTable({ title, captions, disable}) {

    if (captions) {
        captions = captions.map((cap, index) => {
            cap['icon', 0] = <BsCircle/>
            return cap;
        })
    }

    return (
        <div className="captions_table_wrapper">
            <div className={`displayTableWFullH ${disable && 'caption_disabled'} captions_table`}>
                <tr className="listHeaderH">
                    {captions[0] && Object.keys(captions[0]).map((header, index) =>
                        <th className={`caption_header ptb10H ${index == 0 && 'pl10H'}`}>{index == 0 ? '' : header}</th>)}
                </tr>
                <tbody>
                    {captions && captions.map(cap =>  {
                        delete cap.project;
                        delete cap.oid;
                        return <Caption {...cap} disable={disable}/>
                    }) }
                </tbody>
            </div>
        </div>
    )
}

function Caption(props) {

    return (
        <div className={`caption_data_row listRowH ${props.disable ? '' : 'caption_hover'}`}>
            {Object.values(props).map((prop, index) => <td className={`caption_data ptb10H ${index == 0 && 'pl10H'}`}>{prop}</td>)
            }
        </div>
    )
}