import React, { useContext, useEffect, useState } from 'react'
import { Slack } from 'lucide-react';
import { appcontext } from './Context_api';

function Navbar() {

  let { list, active_list, setactive_list } = useContext(appcontext)
  let [anime1, setanime1] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setanime1(false)
    }, 3500);
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`w-[90%] transition-all bsb anime_yx duration-300 ease-in z-20 fixed  top-5  h-[45px] rounded-2xl justify-between shadow-lg bg-black text-white flex items-center px-3  ${anime1 ? "-translate-y-15 opacity-0" : " translate-y-0 opacity-100 "} `}>
      <div className='flex justify-center items-center gap-2'><Slack className='text-red-600' /><p className='font-bold cursor-context-menu'>Portfolio.Ar</p> </div>
      <ul className=' flex justify-center capitalize items-center gap-4 text-md '>
        {
          list && list.map((ele, idx) =>
            <li key={idx} className={`cursor-pointer transition-all duration-150 font-bold ease-linear ${active_list === ele ? "line-through text-red-600" : ""} select-none hover:text-red-600 font-medium `} onClick={() => setactive_list(ele)}>{ele}</li>
          )
        }
      </ul>
      <a href="https://wa.me/qr/UWTF5LNDHAORG1" target="_blank" rel="noopener noreferrer"  >
        <div className='transition-all duration-150 cursor-pointer ease-linear select-none active:scale-95 tra flex justify-center items-center gap-3 bg-red-500 rounded-xl text-white text-[10px] py-[5px] px-3'>
          <div className='w-[8px] h-[8px] bg-green-500 bsg rounded-full relative '>
            <div className='w-full h-full bg-green-600 bsg g_dot_anime top-0 left-0 rounded-full absolute '></div>
          </div>
          <p className='tracking-[1px]'> Open For Work</p>
        </div></a>
    </div>
  )
}

export default Navbar