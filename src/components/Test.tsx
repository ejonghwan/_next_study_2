"use client"

import React, { useEffect, useState } from 'react'




export const Test1 = 'Test1'
 const Test2 = 'Test1'
 const Test3 = 'Test1'
export { Test2, Test3 }


const Test = ({ children, n }: { children: React.ReactNode, n: string }) => {

    const data = [
        { name: 'a1', age: 0 },
        { name: 'a2', age: 0 },
        { name: 'a3', age: 0 },
        { name: 'a4', age: 0 },
        { name: 'a5', age: 0 }
    ]

    const [ user, setUser ] = useState<any>(data)

    const arr = [
        { name: 'ho', age:1 },
        { name: 'ho1', age:1 },
        { name: 'ho2', age:1 },
        { name: 'ho3', age:1 },
        { name: 'ho4', age:1 },
        { name: 'ho5', age:1 },
        { name: 'ho6', age:1 }
    ]

    const updateUser = () => {
        setUser(prev => {
           return [...prev, prev.filter(item => item.name === 'a3').map(item => { return item.name = 'asdasd' } )]
        })
      };


  return (
    <div>
        <div>ref test</div>


        <div className='border-2 border-gray-100'>여기는 칠드런 밖 영역</div>
        <div className='border-2 border-indigo-500'>
            여기는 칠드런 안 영여 
            <p>{children}</p>
            <p>이건 엔 프롭스 {n}</p>
        </div>

        <ul>
            <li>{arr[0].name}</li>
            <li>{arr[1].name}</li>
            <li>{arr[2].name}</li>
            <li>{arr[3].name}</li>
            <li>{arr[4].name}</li>
        </ul>


        <ul>
            { arr.map((item, idx) => <li key={idx}>{item.name}</li>) }

            {/* <p>name: {user.name}</p> */}
            {/* <p>age: {user.age}</p> */}

            <hr />
            {user?.map(item => <div key={item.name}>{item.name}</div>)}
            <button type='button' onClick={updateUser}>zzz</button>
        </ul>

    </div>
  )
}

export default Test