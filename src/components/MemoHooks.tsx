"use client"

import React, { memo, useEffect } from 'react'

// 스크립트 특성이 함수가 초기화 되면 변수도 모두 초기화되고 null이 됐다가 대입이 되거든요 
// 메모리에 담아두는거 


// 문자열은 기본타입 데이터라서.  
// 객체 함수는 참조형 데이터라서.



const MemoHooks = ({ nameobj, namefn }) => {
    

    // for(let i = 0; i < 99999999999999999999; i++) {}
    const aa = '자식 컴포넌트'
    

    
   useEffect(() => {
    console.log('함수?', namefn())
   }, [namefn])


  return (
    <div>{nameobj.name} 자식 컴포넌트</div>
  )
}

// props 체크를 하거든요 


export default memo(MemoHooks)