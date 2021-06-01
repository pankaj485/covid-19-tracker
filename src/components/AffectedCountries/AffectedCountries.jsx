import React, { useEffect, useState } from "react";
import "./affectedCountries.css";
import AffectedCountry from "./AffectedCountry/AffectedCountry";
const AffectedCountries = () => {
	const URL_MOST_AFFECTED_COUNTRY = "https://disease.sh/v3/covid-19/countries?sort=cases";
	const [countries, setCountries] = useState([]);
	const getData = async () => {
		try {
			const countriesList = await fetch(URL_MOST_AFFECTED_COUNTRY).then((response) =>
				response.json()
			);
			const filterCounties = countriesList.filter((item, index) => {
				return index < 10;
			});
			setCountries(filterCounties);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const mainTitleStyle = {
		padding: "1rem 0",
	};

	return (
		<div className="headerComponent">
			<h1>most affected countires</h1>
			<ul className="countires-container">
				<AffectedCountry
					key="0"
					stylePassed={mainTitleStyle}
					country="country"
					cases="cases"
					recovered="recoverd"
					deaths="deaths"
				/>
				{countries.map((countryData, index) => {
					const { countryInfo, country, cases, recovered, deaths } = countryData;
					return (
						<AffectedCountry
							key={index + 1}
							image={countryInfo.flag}
							country={country}
							cases={new Intl.NumberFormat().format(cases)}
							recovered={new Intl.NumberFormat().format(recovered)}
							deaths={new Intl.NumberFormat().format(deaths)}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default AffectedCountries;
