import React from 'react';
import { useEffect, useState } from 'react';
//import header data
import { header } from '../data';
//import component 
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
//import Icons
import {RiMenu4Fill , RiCloseFill} from 'react-icons/ri';



const Header = () => {
  //header state
  const [isActive , setIsActive] = useState(false);
  //nav Mobile
  const [navMobile , setNavMobile] = useState(false);

  //scroll event
  useEffect(() =>{
    window.addEventListener("scroll" , () => {
      window.scrollY > 80 ? setIsActive(true) :
      setIsActive(false)
    })
  })

  const {logo , btnLoginText , btnSignupText} = header ;
  
  return <div className={
    `${isActive ? "bg-neutral-500 py-[14px]"    
    : "bg-transparent py-[20px]"} fixed max-w-[1440px] z-30 left-0 right-0
     mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all
     duration-300`}>
    {/* {logo} */}

    <a href=''>
      <img className='h-[60px]' src={logo} alt='logo' />
      <p className='ml-[14px] font-extrabold text-primary-200'>TIGER</p>
    </a>
    {/* {nav - initially hidden} */}
    <Nav />
    {/* {btns - initially hidden} */}
    <div className='hidden lg:flex space-x-4'>
      <button className='btn btn-sm text-white hover:text-primary-200 transition'>{btnLoginText}</button>
      <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
    </div>
    {/* {nav menu btn} */}

    <div 
    onClick={() => setNavMobile(!navMobile)} 
    className='lg:hidden absolute right-4'>
        {navMobile ? (<RiCloseFill 
        className='text-primary-200 text-3xl cursor-pointer' />) 
        :(<RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer'/>)
        } 
    </div>
    {/* {navMobile} */}

    <NavMobile navMobile={navMobile}/>

  </div>;
};

export default Header;