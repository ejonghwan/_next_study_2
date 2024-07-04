import React from 'react'

const Title = ({ title, type }: { title: string, type?: string }) => {

  return (
    <h3 className={type}>{title}</h3>
  )
}

export default Title