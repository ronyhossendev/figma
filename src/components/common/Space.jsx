import React from 'react'

const Space = ({children,className}) => {
  return (
    <div className={`h-60 w-60 bg-white shadow-md ${className}`}>{children}</div>
  )
}

export default Space