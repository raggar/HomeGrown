import React from "react";
import "./css/SearchStyles.css";
import "./js/SearchFunction";

const SearchBusinesses = () => {
	return (
		<div className="searchBusinesses">
			<h2 id="header">Your local businesses</h2>

			<input type="text" id="search-input" placeholder="Search for local businesses by name, address, or tags and services" title="Type in a name"/>

			<ul id="ul-content">
				<li><a href="https://trailsendmarket.com/"><h3 className="title">Trails End Market</h3>4370 Dundas St, Thorndale, ON<p className="hidden">Market shopping Fresh food weekends furniture highway animals</p></a></li>
				
				<li><a href="https://www.rolipoliicecream.com/"><h3 className="title">Roli Poli Ice Cream</h3>484 Richmond St, London, ON<p className="hidden">order pickup pick-up restaurants Ice cream vegan downtown fresh food dairy-free dairy free cafes
			</p></a></li>
				
				<li><a href="https://www.trailerhitch.ca/"><h3 className="title">Trailer Hitch Center</h3>1933 Gore Rd, London, ON<p className="hidden">shopping summer free july august outdoors nature trailer truck accessories</p></a></li>
				
				<li><a href="https://www.markyscrepecafe.com/"><h3 className="title">Marky’s Crepe Cafe</h3>484 Richmond St Unit 478,
			London, ON<p className="hidden">Cafes Crepes Restaurants Food drinks downtown morning breakfast fresh order pickup pick-up delivery
			</p></a></li>

				<li><a href="https://coventmarket.com/"><h3 className="title">Covent Garden Market</h3>130 KING STREET LONDON ON<p className="hidden">market downtown fresh food restaurants outdoors cookie cake pasta shopping
			</p></a></li>

				<li><a href="https://www.arvaflourmill.com/"><h3 className="title">Arva Flour Mills</h3>
			2042 Elgin St London, Ontario <p className="hidden">flour fresh food arva generations mill organic natural eggs dairy shopping
			</p></a></li>
				
				<li><a href="https://nutsforcheese.com/"><h3 className="title">Nuts for Cheese</h3>London, ON<p className="hidden">vegan dairy-free dairy free food cheese manufacture manufacturer order delivery</p></a></li>
			
				<li><a href="https://theteahaus.com/stores"><h3 className="title">The Tea Haus</h3>
				130 King St, London, ON <p className="hidden">loose leaf tea market shopping order delivery drinks
			</p></a></li>

			</ul>
		{/* <script type="text/javascript" src="./js/SearchFunction"></script> */}

		</div>
	);
};

export default SearchBusinesses;
