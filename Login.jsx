import React from "react";
import Input from "./Input";

Login()
{
    alert("Login called");
}
function Login() {
    return  (
    <form className="form">
    <h1>Login Form</h1>
        <Input type="text" placeholder="Username"  />
            <br /><br />
        
        <Input type="password" placeholder="password"  />
            <br /><br />
        <button onClick={()=>this.Login()}>Login</button>  
    </form>
    );
}

export default Login;