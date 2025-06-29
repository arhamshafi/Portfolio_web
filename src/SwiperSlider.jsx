// SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Canvas } from '@react-three/fiber';
import FoodModel from "./Burger_model"
import { OrbitControls, Environment } from '@react-three/drei';

// import './styles.css';

const SwiperSlider = () => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className=' shadow-md shadow-black p-3  '>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className=' shadow-md shadow-black h-full w-full bg-red-700 p-3'>
          <h1 className='text-center text-white font-bold text-2xl mt-2'>🏆</h1>
          <h1 className='text-center text-white font-bold text-2xl mt-2 tw'> Highlight </h1>
          <p className='text-white tw text-sm mt-5'>- 100+ GitHub Contributions</p>
          <p className='text-white tw text-sm mt-2'>- APIs integrated with Auth, MongoDB</p>
          <p className='text-white tw text-sm mt-2'>- Responsive UI for all screen sizes</p>

        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
