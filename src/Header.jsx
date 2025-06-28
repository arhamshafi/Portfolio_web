import React from 'react'
import head_img from "./content/bg_img.png"
import { FaReact } from "react-icons/fa6";
import { Canvas } from '@react-three/fiber';
import FoodModel from "./Burger_model"
import { OrbitControls, Environment } from '@react-three/drei';
import bg_img from "./content/aimodel.jpg"



function Header() {
  return (
    <>
      <div className="w-[99%] hidden lg:block xl:w-[90%] h-[600px] xl:h-[640px] relative select-none ">
        <img className='w-full h-full' src={head_img} alt="" />
        <div className='w-max px-3 absolute top-[23%] z-20 right-5 text-4xl tw bg-black/80 rounded-2xl py-2 text-white '>Crafting  <span className='tr text-red-500'>Engaging</span> Web <span className='tr text-red-500'>Experiences</span></div>
        <div className='w-[15.5%] h-[43%] shadow-md shadow-black p-3 bg-black absolute top-[19.5%] left-[.5%] rounded-3xl '>
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
            <button className='text-sm border scale-80 xl:scale-100 border-red-500 text-red-500 hover:bg-red-500 py-0.5 mt-1 xl:mt-4 hover:text-white cursor-pointer active:scale-95 transition-all duration-150 ease-in block mx-auto px-2 rounded-lg'>
              Discover Project
            </button>
          </a>
        </div>
        <div className='w-[16.5%] h-[21%] shadow-md shadow-red-500 bg-red-500 rounded-3xl absolute top-[19.5%] left-[16.5%] text-white text-8xl flex justify-center items-center'> <FaReact className='tr_r' /> </div>
        <div className='w-[32.5%] h-[28%] shadow-md shadow-black bg-black rounded-3xl absolute top-[69%] p-3 left-[67%]'>
          <h1 className='text-center text-white font-bold text-2xl mt-2'>🏆 Highlight </h1>
          <p className='text-white text-md xl:text-lg mt-5'>- 100+ GitHub Contributions</p>
          <p className='text-white text-md xl:text-lg mt-1'>- APIs integrated with Auth, MongoDB</p>
          <p className='text-white text-md xl:text-lg mt-1'>- Responsive UI for all screen sizes</p>

        </div>
      </div>

      {/* <div className='w-full block lg:hidden h-[550px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg_img})` }}>

      <h1>jijiji</h1>

        <div className='w-[15.5%] h-[43%] shadow-md shadow-black p-3 bg-black absolute top-[19.5%] left-[.5%] rounded-3xl '>
          <h1 className='text-center text-2xl '>🧩</h1>
          <h1 className='text-white text-lg xl:text-xl font-bold text-center underline mt-1'>Latest Project</h1>
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

          <p className='text-white font-bold text-sm'>- Foodie Web 🎇 </p>
          <p className='capitalize text-white/50 mt-1 xl:mt-2 text-[10px] tracking-[.5px] xl:tracking-[0px] xl:text-[12px]' > built with react , tailwind , api integration , redux toolkit </p>
          <a
            href="https://foodie-app-masb.netlify.app/" target="_blank" rel="noopener noreferrer" >
            <button className='text-sm border scale-80 xl:scale-100 border-red-500 text-red-500 hover:bg-red-500 py-0.5 mt-1 xl:mt-4 hover:text-white cursor-pointer active:scale-95 transition-all duration-150 ease-in block mx-auto px-2 rounded-lg'>
              Discover Project
            </button>
          </a>
        </div>
        <div className='w-[16.5%] h-[21%] shadow-md shadow-red-500 bg-red-500 rounded-3xl absolute top-[19.5%] left-[16.5%] text-white text-8xl flex justify-center items-center'> <FaReact className='tr_r' /> </div>
        <div className='w-[32.5%] h-[28%] shadow-md shadow-black bg-black rounded-3xl absolute top-[69%] p-3 left-[67%]'>
          <h1 className='text-center text-white font-bold text-2xl mt-2'>🏆 Highlight </h1>
          <p className='text-white text-md xl:text-lg mt-5'>- 100+ GitHub Contributions</p>
          <p className='text-white text-md xl:text-lg mt-1'>- APIs integrated with Auth, MongoDB</p>
          <p className='text-white text-md xl:text-lg mt-1'>- Responsive UI for all screen sizes</p>

        </div>
      </div> */}


    </>
  )
}

export default Header
