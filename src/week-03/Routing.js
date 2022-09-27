import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Routing.css";

const Routing = () => {
	const navigate = useNavigate();

	return (
		<>
			<a href="https://noonnu.cc/font_page/79" className="velog">
				{"🔗 개념 정리 VELOG "}
			</a>
			<hr className="line" />
			<div className="text">
				Link는 a href 를 대체할 수 있어요! <br /> 페이지가 새로 로딩되지 않는답니다~
			</div>
			<br />
			<Link to="/routinglink"> 링크 타고 슝 가볼까? </Link>
			<hr className="line" />

			<div className="text">useNavigate로 뒤로가기 해보쟝</div>
			<button onClick={() => navigate(-1)}>1페이지 뒤로가쟈~</button>
			<button onClick={() => navigate(-2)}>2페이지 뒤로가쟈~</button>
			<hr className="line" />
		</>
	);
};

export default Routing;
