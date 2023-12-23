import styles from './ProfileThumbnail.module.css'

export default function ProfileThumbnail() {
    return(
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <span className={styles.nail}> L </span>
            </div>
            <div className={styles.popupProfile}>
            </div>
        </div>
    )
}