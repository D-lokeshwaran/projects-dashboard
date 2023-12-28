import styles from './form.module.css'
import { useField } from 'formik'
import InputWrapper from './InputWrapper'

export const defaultFieldStyle = styles.field;

const MasterInput = ({ variant, enableFormik, ...props }) => {

    const [field, meta] = useField(props);
    const attributes = enableFormik ? {...field, ...props}
            : {...props, className: `${styles.field && styles.field} ${props.className}`};
    const error = enableFormik == true && meta.error ? (
                      <div className="error">{meta.error}</div>
                  ) : null
    return variant !== 'hidden' ?
           <InputWrapper required={props.required} label={props.label} description={props.description}>
               {variant && variant == 'select' ? <select {...attributes} />
                    :  variant == 'textarea' ? <textarea {...attributes}/>
                        :   !props.children && <input className="text-input" {...attributes}/>
               } {error}
           </InputWrapper>
           : <input type='hidden' hidden name={props.name}/>
};

export default MasterInput;