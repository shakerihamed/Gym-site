import React from 'react';
//about data
import {about} from '../data'
//import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {

  const { title , subtitle1 , subtitle2 , icon , link } = about
  return <section className='py-[80px] md:py-[110] lg:pt-[140] lg:pb-[180]'>
    
    <div className='container mx-auto px-[20px] lg-px[135px]'>
      <p id='about'></p>
      <div className='section-title-group justify-start' data-aos='fade-up' data-aos-delay='100'>
        <img src={icon} alt="icon"/>
        <h2 className='h2 section-title'>{title}<span className='text-[#ff5722]'>.</span></h2>
      </div>
      {/* {subtitle1} */}
      <p className='md:text-body-md mb-12'
      data-aos='fade-up' data-aos-delay='200'>{subtitle1}</p>
      {/* {subtitle2} */}
      <p className='md:text-body-md mb-8'
      data-aos='fade-up' data-aos-delay='300'
      >{subtitle2}</p>
      {/* {link} */}
      <div data-aos='fade-up' data-aos-delay='400'>
        <a className='link flex items-center gap-x-4 hover:gap-x-6 transition-all' href='#'>
          {link}
          <IoIosArrowDroprightCircle className='text-2xl' />
          </a>
      </div>
    </div>
    <span id='work'></span>
  </section>;
};

export default About;
