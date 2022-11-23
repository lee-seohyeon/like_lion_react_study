// import React from "react";
// import "./js/LocalStorage";

// // localStorage.setItem("name", "seohyeon");
// // localStorage.setItem("age", "21 ");
// // localStorage.removeItem("name");
// // console.log("localStorage");

// const inpkey=document.getElementById("inpkey");
// const inpvalue=document.getElementById("inpvalue");
// const btninsert=document.getElementById("btninsert");
// const lsoutput=document.getElementById("lsoutput");

// function gogo(){
//     const key = inpkey.value;
//     const value = inpvalue.value;
 
//     if (key && value){
//         localStorage.setItem(key, value);
//         location.reload();
//     }

//     for (let i = 0; i < localStorage.length; i++) {
//         const key=localStorage.key(i);
//         const value=localStorage.getItem(key);

//         lsoutput.innerHTML += `${key}: ${value}<br/>`
//     }

// }; 

// const LocalStorage = () => {
// 	return (
// 		<>
// 			<div>LocalStorage:현재 도메인의 로컬 저장소에 접근할 수 있도록 해줌</div>
// 			<div>
// 				로컬 저장소: 데이터 영구적 보관 가능 (브라우저를 껐다가 켜도 해당 페이지에
// 				데이터가 남아있음)
// 			</div>

//             <fieldset>
//                 <legend>입력하세요~</legend>
//                 <input id="inpkey" type="text"  placeholder="key입력"></input>
//                 <input id="inpvalue" type="text"  placeholder="value 입력"></input>
//                 <button type="button" id="btninsert"  >INSERT</button>
//             </fieldset>

//             <fieldset>
//                 <legend>localstorage</legend>
//                 <div id="lsoutput"></div>
//             </fieldset>
// 		</>
// 	);
// };

// export default LocalStorage;
