import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Routes from "./Routes";

class App extends Component {
	state = {
		isSignedIn: false,
		name: "",
	};

	updateName = (name) => {
		this.setState({ name: name }, () =>
			console.log("User's Name", this.state.name)
		);
	};

	logsOut = () => {
		firebase.auth().signOut(); //close Firebase;
		this.setState({ isSignedIn: false }, () =>
			console.log("User Logged In:", this.state.isSignedIn)
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
				<Routes
					logsOut={this.logsOut}
					logsIn={this.logsIn}
					isSignedIn={this.state.isSignedIn}
					updateName={this.updateName}
					name={this.state.name}
				/>
			</div>
		);
	}
}

export default App;
