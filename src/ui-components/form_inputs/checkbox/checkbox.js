import React from "react";
// import "./checkbox.css";
import "../sharedInputsCss/sharedInputs.css";

const CheckboxInput = props => {
    return (
        <div className="input-container">
            <label>{props.label}</label>
            <input type="checkbox" id="scales" name="scales" />
        </div>
    );
};

export default CheckboxInput;
