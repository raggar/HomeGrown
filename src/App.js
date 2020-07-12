import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
// import searchFunction from "./Pages/js/SearchFunction";
import Routes from "./Routes";

class App extends Component {
	state = {
		isSignedIn: false,
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
			// <div>
			<div className="App">
				<Routes
					logsOut={this.logsOut}
					logsIn={this.logsIn}
					isSignedIn={this.state.isSignedIn}
				/>
			</div>
			/* <div className="searchFunction">
				<Routes
					searchFunction={this.searchFunction}
				/>
			</div>
			</div> */
		);
	}
}

export default App;
