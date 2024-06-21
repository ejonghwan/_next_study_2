"use client"

import React, { useEffect, useRef } from 'react'
import RefChild from './RefChild'
import RefForwrdChild from './RefForwrdChild'

import Test, { Test1, Test2, Test3 } from '@/components/Test'

const RefParent = () => {

    const divRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const data = [
        {name: 'hoho1',},
        {name: 'hoho2',},
        {name: 'hoho3',},
        {name: 'hoho4',},
        {name: 'hoho5',},
        {name: 'hoho6',},
    ]


    useEffect(() => {
        console.log(divRef)

    }, [])

    const handleClick = () => {
        if(inputRef.current) inputRef.current.focus();
        
    }


  return (
    <div>

        

        <div ref={divRef}>ref element</div>
        <button type='button' onClick={handleClick}>focus</button>
        {/* { data.map((item, idx) => <RefChild data={item.name} inputRef={inputRef} />) } */}
        <RefChild data={"zz"} ref={inputRef} />
        <RefForwrdChild data={"zz"} ref={inputRef} />
    </div>
  )
}

export default RefParent