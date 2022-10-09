import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from "react-router-dom";

import VideoList from "./videos/VideoList";
import VideoDetail from "./videos/VideoDetail";
import CreateVideo from "./videos/CreateVideo";
import Registration from "./accounts/Registration";
import MyAccount from "./accounts/MyAccount";
import EditProfile from "./accounts/EditProfile";
import Login from "./accounts/Login";
import Messages from "./messages/Messages";
import MessageRoom from "./messages/MessageRoom";



function App() {
	return (
	  	<BrowserRouter>
			<Switch>
		  		<Route exact path="/">
				<VideoList />
			</Route>
			<Route path="/video-detail">
				<VideoDetail />
		  	</Route>
			<Route path="/new-video/">
				<CreateVideo />
		  	</Route>
			<Route path="/registration/">
				<Registration />
		  	</Route>
			<Route path="/login/">
				<Login />
		  	</Route>
			<Route path="/my-account/">
				<MyAccount />
		  	</Route>
			<Route path="/edit-profile/">
				<EditProfile />
		  	</Route>
			<Route path="/messages/">
				<Messages />
		  	</Route>
			<Route path="/message/2">
				<MessageRoom />
		  	</Route>
			</Switch>
	 	</BrowserRouter>
	);
}

export default App;