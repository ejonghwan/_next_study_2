import React from 'react'
import './Button.css'

const Button = ({ className }: { className: string }) => {
  return (
    <button className={className}>Button</button>
  )
}

export default Button