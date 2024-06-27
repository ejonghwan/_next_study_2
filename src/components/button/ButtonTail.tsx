"use client"
import React from 'react'
import './Button.css'

interface Props {
  type: string;
  text: string;
  props: {
    style?: string;
    className?: string;
  }
  handleClick: () => void
}


const ButtonTail = ({ type, props, text, handleClick }: Props) => {
  return (
    <button onClick={handleClick} {...props}>
      {text}
    </button>
  )
}

export default ButtonTail