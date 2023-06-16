import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/header/piccc.png'
import Header from './Header'

const Signup = () => {
    return (
        <>
            <Header />
            <div className=' w-full h-[100vh] bg-neutral-500 justify-center items-center flex lg:hidden'>

            <div className='w-full h-full flex flex-col justify-around items-center
                     bg-neutral-400 mt-5'>

                        <div className='px-4 w-[350px] h-[430px] flex flex-col justify-center items-center mt-8 bg-zinc-300 mb-10 rounded-md pt-4 border-2 shadow-lg shadow-[#636363]'>

                                <div className='w-[60px] h-[60px] bg-orange-500 rounded-[50%] flex justify-center items-center p-2 mb-4'><img src={logo} alt="tiger" /></div>
                                <label className='mb-2 font-bold'>SIGN UP</label>
                                <input placeholder='User name' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 my-1 focus:border-orange-500' type="text" />
                                <input placeholder='E-mail' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="email" />
                                <input placeholder='Enter your password' className='pl-1 w-full h-[40px] rounded-lg outline-none border-2 my-1 focus:border-orange-500' type="password" />
                                <input placeholder='Confirm Password' className='pl-1 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="password" />

                                <button className='w-full h-[40px] rounded-lg bg-orange-500 mt-4 text-white font-semibold'>Sign Up</button>
                                <p className='mt-4 mb-2'>Already have an account?<Link className='text-center text-sky-600 w-[200px] mt-2 font-medium text-sm' to='/login'>Login</Link></p>
                        </div>



                    </div>
            </div>
        </>
    );
};

export default Signup;