import React from "react";
import "./textField.css";
import "../sharedInputsCss/sharedInputs.css";

const TextFieldInput = props => {
    return (
        <div className="input-container">
            <label>{props.label}</label>
            <input onChange={props.onChange} style={props.style} id={props.id} className={props.class} type={props.type} value={props.value} placeholder={props.placeholder} />
        </div>
    );
};

export default TextFieldInput;
