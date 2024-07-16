import React from 'react'

const Badge = ({ badge, isBadge, type }) => {
  return (
    <>
        { isBadge && <div className={`badge ${type}`}>벳지 : {badge}</div>}
    </>
  )
}

export default Badge