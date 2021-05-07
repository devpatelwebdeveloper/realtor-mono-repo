import React from 'react'
import styles from "./Header.module.scss"
import Kalpesh from "./kalpesh.jpeg"

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.Content}>
            This is the Header
            </div>
            <div className={styles.Image}>
            <img className={styles.HeadShot}src={Kalpesh}/>
            </div>
        </div>
    )
}
