import React, { useState } from "react";

const UseStatePrac = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	const [items, setItems] = useState(['치킨', '마라탕']); //초기값으로 배열을 넣은 것!
    const [input, setInput] = useState(" ");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleEnter =() => {
        setItems((prevState) => {
            return([input, ...prevState]);
        });
    }
	return (
		<>
			<div>state 란, component 의 상태이다. </div>
			<div>
				useState를 통해서 우리는 component 의 상태를 간편하게 생성하고 업데이트할 수
				있음.
			</div>
			<hr />
			<div>숫자를 세어보쟛: {count} </div>
			<button onClick={handleClick}>올라가렴~</button>
			<hr />
			<div>Enter 를 누르면 새로운게 생겨나도록 해보자구요!</div>
			<input type="text" value={input} onChange={handleInputChange}/>
			<button onClick={handleEnter}>Enter</button>
            {items.map((item,i)=>{
                return <p key={i}>{item}</p>;
            })}
		</>
	);
};

export default UseStatePrac;
