import React from 'react';
//import banner
import { banner } from '../data';

const Banner = () => {

  const {titlePart1 , titlePart2 , subtitle , textBtn } = banner ;

  return <div className='bg-neutral-500 h-[790px]'>
    <p id='home'></p>
    <div className='container mx-auto h-full'>
      <div className='flex items-center h-full relative
      -space-x-48 lg:-space-x-24'>
        <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
          <h1 className='h1 text-white mb-8' data-aos='fade-down' data-aos-delay='500'>
            {titlePart1} <br/> <span className='text-[#ff5722]'>{titlePart2}</span>
          </h1>
          <p className='max-w-[415px] text-body-mb lg:text-body-lg mb-8' data-aos='fade-down' data-aos-delay='650'>{subtitle}</p>
          <button className='btn btn-sm lg:btn-lg btn-secondary animate-bounce' data-aos='fade-down' data-aos-delay='750'>{textBtn}</button>
        </div>
        <div className='bg-blue-300 w-full h-full bg-banner shadow-2xl shadow-[#ff5722] border-x-2 border-[#ff5722] bg-cover bg-right 
        lg:bg-center bg-no-repeat flex-1' data-aos='fade-right' data-aos-delay='900'></div>
      </div>
    </div>
    <span id='about'></span>
  </div>;
};

export default Banner;
