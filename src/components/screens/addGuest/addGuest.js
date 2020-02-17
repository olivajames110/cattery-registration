import React, { Fragment } from "react";
import TextFieldInput from "../../../ui-components/form_inputs/textField/textField";
import DropDownInput from "../../../ui-components/form_inputs/dropDown/dropDown";
import TextAreaInput from "../../../ui-components/form_inputs/textArea/textArea";
import CheckboxInput from "../../../ui-components/form_inputs/checkbox/checkbox";
import "./addGuest.css";

const AddGuestScreen = props => {
    let handleAddUser = () => {
        console.log("User Added");
    };
    return (
        <div className="add-user-container">
            <TextFieldInput className="input-container" id="name" label="Party Name:" type="text" />
            <DropDownInput className="input-container" id="name" label="Party Name:" type="text" />
            <TextAreaInput className="input-container" id="name" label="Party Name:" type="text" />
            <CheckboxInput className="input-container" id="name" label="Party Name:" type="text" />
            <button onClick={handleAddUser}>Submit</button>
        </div>
    );
};

export default AddGuestScreen;
