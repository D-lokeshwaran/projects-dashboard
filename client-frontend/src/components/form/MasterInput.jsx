import styles from './form.module.css'
import { useField } from 'formik'
import InputWrapper from './InputWrapper'

export const defaultFieldStyle = styles.field;

const MasterInput = ({ variant, ...props }) => {

    const [field, meta] = useField(props);
    const attributes = {...props, ...field, className: `${styles.field && styles.field} ${props.className}`};
    const error = meta.error && <div className={styles.fieldError}>{meta.error}</div>

    return variant !== 'hidden' ?
           <InputWrapper className={props.wrapperClass} required={props.requiredField} label={props.label} description={props.description}>
               {variant && variant == 'select' ? <select {...attributes} />
                    :  variant == 'textarea' ? <textarea {...attributes}/>
                        :   !props.children && <input className="text-input" {...attributes}/>
               } {error}
           </InputWrapper>
           : <input type='hidden' hidden name={props.name}/>
};

export default MasterInput;