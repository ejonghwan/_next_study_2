"use client"

import React, { forwardRef } from 'react'

const RefForwrdChild = forwardRef(({ data }: { data: string }, ref1: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div>
        <input type="text" ref={ref1} />
        <p>{data}</p>
    </div>
  )
})

export default RefForwrdChild