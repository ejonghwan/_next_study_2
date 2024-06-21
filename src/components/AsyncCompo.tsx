"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Social from '@/components/Social'


interface Data {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface Hoho<T> {
    data: T;
    name: string;
}

interface Hoho2<T> {
    data2: T;
    name2: number;
}

interface Hoho3<T> {
    data3: T;
    name3: number;
}

const hoho: Hoho<Hoho2<Hoho3<string>>> = {
    data: {
        data2: {
            data3: 'asd',
            name3: 3
        },
        name2: 3
    },
    name: 'hh'
}

function test<T>(a: any, b: T): T {
    const ab = (a + b)
    return ab
}

// function test<T>(arr: T[]): T[] {
//     const ab = arr
//     return ab
// }


// test<{ a: number, b: number }>({ a: 1, b: 2 })
const return_n = test<number>(3, 3)
console.log('??', return_n)




const AsyncCompo = () => {

    const [data, setData] = useState<Data[]>([])

    const getDataApi = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const data = res.data;

        setData(data)
        console.log('data??', res, data)
    }

    useEffect(() => {
        getDataApi();
    }, [])


  return (
    <div>

        <h3>async components</h3>
        <Social />
        <ul>
            
            {data && data?.map((item, idx) => (
                <li key={idx}>
                    <div>{item.id}</div>
                    <div>{item.title}</div>
                    <div>{item.userId}</div>
                    <div>{item.completed}</div>
                </li>
            ))}
        </ul>


    </div>
  )
}

export default AsyncCompo