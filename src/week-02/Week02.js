import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Week02.css"

const Week02 = () => {
	return (
		<>
			<NavLink to="/useeffect" className="sub-nav">
				1) useEffect
			</NavLink>

            <NavLink to="/useRef" className="sub-nav">
				2) useRef
			</NavLink>
		</>
	);
};

export default Week02;
