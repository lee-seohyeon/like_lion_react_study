import React from 'react'
import { Link } from 'react-router-dom'

const RoutingLink = () => {
  return (
    <>
    <div className=''>와우! 무려 링크 타고 오시는 데 성공하셨군요!</div>
    <Link to="/week03">그래도 다시 돌아가셔야죠...?</Link>
    </>
  )
}

export default RoutingLink