import React, { Component } from "react";
import Maps from "./Maps";

class MapsDeploy extends React.Component {
	render() {
		return (
			<div>
				<Maps
					google={this.props.google}
					center={{ lat: 18.5204, lng: 73.8567 }}
					height="300px"
					zoom={15}
				/>
			</div>
		);
	}
}

export default MapsDeploy;
