import React from "react";
import "./nav.css";
const Nav = () => {
	return (
		<ul className="mainNav">
			<li className="leftNav">
				<a href="/#"> Covid-19 Tracker </a>
			</li>
			<li>
				<div>
					<ul className="rightNav">
						<li>
							<a href="https://disease.sh/v3/covid-19/countries"> API </a>
						</li>
						<li>
							<a href="https://github.com/pankaj485/covid-19-tracker"> Github </a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	);
};

export default Nav;
