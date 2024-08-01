
"use client"
import React, { useEffect, useRef, forwardRef } from 'react'

// const Test3 = forwardRef((props, ref) => {

//   const testRef = useRef(null)
//   console.log('ref??', ref)

//   const handlehoho = () => {
//     // if(props.start === )
//     console.log(testRef.current.offsetTop)
//   }
//   useEffect(() => {
//     window.addEventListener('scroll', handlehoho)
//     return () => {
//       window.removeEventListener('scroll', handlehoho)
//     }
//   }, [])

//   return(
//     <div ref={testRef} className='absolute top-[500px]' style={{height:'50px', width:'50px', background:'red'}}></div>
//   )
// });


// export default Test3;

// interface Props {
//   start: any;
//   end: any;
//   handleToto: () => void;
// }


const Test3 = ({ start, end, handleToto }: { start: any; end: any; handleToto: () => void; }) => {

  handleToto()



  

  const abc = useRef(null)
  // console.log('ddd?', ddd.current)
  // console.log('abc?', abc.current)


    const handlehoho = () => {
      // if(props.start === )
      console.log(abc.current.offsetTop)
      console.log(start, end)

      console.log(window.scrollY)
      if(window.scrollY > start && window.scrollY < end ) {
        abc.current.style.backgroundColor = 'red'
      } else {
        abc.current.style.backgroundColor = 'blue'
      }

      

    }

  useEffect(() => {
    window.addEventListener('scroll', handlehoho)
    return () => {
      window.removeEventListener('scroll', handlehoho)
    }
  }, [])
  

  return (
    <div>
      <p ref={abc} className='fixed top-[50%] left-[50%]'>asdasd</p>
    </div>
  )
}

export default Test3