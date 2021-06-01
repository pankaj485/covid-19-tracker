import React from "react";
import "./cards.css";
const Cards = ({ title, detail }) => {
	return (
		<li className="mainCard">
			<div className="info">
				<h2>{title}</h2>
				<h3>{detail}</h3>
			</div>
		</li>
	);
};

export default Cards;
