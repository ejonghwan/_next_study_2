import React from 'react'

const ContactPage = () => {


  interface Props {
    a: string,
    b: number
  }
  const abc = [] as Props[]


  // function aa(a, b) {
  //   return a + b
  // }

  // aa(3, 5) === 8

  [{
    data: [{name: 'jonghwan', age: 3}],
    status: 200,
    message: '성공'
  }]


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

  ge<number[]>([1,2,'b'])



  return (
    <div>ContactPage</div>
  )
}

export default ContactPage