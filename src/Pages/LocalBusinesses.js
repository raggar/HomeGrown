import React from "react";
import "./css/LocalBusinesses.css";
import content1 from "./Images/content1.jpg";
import content2 from "./Images/content2.jpg";
import content3 from "./Images/content3.jpg";
import content4 from "./Images/content4.jpg";
import content5 from "./Images/content5.jpg";
import content6 from "./Images/content6.jpg";
import content7 from "./Images/content7.jpg";

const LocalBusinesses = () => {
	return (
		<div>
			<title>News!</title>
			<body>
				<div id="container">
					<div id="header">
						<h1>What's New Within our Local Community?</h1>
					</div>

					<div id={"content1"}>
						<div id="image1">
							<img src={content1} width="370" height="300" />
						</div>

						<div id="text1">
							<b>
								<p>Trails End Farmers Market</p>
							</b>
							<p>
								TRAILS END FARMERS’ MARKET IS FULLY OPEN WITH LOCAL VENDORS BACK
								ON SATURDAYS FROM 7 A.M. TO 5 P.M. WE LOOK FORWARD TO SEEING
								YOU! Visit at:
								<a href="https://trailsendmarket.com/">
									https://trailsendmarket.com/
								</a>
							</p>
						</div>
					</div>

					<div id="content2">
						<div id="image2">
							<img src={content2} width="470" height="300" />
						</div>

						<div id="text2">
							<b>
								<p>Roli Poli Icecream</p>
							</b>
							<p>
								We appreciate your support during these hard times. To keep up
								with the demand, we have extended hours of operation for summer
								from 2-10 pm 7 days a week including Mondays effective June 2,
								2020. We will be rolling for you with love. Walk-in orders can
								be picked up, maintaining social distancing. We also reinforced
								procedures to reach health and safety requirements. You can also
								order online through SkiptheDishes & UberEats. Visit us at:{" "}
								<a href="https://www.rolipoliicecream.com/">
									https://www.rolipoliicecream.com/
								</a>
							</p>
						</div>
					</div>

					<div id="content3">
						<div id="image3">
							<img src={content3} width="370" height="400" />
						</div>

						<div id="text3">
							<b>
								<p>Trailer Hitch Center</p>
							</b>
							<p>
								Keeping your gear out of the weather and organized is what
								DECKED is all about! You can dial in everything you need for
								that epic journey or weekend warrior escape neatly and out of
								the way. With a 200 lb per drawer load rating and a 2000 lb
								payload capacity on the deck, DECKED truck cargo boxes can take
								on anything you throw at it. DECKED truck bed storage systems
								come in a variety of configurations, so it's easy to find one
								for your cargo needs. Come see us today and learn more about
								DECKED and which truck bed storage system is best for you! Call
								us at: (519) 850-2215 Visit us at:
								<a href="https://www.trailerhitch.ca/">
									https://www.trailerhitch.ca/
								</a>
							</p>
						</div>
					</div>

					<div id="content4">
						<div id="image4">
							<img src={content4} width="470" height="300" />
						</div>

						<div id="text4">
							<b>
								<p>Markys Crepe Cafe</p>
							</b>
							<p>
								Hello everybody! Quick notice that we will be closed for a few
								days due to technical difficulties. We are working on reopening
								early next week but we will keep you updated as soon as we are
								open. Thank you for understanding.❤️ Visit us at:
								<a href="https://www.markyscrepecafe.com/">
									https://www.markyscrepecafe.com/
								</a>
							</p>
						</div>
					</div>

					<div id="content5">
						<div id="image5">
							<img src={content5} width="470" height="300" />
						</div>

						<div id="text5">
							<b>
								<p>Convent Garden Market</p>
							</b>
							<p>
								“Kindness is contagious and sometimes kindness can be in the
								form of a cookie or cake shared with a friend.” – The Welsh
								Baker Another Farmers' Market Vendor Feature is up on the blog!
								Read our newsletter to meet Jude from The Welsh Baker and find
								her at the Outdoor Farmers' Market every Saturday from 9am to
								1pm! ❤️ For more information, visit us at :
								<a href="https://coventmarket.com/">
									https://coventmarket.com/
								</a>
							</p>
						</div>
					</div>

					<div id="content6">
						<div id="image6">
							<img src={content6} width="470" height="300" />
						</div>

						<div id="text6">
							<b>
								<p>AJM Heating and Cooling</p>
							</b>
							<p>
								If you are spending more time at home then you may notice that
								the air in your home is dry, causing your skin or throat to be
								irritated. If this is the case then you may be interested in
								installing a humidifier in your home. AJM Heating, Air
								Conditioning and Gas Service is able to install and repair your
								humidifiers. Click the link - https://bit.ly/39jGnKR - to learn
								more about this product and to inquire. You can also give us a
								call at 519-660-9942 and visit our website at:{" "}
								<a href="https://ajmheatingair.ca/">
									https://ajmheatingair.ca/
								</a>
							</p>
						</div>
					</div>

					<div id="content7">
						<div id="image7">
							<img src={content7} width="370" height="250" />
						</div>

						<div id="text7">
							<b>
								<p>Arva Flour Mill</p>
							</b>
							<p>
								Hi everyone, Just a quick update on ordering. We have installed
								a walk up window for order pick up and payment. This can also be
								used to place an order if you would prefer to do so in person.
								If you have any questions regarding product stock or any other
								questions regarding products we carry, please contact the store
								at 519-660-0199. Thanks in advance and stay safe! For more
								information, visit:
								<a href="https://www.arvaflourmill.com/">
									https://www.arvaflourmill.com/{" "}
								</a>
							</p>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
};

export default LocalBusinesses;
