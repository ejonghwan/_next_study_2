import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ border: "1px solid yellow" }}>
        <div style={{ border: "1px solid red" }}>
            고정값
        </div>
        <div style={{ border: "1px solid blue" }}>
            {children}
        </div>
    </div>
  )
}

export default Section