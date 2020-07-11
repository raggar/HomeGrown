import React from "react";
import { Link } from 'react-router';

import "./homegrown.css";
import './animation/modal-manager.js';

import plants from "./img/plants.png";
import plants2 from "./img/plants2.png";
import placeholderPFP from "./img/logo.png";

const Home = () => {
return (
	<div className="homegrown">
		{/* <!-- First Page --> */}
		<div className="landing-page"> 
		{/* <!-- Plants lol --> */}
			<div className="plant-container1">
				<img src={plants} alt=""/>
			</div>
			
			<div className="plant-container2">
				<img src={plants2} alt=""/>
			</div>
			<div className="text-container">
				<h1 className="header">
					H &nbsp;O &nbsp;M &nbsp;E &nbsp;G &nbsp;R &nbsp;O &nbsp;W &nbsp;N
				</h1>
			</div>

			<div className="separator">
				<hr/>
			</div>

			<div className="text-container">
				<p className="text">Helping small and local businesses</p>
			</div>

			<div className="button-container">
				<div className="text-container">
					<button className="button" id="local-businesses-btn">Local Businesses Near You</button>
				</div>
				<div className="text-container">
					<button className="button" id="left">Relief for Local <br/> Businesses</button>
					<button className="button" id="right">Looking for a job? <br/> (Sign Up)</button>
				</div>
			</div>
		</div>

		{/* Toolbar at the top */}
		<div class="toolbar">
			<button className="toolbar-button" id="login">SIGN IN</button>
			<button className="toolbar-button" id="pfp">
				<img id="icon" src={placeholderPFP} alt=""/>
			</button>
		</div>


		{/* Modal popups */}
		<div className="modal-container" id="login-container">
			<div className="modal-content">
				<h1>SIGN IN</h1>

			<div className="close">+</div>

			<a href="https://www.google.com" className="button">SUBMIT</a>

			</div>
		</div>
	</div>
);
};

export default Home;
