import React from "react";
import "./card.css";
import Cards from "./Cards/Cards";
const Card = ({ fileredCountryInfo }) => {
	const {
		country,
		countryInfo,
		continent,
		population,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		active,
		recovered,
	} = fileredCountryInfo;

	return (
		<>
			<div className="countryDetail">
				<div>
					<h2> country : {country} </h2>
					<img src={countryInfo.flag} alt="" />
				</div>
				<h2> continent : {continent} </h2>
				<h2> population : {new Intl.NumberFormat().format(population)} </h2>
			</div>

			<ul className="parentCard ">
				<Cards title="total cases" detail={new Intl.NumberFormat().format(cases)} />
				<Cards title={"today cases"} detail={new Intl.NumberFormat().format(todayCases)} />
				<Cards title={"total death"} detail={new Intl.NumberFormat().format(deaths)} />
				<Cards title={"today death"} detail={new Intl.NumberFormat().format(todayDeaths)} />
				<Cards title={"active"} detail={new Intl.NumberFormat().format(active)} />
				<Cards title={"recoverd"} detail={new Intl.NumberFormat().format(recovered)} />
			</ul>
		</>
	);
};

export default Card;
