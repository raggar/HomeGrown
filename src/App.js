import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Routes from "./Routes";
import { Redirect } from "react-router-dom";

class App extends Component {
	state = {
		isSignedIn: false,
	};

	logsOut = () => {
		this.setState({ isSignedIn: false }, () =>
			console.log("User Logged In:", this.state.isSignedIn)
		);
		return <Redirect to="/signout" />;
	};

	logsIn = (user) => {
		console.log(user);
		this.setState({ isSignedIn: !!user }); //should be true
		console.log("User Logged In:", this.state.isSignedIn);
	};

	render() {
		return (
			<div className="App">
				<Routes
					logsOut={this.logsOut}
					logsIn={this.logsIn}
					isSignedIn={this.state.isSignedIn}
				/>
			</div>
		);
	}
}

export default App;
