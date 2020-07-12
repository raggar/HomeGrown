import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignOut from "./Pages/SignOut";
import LocationMapping from "./LocationMapping";
import LocalBusinesses from "./Pages/LocalBusinesses";

const Routes = ({ isSignedIn, logsOut, logsIn }) => {
	return (
		<main>
			<Switch>
				<Route exact path="/">
					<Home logsOut={logsOut} logsIn={logsIn} isSignedIn={isSignedIn} />
				</Route>
				<Route path="/signout" component={SignOut} />
				<Route path="/localbusinesses" component={LocalBusinesses} />
			</Switch>
		</main>
	);
};

export default Routes;
