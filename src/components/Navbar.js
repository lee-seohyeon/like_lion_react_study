import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css"

const Navbar = () => {
	const navigate = useNavigate();

	const handleClick = (url) => {
		navigate(url);
	};

	return (
		<>
        <div className="navbar-dom">
			<div className="navbar-content" onClick={() => handleClick("/usestate")}>1주차</div>

            <div className="navbar-content" onClick={() => handleClick("/week02")}>2주차</div>

			<div className="navbar-content" onClick={() => handleClick("/week03")}>3주차</div>

            <div className="navbar-content" onClick={() => handleClick("/week04")}>4주차</div>

            <div className="navbar-content" onClick={() => handleClick("/week05")}>5주차</div>

            </div>
		</>
	);
};

export default Navbar;
