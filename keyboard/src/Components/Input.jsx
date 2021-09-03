import React from "react";
import styles from "./Button.module.css"

export const Input = ({ state }) => {
    // console.log(state)
    return (
        <>
            <div className={styles.input}>
            <p className={styles.pI}>{state}</p>
            </div>
        </>
    )
}