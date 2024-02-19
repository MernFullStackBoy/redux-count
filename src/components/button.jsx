import React from 'react'

function Button({ children, bg, onclick }) {
  return (
    <button onClick={onclick} className={` w-[50px] h-[50px] ${bg} font-bold  rounded-[10px] `}>{children}</button>
  )
}

export default Button