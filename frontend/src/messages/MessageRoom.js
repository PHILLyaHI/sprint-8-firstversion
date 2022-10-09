import React from "react";
import "../styles/MessageRoom.css";

function MessageRoom() {
    return(
    <div>
        <h2 class="user">PHILLIPP</h2>
        <hr/>
        <ul class="guest">
            <h8>Hello</h8><br/>
            <h8>How are you</h8>
        </ul>
        <ul class="you">
            <h8>Hi, I'm good</h8>
        </ul>
        <div class="send">
        <input placeholder="message"></input>
        <button>Send</button>
        </div>
    </div>
    )
};

export default MessageRoom;