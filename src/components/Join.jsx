import React from 'react';
//import data
import { join } from '../data';

const Join = () => {
  const {image , subtitle , btnText } = join ;
  return <section className='bg-neutral-500 min-h-[537px]'>
    <div className='container mx-auto'>

      <div className='flex flex-col md:flex-row md-items-center md:-space-x-12 -space-y-24 lg:-space-y-0'>
        
        <div className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full border-[#ff5722] border-2'
        data-aos='fade-right' 
        data-aos-offset='100'
        data-aos-delay='200' >
        <img src={image} alt='img'/>

        </div>
        <div className='max-w-[350px] lg:max-w-[492px] ml-[30px] flex justify-around items-center flex-col'
            data-aos='fade-left' 
            data-aos-offset='100'
            data-aos-delay='200'>
          <h2 className='h1 md:text-[60px] md:leading-[62px] md-4 lg:md-6 text-white'>
            Wanna join<span className='text-[#ff5722]'>&</span> have fun ?
          </h2>
          <p className='text-body-sm md:text-body-md text-white lg:md-6 
          max-w-[348px] md:max-w-[470px] lg:max-w-[492px]'>{subtitle}</p>
          <button className='btn btn-secondary btn-lg animate-bounce'>{btnText}</button>
        </div>
      </div>
    </div>
  </section>;
};

export default Join;
