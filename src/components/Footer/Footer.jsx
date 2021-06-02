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
				<a href="https://www.instagram.com/pankaj_thapaliya/" target="_blank">
					<img src={instagram} alt="icon" />
				</a>
				<a href="https://www.facebook.com/profile.php?id=100008397213095" target="_blank">
					<img src={facebook} alt="icon" />
				</a>
				<a href="https://www.linkedin.com/in/pankaj-thapaliya-791ba2108/" target="_blank">
					<img src={likedin} alt="icon" />
				</a>
				<a href="https://github.com/pankaj485" target="_blank">
					<img src={github} alt="icon" />
				</a>
			</div>
			<h5> &#169; made with love by pankaj </h5>
		</footer>
	);
};

export default Footer;
