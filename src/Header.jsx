import React from 'react'
import head_img from "./content/bg_img.png"

function Header() {
  return (
    <div
      className="w-[90%] h-[90vh]  flex relative">
        <img className='object-contain' src={head_img} alt="" />
      </div>
  )
}

export default Header
