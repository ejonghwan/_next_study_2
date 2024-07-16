"use client"

import React, { useRef } from 'react'
import Test3 from './Test3'

const Test2 = () => {


    const divRef = useRef(null)

    const handleRefMove = () => {
        divRef.current.style.backgroundColor = 'blue'
    }

    


  return (
    <div style={{ height: "2000px", border: "1px solid red" }}>
    <h3>Test2</h3>

      <Test3 start={333} end={777} />
      <button type='button' onClick={handleRefMove}>ref??</button>


    </div>
  )
}

export default Test2