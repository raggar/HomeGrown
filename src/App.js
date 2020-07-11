/// JEANNIE AKA gENIE

import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";



//initializes firebase
firebase.initializeApp({
	apiKey: "AIzaSyDRiQUIqJjSIDV9Yjf9SxMBAgsFiX6M4pw", //taken from Firebase developer console
	authDomain: "homegrown-6c720.firebaseapp.com", //taken from Firebase developer console
});

class App extends Component {
	state = {
		isSignedIn: false,
	};
	//Setup configurations
	uiConfig = {
		signInFlow: "popup", //shows up as popup
		signInOptions: [
			//all authentications we are using (those enabled on Firebase website )
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			//what happens when sign in is a success (want it to return/do nothing)
			signInSuccess: () => false,
		},
	};

	logout = () => {
		firebase.auth().signOut(); //close Firebase;
		this.setState({ isSignedIn: false });
		console.log(this.state.isSignedIn);
	};

	componentDidMount = () => {
		//runs when app is first ran
		firebase.auth().onAuthStateChanged((user) => {
			//executes when user logins
			this.setState({ isSignedIn: !!user }); //!!user --> evaluates to true
			console.log(user); //user is an object that contains "user's" information
		});
	};
	render() {
		return (
			<div className="App">
				{this.state.isSignedIn ? (
					<div>
						<div>Signed In!</div>
						<button onClick={this.logout}>Sign out!</button>
						<h1>Welcome {firebase.auth().currentUser.displayName}</h1>{" "}
						{/* firebase.auth().currentUser is an object*/}
						<img
							alt="profile picture"
							src={firebase.auth().currentUser.photoURL}
						/>
					</div>
				) : (
					<StyledFirebaseAuth
						uiConfig={this.uiConfig}
						firebaseAuth={firebase.auth()}
					/>
				)}
			</div>
		);
	}
}
export default App;
