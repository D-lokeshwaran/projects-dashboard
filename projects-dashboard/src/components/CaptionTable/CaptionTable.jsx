import { BsCircle, BsPlusCircle } from 'react-icons/bs'
import './CaptionTable.css'

export default function CaptionTable({ captions }) {

    if (captions) {
        captions = captions.map((cap, index) => {
            cap['icon', 0] = <BsCircle/>
            return cap;
        })
    }

    return (
        <div className="caption_table_container">
            <div className="caption_header flexAlignStartH">
                Tasks <BsPlusCircle className="ml10H add_caption"/>
            </div>
            <div className="captions widthFullH">
                { captions && captions.map(cap => <Caption {...cap} />) }
            </div>
        </div>
    )
}

function Caption(props) {

    return (
        <div className="caption flexAlignStartH verticalTopH">
            {Object.values(props).map(prop => <span className="caption_cell">{prop}</span>)
            }
        </div>
    )
}