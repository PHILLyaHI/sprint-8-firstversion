import React from "react";
import "../styles/VideoList.css";

function VideoList() {
	return (
		<>

		<div class="preview">
		<a href="/video-detail">
		<img src={require('../media/photos/photo.png')} width="395" height="210"/><br/>
		<h3 class="title">3 Minutes of Nature</h3>
		<h7 class="date">12 March 2022</h7>
		</a>

		</div>
		<br/><br/>
		<div class="preview">
		<a href="/video-detail">
		<img src={require('../media/photos/photo2.png')} width="395" height="210"/><br/>
		<h3 class="title">Lofi Chill Music</h3>
		<h7 class="date">14 July 2027</h7>
		</a>
		<br/>

		</div>
		<br/><br/>
		<div class="preview">
		<a href="/video-detail">
		<img src={require('../media/photos/photo3.png')} width="395" height="210"/><br/>
		<h3 class="title">i madi newi roboti</h3>
		<h7 class="date">66 December 2020</h7>
		</a>
		</div>

		</>
		
	)
}

export default VideoList;