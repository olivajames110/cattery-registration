import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import TextFieldInput from "../../../../ui-components/form_inputs/textField/textField";
import DropDownInput from "../../../../ui-components/form_inputs/dropDown/dropDown";
import TextAreaInput from "../../../../ui-components/form_inputs/textArea/textArea";
import CheckboxInput from "../../../../ui-components/form_inputs/checkbox/checkbox";
// import "./form.css";

const AddGuestScreen = props => {
    let [users, setUsers] = useState([]);

    const handleAddUser = async () => {
        const res = await axios.get("http://localhost:5000");
        console.log(res);
    };
    useEffect(() => {
        handleAddUser();
    }, []);

    return (
        <div className="add-user-container">
            <form>
                <TextFieldInput className="input-container" id="name" label="Party Name:" type="text" />
                <DropDownInput className="input-container" id="name" label="Party Name:" type="text" />
                <TextAreaInput className="input-container" id="name" label="Party Name:" type="text" />
                <CheckboxInput className="input-container" id="name" label="Party Name:" type="text" />
                {/* <input onClick={handleAddUser} type="submit" /> */}
            </form>
            <button onClick={() => handleAddUser()}>Submit</button>
        </div>
    );
};

export default AddGuestScreen;
