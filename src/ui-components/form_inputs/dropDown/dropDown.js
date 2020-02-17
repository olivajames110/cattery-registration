import React from "react";
// import "./radio.css";
import "../sharedInputsCss/sharedInputs.css";

const DropDownInput = props => {
    return (
        <div className="input-container">
            <label htmlFor="" className="btn-radio">
                <select id="numberInParty" valuename="number-of-people">
                    <option value="" disabled defaultValue>
                        6 +
                    </option>{" "}
                    <option value="6"> 6 </option> <option value="7"> 7 </option> <option value="8"> 8 </option> <option value="9"> 9 </option> <option value="10"> 10 </option> <option value="11"> 11 </option> <option value="12"> 12 </option> <option value="13"> 13 </option> <option value="14"> 14 </option> <option value="15"> 15 </option>{" "}
                </select>
            </label>
        </div>
    );
};

export default DropDownInput;
