import React from 'react'
import head_img from "./content/bg_img.png"

function Header() {
  return (
    <div
      className="w-[90%] h-[90vh] flex relative border">
        <img className='object-contain' src={head_img} alt="" />
        <div className='w-[15.5%] h-[43%] shadow-md shadow-black bg-black absolute top-[19.5%] left-[.5%] rounded-3xl'></div>
        <div className='w-[16.5%] h-[21%] shadow-md shadow-red-500 bg-red-500 rounded-3xl absolute top-[19.5%] left-[16.5%] '></div>
        <div className='w-[32.5%] h-[28%] shadow-md shadow-black bg-black rounded-3xl absolute top-[69%] left-[67%]'></div>
      </div>
  )
}

export default Header
