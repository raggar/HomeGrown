import React from "react";
import "./homegrown.css";
import plants from "./img/plants.png";
import plants2 from "./img/plants2.png";

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
				<button className="button" id="left">Celebrating Local <br/> Businesses</button>
				<button className="button" id="right">Looking for a job? <br/> (Sign Up)</button>
			</div>
		</div>
	</div>
	</div>
);
};

export default Home;
