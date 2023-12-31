import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1920px] px-5 md:px-10 
      ${className || ""
      
      } `}>
        {children}
    </div>
  )
}

export default Wrapper