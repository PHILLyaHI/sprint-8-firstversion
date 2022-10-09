import React from "react";

function EditProfile() {
    return (
        <div>
            <center>
            <br/>
            <h1>Edit Account</h1><br/>
            <label for="profile-picture">Select a Profile Picture:</label><br/>
            <input type="file" id="profile-picture" name="profile-picture"></input><br/><br/>
            <label for="username">Username</label><br/>
            <input placeholder="Admin"></input><br/>
            <label for="name">Name</label><br/>
            <input placeholder="PHILLIPP"></input><br/>
            <label for="lastaname">Last Name</label><br/>
            <input placeholder="DERMAN"></input><br/>
            <label for="email">Email</label><br/>
            <input placeholder="phillippapetenok@gamil.com"></input><br/><br/>
            <button>Update</button>
            </center>
        </div>
    )
};

export default EditProfile;