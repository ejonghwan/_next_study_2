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
    </div>
  )
}

export default ServicesPage