import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Routing.css";

const Routing = () => {
	const navigate = useNavigate();

	return (
		<>
			<a href="https://velog.io/@momen_tous__/React-Routing-useNavigate-useLocation" className="velog">
				{"๐ ๊ฐ๋ ์ ๋ฆฌ VELOG "}
			</a>
			<hr className="line" />
			<div className="text">
				Link๋ a href ๋ฅผ ๋์ฒดํ  ์ ์์ด์! <br /> ํ์ด์ง๊ฐ ์๋ก ๋ก๋ฉ๋์ง ์๋๋ต๋๋ค~
			</div>
			<br />
			<Link to="/routinglink"> ๋งํฌ ํ๊ณ  ์ ๊ฐ๋ณผ๊น? </Link>
			<hr className="line" />

			<div className="text">useNavigate๋ก ๋ค๋ก๊ฐ๊ธฐ ํด๋ณด์</div>
			<button onClick={() => navigate(-1)}>1ํ์ด์ง ๋ค๋ก๊ฐ์~</button>
			<button onClick={() => navigate(-2)}>2ํ์ด์ง ๋ค๋ก๊ฐ์~</button>
			<hr className="line" />
		</>
	);
};

export default Routing;
