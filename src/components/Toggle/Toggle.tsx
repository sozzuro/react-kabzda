import React, {useState} from 'react';
import styles from './Toogle.module.css';

type tooglePropsType = {
    status: boolean
    setStatus: (status: boolean) => void
}

const Toggle = (props: tooglePropsType) => {

    const styleOnButton = {
        cursor: props.status ? 'default' : 'pointer',
        display: 'inline-block',
        padding: '10px 20px',
        border: '1px solid black',
        backgroundColor: props.status ? 'green' : 'transparent',
        color: props.status ? 'white' : 'black',
    }

    const styleOffButton = {
        cursor: props.status ? 'pointer   ' : 'default',
        display: 'inline-block',
        padding: '10px 20px',
        border: '1px solid black',
        backgroundColor: props.status ? 'transparent' : 'red',
        color: props.status ? 'black' : 'white',
    }

    const styleIndicatorButton = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        border: '1px solid black',
        borderRadius: '50%',
        verticalAlign: 'middle',
        backgroundColor: props.status ? 'green' : 'red',
        color: props.status ? 'black' : 'white',
    }


    return (
        <div>
            <div style={styleOnButton} onClick={() => props.setStatus(true)}>ON</div>
            <div style={styleOffButton} onClick={() => props.setStatus(false)}>OFF</div>
            <div style={styleIndicatorButton}/>
        </div>
    );
};

export default Toggle;