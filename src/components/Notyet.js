import React from "react";
import "./css/Notyet.css";

const Notyet = () => {
	return (
		<>
			<div className="main-dom">
				<div className="maintext">아직 준비중입니다 ㅜㅜ</div>
				<img src={require(`../img/melody.png`)} alt="noimg"></img>
			</div>
		</>
	);
};

export default Notyet;
