import React from "react";
import styles from "./Button.module.css"

export const Button = ({data,handleClick,handleCount}) => {
   
    return (
        <>
            <div onClick={() =>handleCount()} onMouseOut={()=>handleClick(data)} className={styles.button} >
                <p className={styles.pB1} >{data?.no}</p>
                <p className={styles.pB2}>{data?.symbol}</p>
            </div>
        </>
    )
}