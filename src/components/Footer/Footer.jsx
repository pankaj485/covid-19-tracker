import React from "react";
import "./footer.css";
import instagram from "./../../assets/instagram.svg";
import facebook from "./../../assets/facebook.svg";
import likedin from "./../../assets/linkedin.svg";
import github from "./../../assets/github.svg";
const Footer = () => {
	return (
		<footer className="footerContainer">
			<div className="social-medias">
				<img src={instagram} alt="icon" />
				<img src={facebook} alt="icon" />
				<img src={likedin} alt="icon" />
				<img src={github} alt="icon" />
			</div>
			<h5> &#169; made with love by pankaj </h5>
		</footer>
	);
};

export default Footer;
