import React from 'react';

import {nav} from '../data';

const Nav = () => {

  return <div className='hidden lg:flex '>
    <ul className='flex text-white gap-x-8 '>
      {nav.map((item ,idx ) => {
        return(
          <li key={idx}>
            <a className='hover:text-[#ff5722] transition' href={item.href}>{item.name}</a>
          </li>
        )
      })}
    </ul>
  </div>;
};

export default Nav;
