import styles from './form.module.css'
import { Field } from 'formik'

export default function Input(props) {
    const fieldClass = `${props.className} fieldH`;
    return props.variant && props.variant == 'formik' ?
            <Field {...props} className={fieldClass}/>
            :   props.variant == 'textarea' ?
                <textarea {...props} className={fieldClass}/>
                :     <input {...props} className={fieldClass}/>

}