import React from 'react'

const Tag = ({ tag, type }: { tag: string, type?: string }) => {

  return (
    <span className={type} style={{ backgroundColor: "red", marginRight: "5px", display: "inline-block"  }} >{tag}</span>
  )
}

export default Tag