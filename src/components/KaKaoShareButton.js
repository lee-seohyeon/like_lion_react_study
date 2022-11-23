import React from 'react'


export const KakaoShareButton = () => {
    //자바스크립트 SDK로 카카오 api 호출
    //카카오 api가 정상적으로 넘어온 것을 확인 가능
    // const kakao = window.Kakao;
    // const kakaoJsKey = process.env.REACT_APP_KAKAO_KEY;
    // const template = process.env.REACT_APP_MESSAGE_TEMPLATE;

    
    const handleKakaoLink = ()=>{
        window.Kakao.Share.createScrapButton({
            container: "#kakao-link-btn",
            templateId: 86279,
            requestUrl: 'https://lion-reactstudy.netlify.app/'
            
        })
        console.log('실행중');
    }
        

        
    return (
        <>
        <button
        id="kakao-link-btn"
        type="button"
        onClick={handleKakaoLink}>
            카톡 공유
        </button>
        </>
    )
}