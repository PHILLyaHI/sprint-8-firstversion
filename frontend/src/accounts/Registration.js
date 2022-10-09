import React from "react";
import "../styles/Registration.css";

function Registration() {
    return (
        <div>
            <br/>
            <center>
            <h1>Create New Account</h1><br/><br/>
            <label for="profile-picture">Select a Profile Picture:</label><br/>
            <input type="file" id="profile-picture" name="profile-picture"></input><br/><br/>
            <input placeholder="Name"></input><br/><br/>
            <input placeholder="Last Name"></input><br/><br/>
            <input placeholder="Email"></input><br/><br/>
            <input placeholder="Password"></input><br/><br/>
            <button>Registrate</button><br/>
            <h7>Already Have an Accoung? <a href="/login/">Log In!</a></h7>
            </center>
            
        </div>
    )
}

export default Registration;