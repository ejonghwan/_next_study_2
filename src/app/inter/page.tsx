"use client"

import React, { useEffect, useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersection'

const InterPage = () => {

  const targetRef = useRef(null)
  const stickyRef = useRef(null)

  const [ob, unOb, isInt] = useIntersectionObserver((ent, ob) => {
    console.log('inter?', ent, ob)
    // stickyRef.current.classList.add('fixed')
  })

  useEffect(() => {
    console.log('inter?, ', isInt)
    if(isInt) {
      stickyRef.current.classList.add('fixed', 'bottom-0')
      stickyRef.current.classList.remove('absolute')
    } else {
      stickyRef.current.classList.add('absolute')
      stickyRef.current.classList.remove('fixed')
    }
  }, [isInt])

  useEffect(() => {
    ob(targetRef.current)
    return () => unOb(targetRef.current)
  }, [])



  return (
    <div>
        <h1>inter test</h1>
        <section className='bg-red-100 h-[500px] w-full'>1</section>
        <section className='bg-red-200 h-[500px] w-full'>2</section>
        <section className='bg-red-300 h-[500px] w-full relative' ref={targetRef}>
          3 target
          <div className='absolute right-0 top-[0px] h-[200px] bg-red-500' ref={stickyRef}>sticky</div>
        </section>
        <section className='bg-red-400 h-[500px] w-full'>4</section>
        <section className='bg-red-500 h-[500px] w-full'>5</section>
       
    </div>
  )
}

export default InterPage