import React from "react";

function Form(props) {
    return (
        <from className="form">
            <input type="text" placeholder="Username" /><br /><br />
            <input type="password" placeholder="password" /><br /><br />
            {!props.isRegistered &&
            <input type="password" placeholder="Confirm password" /> }<br /><br />
            
            <button type="submit">{props.isRegister ? "Login" : "Register"}</button>
        </from>
    );
}
export default Form;