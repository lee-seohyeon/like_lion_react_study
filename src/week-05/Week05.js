import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Week05.css"

const Week05 = () => {
	return (
		<>
			<NavLink to="/btnanimation" className="sub-nav">
				1) Button Animation
			</NavLink>

            <NavLink to="/loadinganimation" className="sub-nav">
				2) Loading Animation
			</NavLink>
		</>
	);
};

export default Week05;
