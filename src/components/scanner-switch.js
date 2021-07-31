import React from 'react';
import './scanner-switch.css';

export default function Toggle (props) {
    const toggleTrueFalse = () => props.setToggle(!props.toggle);
    return(
        <div className = "switch-container">
            <label className = "switch">
                <input type = "checkbox" onClick = {toggleTrueFalse}/>
                <span className = "slider rounded" id = {props.toggle? "man": ""}/>
            </label>
        </div>
    )
}

