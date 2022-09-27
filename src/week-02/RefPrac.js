import React, { useState, useRef } from "react";
import Week02 from "./Week02";

const RefPrac = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	const addCount = () => {
		setCount(count + 1);
	};

	const addRef = () => {
		countRef.current = countRef.current + 1;
	};

	return (
		<>
			<Week02 />

			<h3>useRef 뿌셔!</h3>
			<div>state: {count} </div>
			<div>Ref: {countRef.current}</div>
			<button onClick={addCount}>state 올라가랏!</button>
			{/* 누를때마다 재렌더링되기때문에 화면이 바로바로 바뀜 */}
			<button onClick={addRef}>ref 올라가랏!</button>
			{/* 왜 바로 안올라가게? -> 수정해도 재렌더링 되지 않기 때문! */}
			{/* 이것이 바로 장점... 값이 아무리 바뀌어도 렌더링이 안되니까 성능 짱짱맨 */}
			{/* 변수: 렌더링될때마다 초기화됨 <-> ref: 아무리 재렌더링되어도 계속 값을 유지함. */}
		</>
	);
};

export default RefPrac;
