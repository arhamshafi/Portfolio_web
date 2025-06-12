import React, { useContext } from 'react'
import { Slack } from 'lucide-react';
import { appcontext } from './Context_api';

function Navbar() {

  let { list, active_list, setactive_list } = useContext(appcontext)

  return (
    <div className='w-[90%] transition-all duration-300 ease-in-out z-20 fixed  top-10  h-[45px] rounded-2xl justify-between shadow-lg bg-black text-white flex items-center px-3'>
      <div className='flex justify-center items-center gap-2'><Slack className='text-red-600' /><p className='font-bold cursor-context-menu'>Portfolio.Ar</p> </div>
      <ul className=' flex justify-center capitalize items-center gap-4 text-md '>
        {
          list && list.map((ele, idx) =>
            <li key={idx} className={`cursor-pointer transition-all duration-150 font-bold ease-linear ${active_list === ele ? "line-through text-red-600" : ""} select-none hover:text-red-600 font-medium `} onClick={() => setactive_list(ele)}>{ele}</li>
          )
        }
      </ul>
      <div className='cursor-context-menu hover:bg-black/80 transition-all duration-150 ease-linear select-none active:scale-95 tra flex justify-center items-center gap-3 bg-red-500 rounded-xl text-white text-[10px] py-[8px] px-3'>
        <div className='w-[8px] h-[8px] bg-green-500 rounded-full '></div>
        <p className='tracking-[1px]'> Open For Work</p>
      </div>
    </div>
  )
}

export default Navbar