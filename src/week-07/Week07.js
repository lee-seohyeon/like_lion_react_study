import React from 'react'
import { KakaoShareButton } from '../components/KaKaoShareButton'

const Week07 = () => {
    // useEffect(() => {
    //     const script = document.createElement('script')
    //     script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    //     script.async = true
    
    //     document.body.appendChild(script)
    
    //     return () => {
    //       document.body.removeChild(script)
    //     }
    //   }, [])

      
  return (
    <>
    <div className="Week07">카카오톡 공유하기</div>
    <KakaoShareButton/>
    </>
  )
}

export default Week07;