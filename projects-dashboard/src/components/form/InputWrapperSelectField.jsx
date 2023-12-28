import styles from  './form.module.css'
import InputWrapper from './InputWrapper'

export default function InputWrapperSelectField(props) {
   return (
       <InputWrapper label={props.label} required={props.required} description={props.description}>
           <select name={props.name} className={`fieldH ${props.className}`}
                   value={props.value} onChange={props.handleChange}>
               { props.options && (typeof props.options == 'string' ?
                   props.options.split(',').map(label => <option>{label.trim()}</option>)
                   :  props.options.map(label => <option>{label}</option>))
               }
           </select>
       </InputWrapper>
   )
}