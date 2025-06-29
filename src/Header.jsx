import React, { useEffect, useState } from 'react'
import head_img from "./content/bg_img.png"
import { FaReact } from "react-icons/fa6";
import { Canvas } from '@react-three/fiber';
import FoodModel from "./Burger_model"
import { OrbitControls, Environment } from '@react-three/drei';
import bg_img from "./content/aimodel.jpg"
import SwiperSlider from "./SwiperSlider"; // path sahi rakhna



function Header() {

  let [anime1, setanime1] = useState(true)
  let [anime2, setanime2] = useState(true)
  let [anime3, setanime3] = useState(true)
  let [anime4, setanime4] = useState(true)
  let [anime5, setanime5] = useState(true)
  let [anime6, setanime6] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setanime1(false)
    }, 2500);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setanime2(false)
    }, 4000);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setanime3(false)
    }, 5000);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setanime4(false)
    }, 5500);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setanime5(false)
    }, 5600);
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setanime6(false)
    }, 5700);
    return () => clearTimeout(timer)
  }, [])



  return (
    <>
      <div className="w-[99%] hidden lg:block xl:w-[90%] h-[600px] xl:h-[640px] relative select-none ">
        <img className={`w-full h-full ${anime1 ? "scale-50 opacity-0" : "scale-100 opacity-100"} transition-all duration-400 ease-in `} src={head_img} alt="" />
        <div className={`w-max px-4 xl:px-5 absolute top-[23%] z-20 right-5 text-4xl tw bg-black/80 anime_yx rounded-2xl py-2 text-white transition-all duration-300 ease-in ${anime3 ? "opacity-0" : " opacity-100 "}`} style={{ animationDelay: ".5s" }} >Crafting  <span className='tr text-red-500'>Engaging</span> Web <span className='tr text-red-500'>Experiences</span></div>
        <div className={`w-max py-1 px-4 anime_yx bg-black/80 rounded-3xl absolute bottom-[25%] left-5 z-20 text-white flex items-center gap-5 transition-all duration-400 ease-in ${anime4 ? " -translate-x-25 opacity-0" : "translate-x-0 opacity-100"} `} style={{ animationDelay: ".3s" }}>
          <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
          <p className='text-white text-md tracking-[.5px] capitalize font-bold '>Specializing in responsive web applications</p>
        </div>
        <div className={`w-max py-1 anime_yx px-4  bg-black/80 rounded-3xl absolute bottom-[17%] left-5 z-20 text-white flex items-center gap-5 transition-all duration-400 ease-in ${anime5 ? " -translate-x-25 opacity-0" : "translate-x-0 opacity-100"}`} style={{ animationDelay: ".5s" }}>
          <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
          <p className='text-white text-md tracking-[.5px] capitalize font-bold '>Driving user engagement with pixel-perfect UI/UX</p>
        </div>
        <div className={`w-max py-1 px-4 anime_yx bg-black/80 rounded-3xl absolute bottom-[9%] left-5 z-20 text-white flex items-center gap-5 transition-all duration-400 ease-in ${anime6 ? " -translate-x-25 opacity-0" : "translate-x-0 opacity-100"}`} style={{ animationDelay: ".7s" }}>
          <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
          <p className='text-white text-md tracking-[.5px] capitalize font-bold '>Passion for clean code and innovative solutions</p>
        </div>
        <div className={`w-[15.5%] h-[43%] bsb p-3 bg-black anime_yx absolute top-[19.5%] left-[.5%] rounded-3xl transition-all duration-400 ease-in ${anime2 ? " -translate-x-15 opacity-0 " : "translate-x-0 opacity-100"} `} style={{ animationDelay: ".4s" }}>
          <h1 className='text-center text-2xl '>🧩</h1>
          <h1 className='text-white text-lg xl:text-xl font-bold text-center underline mt-1'>Latest Project</h1>
          {/* ////////////// */}
          <div className="w-full h-[70px] flex items-center justify-center ">
            <div className="w-full h-full max-w-5xl rounded-xl ">
              <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} intensity={1} />
                <FoodModel scale={1} position={[0, -1, 0]} />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={3}
                  enablePan={false}
                />
                <Environment preset="sunset" />
              </Canvas>
            </div>
          </div>
          {/* ////////////////// */}

          <p className='text-white font-bold text-sm'>- Foodie Web 🎇 </p>
          <p className='capitalize text-white/50 mt-1 xl:mt-2 text-[10px] tracking-[.5px] xl:tracking-[0px] xl:text-[12px]' > built with react , tailwind , api integration , redux toolkit </p>
          <a
            href="https://foodie-app-masb.netlify.app/" target="_blank" rel="noopener noreferrer" >
            <button className='text-sm border scale-80 xl:scale-100 bsr border-red-500 text-red-500 hover:bg-red-500 py-0.5 mt-1 xl:mt-3 hover:text-white cursor-pointer active:scale-95 transition-all duration-150 ease-in block mx-auto px-2 rounded-lg'>
              Discover Project
            </button>
          </a>
        </div>
        <div className={`w-[16.5%] anime_yx h-[21%] bsr bg-red-500 rounded-3xl absolute top-[19.5%] left-[16.5%] text-white text-8xl flex justify-center items-center   transition-all duration-400 ease-in ${anime2 ? " scale-75 opacity-0 " : "scale-100 opacity-100"} `} style={{ animationDelay: ".8s" }} > <FaReact className='tr_r' /> </div>
        <div className={`w-[32.5%] h-[28%] anime_yx bsb bg-black rounded-3xl absolute top-[69%] p-3 left-[67%]  transition-all duration-400 ease-in ${anime2 ? " translate-x-15 opacity-0 " : "translate-x-0 opacity-100"} `} style={{ animationDelay: ".4s" }}>
          <h1 className='text-center text-white font-bold text-2xl tw mt-2'>🏆 Highlight </h1>
          <p className='text-white text-md xl:text-lg mt-5'>- 100+ GitHub Contributions</p>
          <p className='text-white text-md xl:text-lg mt-1'>- APIs integrated with Auth, MongoDB</p>
          <p className='text-white text-md xl:text-lg mt-1'>- Responsive UI for all screen sizes</p>

        </div>
      </div>

      <div className='w-full select-none block px-3 py-1 lg:hidden h-[530px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg_img})` }}>

        <h1 className='mt-35 text-white text-3xl anime_yx bg-black/80 py-2 px-7 tw w-max mx-auto rounded-3xl font-bold' style={{ animationDelay: ".3s" }}>Crafting  <span className='text-red-500 tr'>Engaging</span> Web <span className='text-red-500 tr'>Experiences</span></h1>
       <div className='w-full h-max mt-20 flex justify-between items-center'>
          <div className='w-max h-max '>
            <div className={`w-max py-1 px-4 anime_yx bg-black/80 rounded-3xl  text-white flex items-center gap-5 transition-all duration-400 ease-in  `} style={{ animationDelay: ".3s" }}>
              <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
              <p className='text-white text-sm tracking-[.5px] capitalize font-bold '>Specializing in responsive web applications</p>
            </div>
            <div className={`w-max py-1 anime_yx px-4  bg-black/80 rounded-3xl mt-3  text-white flex items-center gap-5 transition-all duration-400 ease-in`} style={{ animationDelay: ".5s" }}>
              <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
              <p className='text-white text-sm tracking-[.5px] capitalize font-bold '>Driving user engagement with pixel-perfect UI/UX</p>
            </div>
            <div className={`w-max py-1 px-4 anime_yx bg-black/80 rounded-3xl mt-3 text-white flex items-center gap-5 transition-all duration-400 ease-in `} style={{ animationDelay: ".7s" }}>
              <div className='w-[10px] h-[10px] rounded-full bg-red-500'></div>
              <p className='text-white text-sm tracking-[.5px] capitalize font-bold '>Passion for clean code and innovative solutions</p>
            </div>
          </div>
          <div className='w-[350px] h-max pr-3'>
            <SwiperSlider />
          </div>
        </div>
      </div>


    </>
  )
}

export default Header
