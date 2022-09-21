import React, {useState, useEffect} from "react";

const UseEffectPrac = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const handleClick = () => {
        setCount(count+1);
    }
    

    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    //렌더링 될때마다 매번 실행됨
    useEffect(()=>{

    },[count])
	return (
		<>
        <h1>UseEffect 뿌셔!</h1>
			<div>UseEffect는 인자로 콜백함수를 기본으로 받음 -> 매번 렌더링 </div>
            <div>UseEffect가 두번째 인자로 배열을 받을 경우 -> 화면에 첫 렌더링될때, value값이 바뀔 때만 실행  </div>
            <hr/>
            <div>count:{count}</div>
            <button onClick={handleClick}>고고씽</button>
            <input type="text" value={name} onChange={handleInputChange}/>
            <div>name: {name}</div>
		</>
	);
};

export default UseEffectPrac;
