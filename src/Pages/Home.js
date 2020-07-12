import React from "react";
import "./css/Home.css";
import "./js/modal-manager.js";
import plants from "./css/img/plants.png";
import plants2 from "./css/img/plants2.png";
import placeholderPFP from "./css/img/logo.png";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = ({ name, updateName, logsOut, logsIn, isSignedIn }) => {
	return (
		<div className="Home">
			{/* <!-- First Page --> */}
			<div className="landing-page">
				{/* <!-- Plants lol --> */}
				<div className="plant-container1">
					<img src={plants} alt="" />
				</div>

				<div className="plant-container2">
					<img src={plants2} alt="" />
				</div>
				<div className="text-container">
					<h1 className="header">
						H &nbsp;O &nbsp;M &nbsp;E &nbsp;G &nbsp;R &nbsp;O &nbsp;W &nbsp;N
					</h1>
				</div>

				<div className="separator">
					<hr />
				</div>

				<div className="text-container">
					<p className="text">Helping small and local businesses</p>
				</div>

				<div className="button-container">
					<div className="text-container">
						<Link to="/searchbusinesses">
							<button className="button" id="local-businesses-btn">
								Local Businesses Near You
							</button>
						</Link>
					</div>
					<div className="text-container">
						{/* hopefully we can make this link dynamically adapt to the country the user is in (dynamically changing a link variable based on location? Links stored in a database) */}
						{/* Option 2: have it link to a page that displays all the compiled relief websites, with filters based on location */}
						<a
							href="https://www.canada.ca/en/department-finance/economic-response-plan.html#businesses"
							className="button"
						>
							{" "}
							COVID-19 Relief for <br />
							Local Businesses
						</a>
						<a className="button">
							Looking for a job? <br /> (Sign Up)
						</a>
					</div>
				</div>
			</div>

			{/* Toolbar at the top */}
			<div className="toolbar">
				{isSignedIn ? (
					<div className="nav-items">
						<button onClick={logsOut} className="toolbar-button">
							SIGN OUT
						</button>
						<button className="toolbar-button">SETTINGS</button>
						<button className="toolbar-button">{name.toUpperCase()}</button>
						<button className="toolbar-button" id="pfp">
							<img id="icon" src={placeholderPFP} alt="" />
						</button>
					</div>
				) : (
					<div className="nav-items">
						<button className="toolbar-button" id="login">
							SIGN IN
						</button>
						<button className="toolbar-button" id="pfp">
							<img id="icon" src={placeholderPFP} alt="" />
						</button>
					</div>
				)}
			</div>

			{/* Modal popups */}
			<div className="modal-container" id="login-container">
				<div className="modal-content">
					{isSignedIn ? (
						<h1>You have successfully signed in!</h1>
					) : (
						<h1>SIGN IN</h1>
					)}

					<div className="close">+</div>
					<Login
						logsOut={logsOut}
						logsIn={logsIn}
						isSignedIn={isSignedIn}
						updateName={updateName}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
