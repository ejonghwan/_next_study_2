import React from 'react'

const LittleTitle = ({ littleTitle, type }: { littleTitle: string, type?: string }) => {

  return (
    <h3 className={type}>{littleTitle}</h3>
  )
}

export default LittleTitle