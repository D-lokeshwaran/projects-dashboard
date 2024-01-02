import './PrefixReplaceField.css'
import { Field, ErrorMessage, useField } from 'formik';
import { InputWrapper, defaultFieldStyle } from '../../../../components'

export default function PrefixReplaceField({ match, replaceWith, prefix, control, ...props}) {

    var rootPathPrefix = '/home/msuser1/training_workspace/github_workspace/projects-dashboard/projects-dashboard/public';
    if(rootPathPrefix.length > 50) {
        rootPathPrefix = rootPathPrefix.substring(rootPathPrefix.lastIndexOf('/'));
    }

    return (
        <InputWrapper label="Root Path" required >
            <div>
                <label data-rootPath={rootPathPrefix}
                       className="root_path_prefix">
                    <Field type="text" className={`${defaultFieldStyle} root_path_field`} name="rootPath"
                           style={{paddingLeft: `${rootPathPrefix.length}ch`}} /* ch is the char unit in css *//>
                    <ErrorMessage name="rootPath" component="div" className='form_fieldError__vYEQs'/>
               </label>
            </div>
        </InputWrapper>
    )

}