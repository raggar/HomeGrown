import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignOut from "./Pages/SignOut";
import LocationMapping from "./LocationMapping";

const Routes = ({ isSignedIn, logsOut, logsIn }) => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login">
					<Login logsOut={logsOut} logsIn={logsIn} isSignedIn={isSignedIn} />
				</Route>
				<Route path="/signout" component={SignOut} />
				{/* <Route path="/map" component={LocationMapping} /> */}
			</Switch>
		</main>
	);
};

export default Routes;