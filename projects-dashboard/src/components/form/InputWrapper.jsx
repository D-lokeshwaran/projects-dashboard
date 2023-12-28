import styles from './form.module.css'

export default function InputWrapper({ label, required, description, children, className }) {
    return (
        <fieldset className={`${styles.fieldset} ${className} mt10H`}>
            <label className={`${required && 'required_field'} ${styles.fieldset_label}`}>{label}</label>
            {children}
            {description && <small children="mb10H">{description}</small>}
        </fieldset>
    )
}