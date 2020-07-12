import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LocalBusinesses from "./Pages/LocalBusinesses";
import MapsDeploy from "./Pages/MapsDeploy";

const Routes = ({ name, updateName, isSignedIn, logsOut, logsIn }) => {
	return (
		<main>
			<Switch>
				<Route exact path="/">
					<Home
						logsOut={logsOut}
						logsIn={logsIn}
						isSignedIn={isSignedIn}
						updateName={updateName}
						name={name}
					/>
				</Route>
				<Route path="/localbusinesses" component={LocalBusinesses} />
				<Route path="/map" component={MapsDeploy} />
			</Switch>
		</main>
	);
};

export default Routes;
