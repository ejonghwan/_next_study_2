import React from 'react'

const RefChild = ({ data, ref }: { data: string, ref:  React.MutableRefObject<HTMLInputElement | null> }) => {
  return (
    <div>
        <input type="text" ref={ref} />
        <p>{data}</p>
    </div>
  )
}

export default RefChild