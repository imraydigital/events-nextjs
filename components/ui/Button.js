import React from 'react'
import Link from 'next/link';
//CSS
import styles from './Button.module.css';

const Button = (props) => {
    if(props.link){
    return (
        <Link href={props.link}>
            <a className={styles.btn}>
                {props.children}
            </a>
        </Link>
    )
    } else {
        return(
        <button className={styles.btn} onClick={props.onClick}>
            {props.children}
        </button>
        )
    }
}

export default Button