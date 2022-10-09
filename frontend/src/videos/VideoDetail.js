import React from "react";
import "../styles/VideoDetail.css";

function VideoDetail() {
    return (
        <>
		<div class="video">
		<center>
		<video width="410" height="240" controls>
  			<source src={require('../media/videos/video.mp4')} type="video/mp4"></source>
		</video>
		</center>
        <h5>I bought a house for the homless man</h5>
        <h6>27 March 2017</h6>
		<div class="div-elemnts">
		<a href="#" class="element">👍    </a>
		<a href="#" class="element">👎    </a>
		<a href="#" class="element">💬    </a>
		<a href="#" class="element">❗</a>
		<button class="delete">Delete</button>
		</div>
		<h5 class="user-detail-video">Admin</h5>
        <h5>Descripton:</h5>
        <h7>nvsji fuisufhuhuhhaouuof dhdo shahouhohdo fhhsdoh oahuo huh uahu hhuhuuh  u u u uusah ohsofhh sohauuo</h7>
        </div>
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
        </>
    )
}

export default VideoDetail;