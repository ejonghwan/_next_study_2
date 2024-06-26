import React from 'react'

const ResumePage = () => {


  function zzz(obj: { a: number, b: number }) {
    console.log(obj.a, obj.b)
  }

  zzz({ a: 1, b: 2 })

  return (
    <div>
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

    


      

    </div>
  )
}

export default ResumePage