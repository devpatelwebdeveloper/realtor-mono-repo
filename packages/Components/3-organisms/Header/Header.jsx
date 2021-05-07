import React from 'react'
import styles from "./Header.module.scss"
import Kalpesh from "./kalpesh.jpeg"

let x;

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.Content}>
            <div className={styles.Heading}>Kaps Patel Realtor <sup>®</sup></div>
            <div className={styles.SubHeading}>Please fill out the information below</div>
            </div>
            <div className={styles.Image}>
            <img className={styles.HeadShot}src={Kalpesh}/>
            </div>
        </div>
    )
}
