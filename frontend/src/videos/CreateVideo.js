import React from "react";
import "../styles/CreateVideo.css";

function CreateVideo() {
    return (
        <div>
            <br/>
            <center>
            <h1>Create New Video</h1><br/><br/>
            <label for="preview">Select a Preview:</label><br/>
            <input type="file" id="preview" name="preview"></input><br/><br/>
            <label for="preview">Select a Video:</label><br/>
            <input type="file" id="video" name="video"></input><br/><br/>
            <input placeholder="Title"></input><br/><br/>
            <input placeholder="Description"></input><br/><br/>
            <button>Upload</button>
            </center>
            
        </div>
    )
}

export default CreateVideo;