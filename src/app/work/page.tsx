"use client"

import React, { useRef } from 'react'
import Test2 from '../../components/Test2'
import ProductItem from '../../components/productItem'

const WorkPage = () => {


  const divRef = useRef<React.LegacyRef<HTMLDivElement> | undefined>(null)

  const data = [
    { name: '삼성', badge: '가나다1', isBadge: true, types: [3,2,1] },
    { name: '삼성', badge: '가나다2', isBadge: false, types: [1,2,3]},
    { name: '삼성', badge: '가나다3', isBadge: true, types: [3]},
    { name: '삼성', badge: '가나다4', isBadge: false, types: [2]},
    { name: '삼성', badge: '가나다5', isBadge: true, types: [1,3]},
  ]

  return (
    <div>
      

      <div ref={divRef}>test box</div>

      <ProductItem data={data} />
      <br /><br /><br /><br />
      <h1 >WorkPage</h1>
      
      ref test
      <Test2 />
      
      
      </div>
  )
}

export default WorkPage