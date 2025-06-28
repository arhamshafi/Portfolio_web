import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Loader from './Loader'


function App() {

  // let [loader, setloader] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloader(false)
  //   }, 2000);

  //   return () => clearTimeout(timer)
  // },[])

  return (
    <div className='w-full bg-white flex items-center flex-col  pt-1 '>
      {/* {loader && (
        <div className='w-full h-screen z-30 fixed top-0 left-0 bg-black flex justify-center items-center'><Loader /></div>
      )} */}
      <Navbar />
      <Header />
    </div>
  )
}

export default App