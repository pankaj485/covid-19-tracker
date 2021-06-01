import React, { useEffect, useState } from "react";
import "./header.css";
import Card from "../Card/Card";
import Globalstats from "./GlobalStats/GlobalStats";
import searchIcon from "../../assets/search.svg";

const Header = () => {
	const URL_OVERALL = "https://disease.sh/v3/covid-19/all";
	const URL_COUNTRIES = "https://disease.sh/v3/covid-19/countries";

	const [countryData, setCountryData] = useState([]);
	const [globalData, setGlobalData] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [foundCountry, setFoundCountry] = useState("");

	const getData = async () => {
		try {
			const overallDataAPI = await fetch(URL_OVERALL).then((response) => response.json());
			const countryDataAPI = await fetch(URL_COUNTRIES)
				.then((response) => response.json())
				.then((response) => response);
			setCountryData(countryDataAPI);
			setGlobalData(overallDataAPI);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const formatInput = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const handleChange = (event, input) => {
		event.preventDefault();
		const formattedInput = formatInput(input.toLowerCase());
		const filterCountry = countryData.filter((element) => {
			return element.country === formattedInput ? element.country : null;
		});
		filterCountry.length > 0 && setFoundCountry(filterCountry[0]);
		setInputValue("");
	};

	return (
		<div className="headerComponent">
			<div className="searchBox">
				<h1>search by country </h1>
				<div className="searchBox-input">
					<input
						type="text"
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
						placeholder="country name"
						value={inputValue}
					/>
					<img
						src={searchIcon}
						alt="search icon "
						onClick={(event) => {
							handleChange(event, inputValue);
						}}
					/>
				</div>
			</div>
			{foundCountry ? <Card fileredCountryInfo={foundCountry} /> : null}
			<div className="global-stats">
				<h1> global stat</h1>
				<ul className="totalCases">
					<Globalstats data={globalData.cases} topic="total cases" />
					<Globalstats data={globalData.todayCases} topic="today Cases" />
					<Globalstats data={globalData.deaths} topic="total death" />
					<Globalstats data={globalData.todayDeaths} topic="today Death" />
					<Globalstats data={globalData.active} topic="active " />
					<Globalstats data={globalData.recovered} topic="recovered" />
				</ul>
			</div>
		</div>
	);
};

export default Header;
