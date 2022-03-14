import React from 'react';
import styles from './Toogle.module.css';

type tooglePropsType = {
    status: boolean
}

type buttonTogglePropsType = {
    checked: boolean
}

const Toggle = (props: tooglePropsType) => {
    return (
        <div style={{marginTop: '10px'}}>
            <ButtonToggle checked={props.status}/>
        </div>
    );
};

function ButtonToggle(props: buttonTogglePropsType) {
    if (props.checked === true) {
        return (
            <div>
                <div className={`${styles.button} ${styles.onActive}`}>ON</div>
                <div className={styles.button}>OFF</div>
                <div className={`${styles.indicator} ${styles.onActive}`}/>
            </div>

        )
    } else {
        return (
            <div>
                <div className={styles.button}>ON</div>
                <div className={`${styles.button} ${styles.offActive}`}>OFF</div>
                <div className={`${styles.indicator} ${styles.offActive}`}/>
            </div>

        )
    }
}

export default Toggle;