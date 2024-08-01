"use client"

import React, { useEffect, useRef  } from 'react'
import Test3 from './Test3'
// import {usePathname, useSearchParams, useRouter } from 'next/navigation'



const Test2 = () => {

  // const router = useRouter();
  // const path = usePathname();
  // router.push({ pathname: "/yourpath", query: { data: "데이터1", data2: "데이터2" } })
    useEffect(() => {
      // console.log('router?', router, path)
    }, [])

    const divRef = useRef(null)

    const handleRefMove = () => {
        divRef.current.style.backgroundColor = 'blue'
    }

    const handleToto = () => {}


  return (
    <div style={{ height: "2000px", border: "1px solid red" }}>
    <h3>Test2</h3>


      <Test3 start={333} end={777} handleToto={handleToto}/>
      <button type='button' onClick={handleRefMove}>ref??</button>


    </div>
  )
}

export default Test2