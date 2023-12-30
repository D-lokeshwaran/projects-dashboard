import { Formik } from 'formik'
import './ShowDialog.css'
import { BsXLg } from 'react-icons/bs'
import React from 'react';

export default function ShowDialog({title, content, handleClose}) {

    const ClonedContent = React.cloneElement( // this will clone the content component to add additional attributes...
        content,
        { closeDialog: handleClose }
    );

    return (
        <div className="dialog_container">
            <div className="bg_blur"/>
            <div className="dialog">
                <div className="dialog_header">
                    <span className="dialog_title">{title}</span>
                    <BsXLg className="dialog_cancel_btn" onClick={handleClose}/>
                </div>
                <div className="dialog_form_contents">
                    {ClonedContent}
                </div>
                <div className="dialog_form_actions">
                    {/* Additional effects */}
                </div>
            </div>
        </div>
    )
}