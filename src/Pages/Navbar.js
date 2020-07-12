import React from "react";
import "./js/modal-manager.js";
import placeholderPFP from "./css/img/logo.png";
import Login from "./Login";

const Navbar = ({ logsIn, updateName, name, logsOut, isSignedIn }) => {
	return (
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

export default Navbar;
