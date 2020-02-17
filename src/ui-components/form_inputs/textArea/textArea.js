import React from "react";
import "./textArea.css";
import "../sharedInputsCss/sharedInputs.css";

const TextAreaInput = props => {
    return (
        <div className="input-container">
            <label htmlFor="">
                Description <textarea id="description" />
            </label>
        </div>
    );
};

export default TextAreaInput;
