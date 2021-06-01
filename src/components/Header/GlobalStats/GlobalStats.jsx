import React from "react";
import "./globalStats.css";
const GlobalStats = ({ topic, data }) => {
	return (
		<li className="globalStats">
			<h2>{topic}</h2>
			<h3>{new Intl.NumberFormat().format(data)}</h3>
		</li>
	);
};

export default GlobalStats;
