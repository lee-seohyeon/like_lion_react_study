import React from 'react'
import "./css/TextAnimation.css";
import "./js/Repeat";
import Week05 from "./Week05";

const TextAnimation = () => {
  return (
    <>
    <Week05/>
    <div class="textani-container">

  <div class="animate seven">
			<span>안</span><span>녕</span><span>하</span><span>세</span><span>요</span> &nbsp;
			<span>반</span><span>갑</span><span>습</span><span>니</span><span>댜</span><span>!</span><span>🥰</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>
  
		<div class="animate one">
			<span>I</span><span>'</span><span>m</span> &nbsp;
			<span>S</span><span>e</span><span>o</span><span>h</span><span>y</span><span>e</span><span>o</span><span>n</span><span>!</span><span>!</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>

		<div class="animate two">
			<span>제</span><span>이</span><span>름</span><span>은</span> &nbsp;
			<span>이</span><span>서</span><span>현</span><span>입</span><span>니</span><span>다</span><span>!</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>

		<div class="animate three">
			<span>저</span><span>는</span><span>지</span><span>금</span> &nbsp;
			<span>떡</span><span>볶</span><span>이</span><span>가</span> &nbsp;
            <span>먹</span><span>고</span><span>싶</span><span>어</span><span>요</span><span>..</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>

		<div class="animate four">
			<span>이</span><span>것</span><span>은</span> &nbsp;
			<span>멋</span><span>사</span> &nbsp;
            <span>프</span><span>론</span><span>트</span> &nbsp;
            <span>스</span><span>터</span><span>디</span><span>입</span><span>니</span><span>다</span><span>!</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>

		<div class="animate five">
			<span>절</span><span>대</span><span>로</span> &nbsp;
			<span>쓸</span><span>말</span><span>없</span><span>어</span><span>서</span> &nbsp;
            <span>아</span><span>무</span><span>말</span><span>하</span><span>는</span><span>거</span><span>아</span><span>님</span><span>ㅎ</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>

		<div class="animate six">
			<span>드</span><span>디</span><span>어</span> &nbsp;
			<span>끄</span><span>으</span><span>읏</span><span>이</span><span>드</span><span>아</span><span>~</span><span>~</span>
      
      <a class="repeat" href="javascript:void(0);">Repeat</a>
		</div>
	</div>
    </>
  )
}

export default TextAnimation