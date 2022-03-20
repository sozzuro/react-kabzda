import React, {useState} from 'react';
import styles from './Toogle.module.css';

const Toggle = () => {

    const [on, setOn] = useState(true);

    const styleOnButton = {
        cursor: on ? 'default' : 'pointer',
        display: 'inline-block',
        padding: '10px 20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'transparent',
        color: on ? 'white' : 'black',
    }

    const styleOffButton = {
        cursor: on ? 'pointer   ' : 'default',
        display: 'inline-block',
        padding: '10px 20px',
        border: '1px solid black',
        backgroundColor: on ? 'transparent' : 'red',
        color: on ? 'black' : 'white',
    }

    const styleIndicatorButton = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        border: '1px solid black',
        borderRadius: '50%',
        verticalAlign: 'middle',
        backgroundColor: on ? 'green' : 'red',
        color: on ? 'black' : 'white',
    }


    return (
        <div>
            <div style={styleOnButton} onClick={() => setOn(true)}>ON</div>
            <div style={styleOffButton} onClick={() => setOn(false)}>OFF</div>
            <div style={styleIndicatorButton}/>
        </div>
    );
};

export default Toggle;