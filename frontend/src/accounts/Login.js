import React from "react";
import "../styles/Login.css";

function Login() {
    return (
        <div>
            <br/>
            <center>
            <h1>Log In</h1><br/><br/>
            <input placeholder="Email"></input><br/><br/>
            <input placeholder="Password"></input><br/><br/>
            <button>Log In</button><br/>
            <h7>Don't have an accoung? <a href="/registration/">Registrate!</a></h7>
            </center>
            
        </div>
    )
}

export default Login;