import { Formik } from 'formik'
import './ShowDialog.css'
import { BsXLg } from 'react-icons/bs'

export default function ShowDialog({title, content, handleClose}) {
    return (
        <div className="dialog_container">
            <div className="bg_blur"/>
            <div className="dialog">
                <div className="dialog_header">
                    <span className="dialog_title">{title}</span>
                    <BsXLg className="dialog_cancel_btn" onClick={handleClose}/>
                </div>
                <div className="dialog_form_contents">
                    {content}
                </div>
                <div className="dialog_form_actions">
                    {/* Additional effects */}
                </div>
            </div>
        </div>
    )
}