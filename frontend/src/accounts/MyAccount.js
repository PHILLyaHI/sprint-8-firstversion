import React from "react";

function MyAccount() {
    return (
        <div>
        <center>
        <br/>
		<img src={require('../media/photos/profile-pic.png')} width="100" height="100"/><br/><br/>
        <h2>Admin</h2>
        <h3>PHILLIPP</h3>
        <h3>APETENOK</h3>
        <h4>phillippapetenok@gmail.com</h4>
        </center>

        <br/>
		<div class="preview">
		<hr/>
		<a href="/video-detail">
		<img src={require('../media/photos/photo.png')} width="170" height="100"/>
        <h6 class="title-detail">3 Minutes of Nature</h6><br/>
		<h8 class="date-detail">12 March 2022</h8>
		<hr/>
		</a>
		</div>

		<div class="preview">
		<hr/>
		<a href="/video-detail">
		<img src={require('../media/photos/photo.png')} width="170" height="100"/>
        <h6 class="title-detail">3 Minutes of Nature</h6><br/>
		<h8 class="date-detail">12 March 2022</h8>
		<hr/>
		</a>
		</div>

		<div class="preview">
		<hr/>
		<a href="/video-detail">
		<img src={require('../media/photos/photo.png')} width="170" height="100"/>
        <h6 class="title-detail">3 Minutes of Nature</h6><br/>
		<h8 class="date-detail">12 March 2022</h8>
		<hr/>
		</a>
		</div>

        </div>
    )
};

export default MyAccount;