import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fitness from '../assets/img/login/pic.jpg'
import logo from '../assets/img/header/piccc.png'
import Header from './Header'

const Login = () => {

    const [line , setline] = useState(true)


    return (
        <>
            <Header             data-aos='fade-down' 
            data-aos-offset='100'
            data-aos-delay='200'/>
            <div className=' w-full h-[100vh] bg-neutral-500 flex justify-center items-center '>

                <h2 className={`${line ? "-translate-y-[380px] transition-all" :" -translate-y-[-360px] transition-all" }
                 absolute -left-[500px] top-[210px] font-bold text-[160px] -rotate-90 text-gray-300 
                 opacity-25  hidden lg:block`}>LOGIN &nbsp;&nbsp;&nbsp; SIGNUP</h2>

                <h2 className='absolute -right-14 top-[230px] font-bold text-[160px] rotate-90 text-gray-300 
                opacity-25 hidden lg:block'>TIGER</h2>


                <div             data-aos='fade-up' 
            data-aos-offset='100'
            data-aos-delay='200' className='w-[380px] h-[460px] mt-14 bg-white rounded-xl flex overflow-hidden
                lg:w-[860px] lg:h-[490px]'>

                    <div className='w-[600px] h-full flex flex-col justify-around items-center
                     bg-[#e1e1e1] lg:w-full'>

                        <div className='w-[60px] h-[60px] bg-orange-500 rounded-[50%] flex justify-center items-center p-2'><img src={logo} alt="tiger" /></div>

                        <div className='px-4 w-[350px] h-[320px] bg-zinc-300 mb-10 rounded-md pt-4 shadow-lg shadow-[#636363]'>
                            <div>
                                <label className='font-medium'>User Name:</label>
                                <input placeholder='Enter your user name' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="text" />
                                <label className='font-medium'>Password:</label>
                                <input placeholder='Enter your password' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="password" />
                                <button className='w-full h-[40px] rounded-lg bg-orange-500 mt-4 text-white font-semibold'>Log in</button>
                                <div className='flex justify-between items-center mt-4'>
                                    <input type="checkbox" /><label>Remember Me</label>
                                    <Link className='ml-8 text-sky-600' to='/'>Forgot Password ?</Link>
                                </div>
                            </div>
                            <div className='flex justify-around items-center mt-6 border-t-2 border-orange-500'>

                                <Link className='text-center text-sky-600 w-[200px] lg:hidden mt-2 font-medium text-sm' to='/signup'>Sign Up</Link>
                                <Link onClick={() => setline(!line)} className='text-center text-sky-600 w-[200px] hidden lg:block mt-2 font-medium text-sm' to='#'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    

                    <div className='w-full h-full flex-col justify-around items-center
                     bg-neutral-400 hidden lg:flex'>

                        <div className='px-4 w-[350px] h-[430px] flex flex-col justify-center items-center mt-8 bg-zinc-300 mb-10 rounded-md pt-4 border-2 shadow-lg shadow-[#636363]'>

                                <div className='w-[60px] h-[60px] bg-orange-500 rounded-[50%] flex justify-center items-center p-2 mb-4'><img src={logo} alt="tiger" /></div>
                                <label className='mb-2 font-bold'>SIGN UP</label>
                                <input placeholder='User name' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 my-1 focus:border-orange-500' type="text" />
                                <input placeholder='E-mail' className='pl-2 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="email" />
                                <input placeholder='Enter your password' className='pl-1 w-full h-[40px] rounded-lg outline-none border-2 my-1 focus:border-orange-500' type="password" />
                                <input placeholder='Confirm Password' className='pl-1 w-full h-[40px] rounded-lg outline-none border-2 focus:border-orange-500' type="password" />

                                <button className='w-full h-[40px] rounded-lg bg-orange-500 mt-4 text-white font-semibold'>Sign Up</button>
                                <p className='mt-4 mb-2'>Already have an account? <Link onClick={() => setline(!line)} className='text-center text-sky-600 w-[200px] mt-2 font-medium text-sm' to='#'>Login</Link></p>
                        </div>



                    </div>

                        <div className={`${line ? " translate-x-[430px] transition-all" : " -translate-x-0 transition-all"}
                         absolute w-[430px] h-[490px] rounded-lg overflow-hidden hidden lg:block`}>
                            <img src={fitness} alt="fitness" />
                                <div className='w-[430px] h-full px-4 flex flex-col justify-center items-start absolute -left-2 top-[0px] bg-[#8d8c8c82] ml-2'>
                                    <h2 className='text-zinc-300 font-bold text-[24px] border-orange-500 border-b-2'>Tiger Club</h2>
                                    <p className='text-slate-100 font-light mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum ducimus vero nisi, aliquid commodi dolorem officia corrupti, harum, omnis unde similique illo exercitationem at labore mollitia recusandae. Consectetur, eveniet!</p>

                                </div>


                        </div>


                </div>

            </div>

        </>
    );
};

export default Login;