"use client"

import React, { useState, useEffect } from 'react'
import RefParent from '@/components/RefParent'
import AsyncCompo from '@/components/AsyncCompo'
import ContentBox from '@/components/test/ContentBox'
import Section from '@/components/test/Section'

const ResumePage = () => {

  const data = [
    { url: 'asdasd', tag: ['tag', 'tag2', 'tag3'], title: 'title 1', littleTitle: 'subtitle hoho1' },
    { url: 'asdasd', tag: ['tag'], title: 'title 2', littleTitle: 'subtitle hoho2' },
    { url: 'asdasd', tag: ['tag', 'tag2', ], title: 'title 3', littleTitle: 'subtitle hoho3' },
    { url: 'asdasd', tag: ['tag', 'tag2',], title: 'title 4', littleTitle: 'subtitle hoho4' },
    { url: 'asdasd', tag: ['tag', 'tag2', ], title: 'title 5', littleTitle: 'subtitle hoho5' },
    { url: 'asdasd', tag: ['tag', 'tag2', 'tag3'], title: 'title 6', littleTitle: 'subtitle hoho6' },
    { url: 'asdasd', tag: ['tag2', 'tag3'], title: 'title 7', littleTitle: 'subtitle hoho7' },
  ]


  const [user, setUser] = useState({
    name: '',
    age: '',
    hoho: '',
  })


  useEffect(() => {
    console.log('user???', user)
  }, [user])

  const handleChange = (e: any) => {
    console.log(e.target)

    // const {  } = e.target

    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value 
      }
    } )
  }


  const obj: Props<ChildProps<number>> = {
    a: 'asdasd',
    b: {
      c: 'asdasd',
      d: 3
    }
  }



  let a: string = '213'




  const handlehoho = (e: Event) => {
    console.log(e)
  }




  interface User<T> {
    name: string;
    data: T[]
  }

  interface UserData<T> {
    data1: string;
    data2: number;
    data3?: T 
  }


  const user: User<UserData<string>> = {
    name: 'jonghwan',
    data: [{ data1: 'asdasd', data2: 33, data3: 'asdasd' }]

  }
  

  return (
    <div>
      ResumePage

      <div>
        <input type="text" value={user.name} name='name' placeholder='name' onChange={handleChange} className='text-black'/>
        <input type="text" value={user.age} name='age' placeholder='age' onChange={handleChange} className='text-black'/>
        <select name="hoho" id="" onChange={handleChange} className='text-black'>
          <option value="hoho1" className='text-black'>hoho1</option>
          <option value="hoho2" className='text-black'>hoho2</option>
          <option value="hoho3" className='text-black'>hoho3</option>
        </select>
        <button type='button' onClick={handleSubmit} >서버로 보내기</button>
      </div>



      <Section>
        칠드런 넘겨줌
      </Section>

      <Section>
        가나다라
      </Section>

      <Section>
        마바사
      </Section>


      <hr />
      <br /> <br /> 

      <div  className='flex flex-wrap gap-[5px]'> 
        {data.map((item, idx) => {
          return (
              <ContentBox key={idx} data={item} /> 
          )
        })}
      </div>

      <hr />
      <br /><br />


      <RefParent />

      <br /><br /><br />

      <AsyncCompo />

      <h2>padding</h2>
      <div className='p-4 bg-blue-100'>p-4 px-4 py-4 pl-4 pr-4 pb-4 pt-4</div>
      <h2>margin</h2>
      <div className='p-4 bg-blue-100'>m-4 mx-4 my-4 ml-4 mr-4 mb-4 mt-4</div>
      <h2>width</h2>
      <div className='w-[50px] bg-blue-100'>w-4 w-full w-screen w-[50px]</div>
      <h2>border</h2>
      <div className='border border-blue-500 shadow-md'>border border-blue-500 shadow-md</div>

      <h2>text</h2>
      <div>text-white-500 text-xs sm base md lg xl 2xl 3xl text-center text-right font-bold</div>

      <h2>flex</h2>
      <div>flex justify-between items-center gap-4 gap-[30px]</div>

      <h2>grid</h2>
      <div>grid-cols-2 ~ gap-2 </div>

      <h2>round</h2>
      <div>rounded rounded-full lg rounded-t-xl</div>

      <h2>position</h2>
      <div>reletive absolute bottom-10 right-10 fixed</div>

      <h2>display</h2>
      <div>block inline</div>

    asdasd


      

    </div>
  )
}

export default ResumePage