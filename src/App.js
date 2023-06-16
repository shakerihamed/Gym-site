import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


import Layout from './components/Layout';
import Login from './components/Login';
import Sign_up from './components/Sign_up';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay:500
  })
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      
    <Routes>
      <Route path='/' element={<Layout /> } />
      <Route path='/login' element={<Login /> } />
      <Route path='/signup' element={<Sign_up /> } />

    </Routes>

      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
