import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from "./Login";

class App extends Component {
	state = {
		isSignedIn: false,
	};

	logsOut = () => {
		this.setState({ isSignedIn: false }, () =>
			console.log("User Logged Out:", this.state.isSignedIn)
		);
	};

	logsIn = (user) => {
		console.log(user);
		this.setState({ isSignedIn: !!user }); //should be true
		console.log("User Logged In:", this.state.isSignedIn);
	};

	render() {
		return (
			<div className="App">
				<Login
					logsOut={this.logsOut}
					logsIn={this.logsIn}
					status={this.state}
				/>
			</div>
		);
	}
}

export default App;
