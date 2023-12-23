import styles from './themeSwitcher.module.css'
import { useThemeContext } from '../../../utils/ThemeContext'

export default function ThemeSwitcher() {

    const themeContext = useThemeContext();

    return (
        <div className={styles.container}>
            <label className={styles.switch} title="Switch Theme to dark">
                <input type="checkbox" onChange={themeContext.toggleTheme}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    )
}
