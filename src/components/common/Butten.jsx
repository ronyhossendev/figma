import React from 'react'

const Butten = ({className,btnText,btnIcon}) => {
  return (
        <div className={`py-2  gap-x-3 px-5 flex items-center text-black  text-[20px]  border duration-500 text-center rounded-2xl ${className}`}>{btnText} {btnIcon}</div>
  )
}

export default Butten