import React from "react";
import "./affectedCountry.css";

const AffectedCountries = ({ index, image, country, cases, recovered, deaths, stylePassed }) => {
	return (
		<li key={index} style={stylePassed} className="countryItem">
			<img src={image} alt="" />
			<h3> {country} </h3>
			<h3> {cases} </h3>
			<h3> {recovered} </h3>
			<h3> {deaths} </h3>
		</li>
	);
};

export default AffectedCountries;
