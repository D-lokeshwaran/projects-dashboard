import './PrefixReplaceField.css'
import { Field } from 'formik';
import { InputWrapper } from '../../../../components'

export default function PrefixReplaceField({ match, replaceWith, prefix, control}) {

    var rootPathPrefix = '/home/msuser1/training_workspace/github_workspace/projects-dashboard/projects-dashboard/public';
    if(rootPathPrefix.length > 50) {
        rootPathPrefix = rootPathPrefix.substring(rootPathPrefix.lastIndexOf('/'));
    }

    const handlePathChange = (event) => {
        let value = event.target.value;
        const lastIndex = value.length -1;
        if(value.charAt(lastIndex).match(match)) {
            value = value.replaceAll(' ', '');
            value = value.concat(replaceWith);
        }
        control.setRootPath(value);
    }

    return (
        <InputWrapper label="Project Root Component Path" required description='Provide project root component path,
                Initial path starts with <code>{rootPathPrefix}</code>, Create new folder to add new path.'>
            <div>
                <label data-rootPath={rootPathPrefix}
                       className="root_path_prefix">
                    <input type="text" className="fieldH root_path_field" name="rootPath"
                           style={{paddingLeft: `${rootPathPrefix.length}ch`}} /* ch is the char unit in css */
                           onChange={handlePathChange} value={control.rootPath}/>
               </label>
            </div>
        </InputWrapper>
    )

}