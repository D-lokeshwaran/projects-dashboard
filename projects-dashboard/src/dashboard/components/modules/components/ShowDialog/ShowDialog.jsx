import { Formik } from 'formik'
import './ShowDialog.css'

export default function ShowDialog({title}) {
    return (
        <div className="dialog_container">
            <div className="bg_blur"/>
            <div className="dialog">
                <div className="dialog_header">
                    <span className="dialog_title">{title}</span>
                    <span className="dialog_cancel_btn">X</span>
                </div>
                <div className="dialog_form_contents">
                    asdfasd
                </div>
                <div className="dialog_form_actions">

                </div>
            </div>
        </div>
    )
}