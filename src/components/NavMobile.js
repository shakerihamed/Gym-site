import React from 'react';
//import data
import {nav} from '../data'
import { Link } from 'react-router-dom';

const NavMobile = ({navMobile}) => {
  return <nav className={
  `${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-500
  fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0 `}>
    
    <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8 mb-10'>
      {nav.map((item ,idx ) => {
        return(
          <li key={idx}>
            <a className='text-white text-body-md hover:text-[#ff5722] ' href={item.href}>{item.name}</a>
          </li>
        )
      })}
    </ul>
    <div className='-mt-44 flex justify-center gap-x-8'>
      <Link to='/login' className='btn btn-lg text-white border-[1px] border-[#ff5722] rounded-lg'>Log In</Link>
      <Link to='/login' className='btn btn-lg rounded-lg text-white bg-[#ff5722] hover:bg-[#e44514] transition-all'>Sign Up</Link>
    </div>
  

  </nav>;
};


export default NavMobile;
