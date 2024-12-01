import React from 'react'

const Box = ({children, className}) => {
  return (
    <div className={`left h-1/2 w-full relative ${className} lg:h-full lg:w-1/2 `}>{children}</div>
  )
}

export default Box;