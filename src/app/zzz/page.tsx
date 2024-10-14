"use client"
import useDynamicRef from '@/hooks/useDynamicRef';
import React from 'react'

const items = [
    { title: 'Not', value: '1' },
    { title: 'your', value: '2' },
    { title: 'keys', value: '3' },
    { title: 'not', value: '4' },
    { title: 'your', value: '5' },
    { title: 'Bitcoin', value: '6' },
  ]


const ZzzPage = () => {


    const { refs: buttonRefs, handleRef } = useDynamicRef();

    
  const onClick = () => {
    console.log(buttonRefs)
    buttonRefs.forEach((buttonRef) => {
    //   buttonRef.classList.add('hoho')
    console.log('buttonRef??', buttonRef)
    })
  }
  
  return (
    // <div>
    //      {items.map((item) => (<button key={item.value}>{item.title}</button>))}
    // </div>
    <>
      {items.map((item) => (<button key={item.value}>{item.title}</button>))}
      <br />
	    <button onClick={onClick}>Test</button>
    </>
    // <div>
    //   hoho
    // </div>
  )
}

export default ZzzPage



// export default function Component() {

//   const { refs: buttonRefs, handleRef } = useDynamicRef<KButtonRefs>();

//   const onClick = () => {
//     console.log(buttonRefs)
//     buttonRefs.forEach((buttonRef) => {
//       buttonRef.startLoading();
//     })
//   }

//   return (
//     <>
//       {items.map((item) => (<KButton key={item.value}>{item.title}</KButton>)}
// 	    <KButton onClick={onClick}>Test</KButton>
//     </>
//   )
// }


