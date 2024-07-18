"use client"

import Test from '@/components/Test'
import Button from '@/components/button/Button'
import ButtonTail from '@/components/button/ButtonTail'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import MemoHooks from '@/components/MemoHooks'



const ContactPage = () => {


  const testVar = 'zzzzz'
  const testObj = {
    objKey: 'asd'
  }

  console.log('fn inner?', testVar)

  useEffect(() => {
    console.log('on mount?', testVar)
    return () => { console.log('un mount?', testVar) }
  }, [testObj])


  const [btn, setBtn] = useState(0)
  const handleNumUp = () => setBtn(prev => prev + 1)




  interface Props {
    a: string,
    b: number
  }
  const abc = [] as Props[]



  // function aa(a, b) {
  //   return a + b
  // }

  // aa(3, 5) === 8

  // [{
  //   data: [{name: 'jonghwan', age: 3}],
  //   status: 200,
  //   message: '성공'
  // }]






  interface P1<T> {
    p1: T
  }

  interface P2<T> {
    p2: T
  }

  const obj: P1<P2<string>> = {
    p1: {
      p2: 'asdasd'
    }
  }


  function ge<T>(arr: T): T {
    return arr
  }

  ge<number[]>([1,2,3])




  function typeTest<T>(a: T, b: T): T[] {
    const arr = [] 
    arr.push(a, b)
    return arr; 
  }

  console.log( typeTest<number>(6, 6) )



  const handleClick = () => console.log('handle click fn ')


  const [val, setVal] = useState(0)
  const nameobj = useMemo(() => ({ name: 'jonghwan' }), [])
  // const namefn = () => { console.log('부모 함수') }
  const namefn = useCallback(() => { console.log('부모 함수') }, [])


  // useContext useReducer


  return (
    <div>


      <MemoHooks nameobj={nameobj} namefn={namefn} />
      <div>상태 체크 : {val}</div>
      <button type='button' onClick={() => setVal(prev => prev + 1)}>상태변경 체크</button>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <p>ContactPage</p>
      <Button className={' text-red-300 '}/>
      <Button className={'type2'}/>
      <Button className={'type3'}/>
      <hr />
      <p>tile wind compoennts</p>
      <ButtonTail 
        text={'텍스트 프롭??'}
        type={'button'}
        props={{
          className: 'text-red-500 border-2 border-red-500'
        }}
        handleClick={handleClick}
      />

      <hr />
      <Test />

      <button type="button" onClick={handleNumUp}>handleNumUp {btn}</button>
    </div>
  )
}

export default ContactPage