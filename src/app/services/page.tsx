"use client"

import React, { useState } from 'react'

const ServicesPage = () => {


  interface User {
    name: string;
    age: string;
    address: string;
  }
  const [name, setName] = useState('')
  const [user, setUser] = useState<User>({ name: '', age: '', address: '' }) //null 왜 안되는지? 
  // const [user, setUser] = useState<User | null>(null) //null 왜 안되는지? 
  



  const handleSettingName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const target = e.target
    console.log(target)
    setName('asdasd')

    // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setUser(prev => ({ ...prev, [target.name]: target.value }))
    console.log(user)
  }


  const data = [
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
    { name: 'a1', age: 2 },
  ]

  return (
    <div>
      <h1>ServicesPage</h1>
      <button type="button" onClick={handleSettingName}>set name</button>
      {name}

      <br /><br /><hr /><br /><br />

      <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder='name' className='bg-primary border-b-2' /><br />
      <input type="text" name="age" value={user.age} onChange={handleInputChange}  placeholder='age' className='bg-primary border-b-2' /><br />
      <input type="text" name="address" value={user.address} onChange={handleInputChange}  placeholder='address' className='bg-primary border-b-2' />
    

      <div className='mt-10'>name: {user.name}</div>
      <div className='mt-2'>age: {user.age}</div>
      <div className='mt-2'>address: {user.address}</div>


      <hr />





      <ul className='flex flex-wrap p-2.5'>
        {data.map((item, idx) => {
          return (
            <li className='border-solid border-2 border-white w-full lg:w-6/12 p-2.5' key={idx}>
              <div>{item.name}</div>
              <div>{item.age}</div>
            </li>
          )
        })}
      </ul>
      <div className='grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden opacity-50'>
        <ul className='space-y-8'>
          {data.map((item, idx) => {
            return (
              <li className='border-solid border-2 border-white text-sm leading-6' key={idx}>
                <div>{item.name}</div>
                <div>{item.age}</div>
              </li>
            )
          })}
        </ul>
        <ul className='space-y-8'>
          {data.map((item, idx) => {
            return (
              <li className='border-solid border-2 border-white text-sm leading-6' key={idx}>
                <div>{item.name}</div>
                <div>{item.age}</div>
              </li>
            )
          })}
        </ul>
        <ul className='space-y-8'>
          {data.map((item, idx) => {
            return (
              <li className='border-solid border-2 border-white text-sm leading-6' key={idx}>
                <div>{item.name}</div>
                <div>{item.age}</div>
              </li>
            )
          })}
        </ul>
      </div>


      <br />
      <div className="flex">
        <div className="border-solid border-2 border-white flex-none  w-14 ...">
          01
        </div>
        <div className="border-solid border-2 border-white flex-initial w-64 ...">
          02
        </div>
        <div className="border-solid border-2 border-white flex-initial w-32 ...">
          03
        </div>
      </div>
      <br />
      <div className="flex gap-[30px]">
        <div className="border-solid border-2 border-white flex-auto  w-14 ...">
          01
        </div>
        <div className="border-solid border-2 border-white flex-auto w-64 ...">
          02
        </div>
        <div className="border-solid border-2 border-white flex-auto w-32 ...">
          03
        </div>
      </div>









      <div className='animate-jump animate-once'>asdasd</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button className="hover:animate-bounce delay-150 duration-300">Button A</button>
      <button className="animate-bounce delay-300 duration-300">Button B</button>
      <button className="animate-bounce delay-700 duration-300">Button C</button>
      <br />
      <button className="animate-bounce direction-normal">Button A</button>
      <button className="animate-bounce direction-reverse">Button B</button>
      <button className="animate-bounce direction-alternate">Button C</button>
      <button className="animate-bounce direction-alternate-reverse">Button C</button>
      <br />
      <button className="animate-bounce duration-150">Button A</button>
      <button className="animate-bounce duration-300">Button B</button>
      <button className="animate-bounce duration-700">Button C</button>
      <br />
      <button className="animate-bounce fill-mode-none">Button A</button>
      <button className="animate-bounce fill-mode-forwards">Button B</button>
      <button className="animate-bounce fill-mode-backwards">Button C</button>
      <button className="animate-bounce fill-mode-both">Button C</button>
      <br />
      <button className="animate-bounce repeat-0">Button A</button>
      <button className="animate-bounce repeat-1">Button B</button>
      <button className="animate-bounce repeat-infinite">Button C</button>
      <br />
      <button className="animate-bounce running">Button B</button>
      <button className="animate-bounce paused">Button A</button>
      <br />
      <button className="motion-safe:animate-bounce">Button B</button>
      <br />
      <button className="animate-in fade-in">Button A</button>
      <button className="animate-in spin-in">Button B</button>
      <button className="animate-in zoom-in">Button C</button>
      <button className="animate-in slide-in-from-top">Button D</button>
      <button className="animate-in slide-in-from-left">Button E</button>
      <br />
      <button className="animate-out fade-out">Button A</button>
      <button className="animate-out spin-out">Button B</button>
      <button className="animate-out zoom-out">Button C</button>
      <button className="animate-out slide-out-from-top">Button D</button>
      <button className="animate-out slide-out-from-left">Button E</button>
      <br />
      <button className="animate-in fade-in">Button A</button>
      <button className="animate-in fade-in-25">Button B</button>
      <button className="animate-in fade-in-50">Button C</button>
      <button className="animate-in fade-in-75">Button C</button>
      <br />
      <button className="animate-in spin-in-1">Button A</button>
      <button className="animate-in spin-in-6">Button B</button>
      <button className="animate-in spin-in-75">Button C</button>
      <button className="animate-in spin-in-90">Button C</button>
      <br />
      <button className="animate-in zoom-in">Button A</button>
      <button className="animate-in zoom-in-50">Button B</button>
      <button className="animate-in zoom-in-75">Button C</button>
      <button className="animate-in zoom-in-95">Button C</button>
      <br />
      <button className="animate-in slide-in-from-top">Button A</button>
      <button className="animate-in slide-in-from-bottom-48">Button B</button>
      <button className="animate-in slide-in-from-left-72">Button C</button>
      <button className="animate-in slide-in-from-right-96">Button C</button>
      <br />
      <button className="animate-out fade-out">Button A</button>
      <button className="animate-out fade-out-25">Button B</button>
      <button className="animate-out fade-out-50">Button C</button>
      <button className="animate-out fade-out-75">Button C</button>
      <br />
      <button className="animate-out spin-out-1">Button A</button>
      <button className="animate-out spin-out-6">Button B</button>
      <button className="animate-out spin-out-75">Button C</button>
      <button className="animate-out spin-out-90">Button C</button>
      <br />
      <button className="animate-out zoom-out">Button A</button>
      <button className="animate-out zoom-out-50">Button B</button>
      <button className="animate-out zoom-out-75">Button C</button>
      <button className="animate-out zoom-out-95">Button C</button>
      <br />
      <button className="animate-out slide-out-to-top">Button A</button>
      <button className="animate-out slide-out-to-bottom-48">Button B</button>
      <button className="animate-out slide-out-to-left-72">Button C</button>
      <button className="animate-out slide-out-to-right-96">Button C</button>
      <br />
      <button className="hover:animate-bounce"> Button B test</button>

    </div>
  )
}

export default ServicesPage