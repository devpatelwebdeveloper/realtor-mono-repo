import React from 'react'
import styles from "./Button.module.scss"

export default function Button(props) {
    return (
        <button className={`${styles.button} ${styles.buttonPrimary} ${props.disabled && styles.buttonDisabled}`}  {...props}>
            <span className={styles.buttonText}>{props.children}</span>
        </button>
    )
}
