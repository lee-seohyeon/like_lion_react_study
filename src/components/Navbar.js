import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./css/Navbar.css"

const Navbar = () => {
	// const navigate = useNavigate();

	// const handleClick = (url) => {
	// 	navigate(url);
	// };

	return (
		<>
        <div className="navbar-dom">
			{/* <div className="navbar-content" onClick={() => handleClick("/usestate")}>1주차</div>
            <div className="navbar-content" onClick={() => handleClick("/week02")}>2주차</div>
			<div className="navbar-content" onClick={() => handleClick("/week03")}>3주차</div>
            <div className="navbar-content" onClick={() => handleClick("/week04")}>4주차</div>
            <div className="navbar-content" onClick={() => handleClick("/week05")}>5주차</div> */}
            <NavLink to="/usestate" className="navbar-content">1주차</NavLink>
            <NavLink to="/week02" className="navbar-content">2주차</NavLink>
            <NavLink to="/week03" className="navbar-content">3주차</NavLink>
            <NavLink to="/week04" className="navbar-content">4주차</NavLink>
            <NavLink to="/week05" className="navbar-content">5주차</NavLink>
            </div>
		</>
	);
};

export default Navbar;
