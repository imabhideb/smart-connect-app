import React, { useEffect } from 'react'
import WelcomeVid from '../Assets/welcome_vid.mp4'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../Assets/login_pic.jpg'
import Chat from '../Assets/chat.png'
import { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import { UserAuth } from '../Context/AuthContext'

const Login = () => {

    const[error,setError] = useState(false)
    const navigate = useNavigate()


    // Google Sign In Process

    // const {googleSignIn, user} = UserAuth()

    // const handleGoogleSignIn = async () => {
    //     try{
    //         await googleSignIn()
    //     }catch(error){
    //         setError(true);
    //     } 
    // }

    // useEffect(() => {
    //     if (user != null) { 
    //         navigate("/Home")  
    //     }
    // }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(true);
        }
        navigate("/Home")
      };



  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className='relative w-full h-full justify-center items-center'>
            <video src={WelcomeVid} loop  muted autoPlay className='w-full h-full object-cover' />
            
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'>
            <h1 className='text-white md:text-[45px] lg:text-[50px] xl:text-[65px] mt-7 sm:text-[40px] text-[23px] justify-center items-center flex font-Connect mb-3'>Welcome to <span className='ml-5 text-blue-400'>Smart</span><span className='ml-5 text-orange-500 '>Connect</span></h1>
                
                <div className='bg-cyan-100 md:w-[570px] lg:w-1/2 sm:w-[600px] w-[300px] mt-5 mb-3  flex  rounded-2xl shadow-lg max-w-3xl sm:p-5 bg-opacity-30 gap-4'>
                    
                    <div className='sm:w-1/2 w-full'>
                        <h2 className='font-bold text-3xl text-black text-center font-Login mb-2'>LOGIN</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 px-4 w-full justify-center'>
                            <input type="email" placeholder='Email' className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                            <input type="password" placeholder='Enter your password' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                            
                            <button className='bg-[#002D74] rounded-xl text-white py-2 font-semibold hover:scale-110 duration-300 justify-center items-center w-full'>Log In</button>
                            {error && <span>Something went wrong</span>}
                        </form>
                        <div className='sm:mt-10 mt-3 grid grid-cols-3 items-center text-gray-700'>
                            <hr className='border-gray-300' />
                            <p className='text-center font-bold text-gray-300 text-lg'>Or</p>
                            <hr className='border-gray-300' /> 
                        </div>
                        
                        
                        {/* <p className='text-[20px] font-semibold text-black justify-center items-center flex mt-[10px]'>Log In with</p> */}
                
                        {/* <div className='flex items-center justify-center gap-4 mt-2'>
                            <button onClick={handleGoogleSignIn} className=' m-2 flex gap-3 hover:scale-110 duration-300 '><AiFillGoogleCircle size={30}/> </button>
                            <button className='m-2 flex gap-3 hover:scale-110 duration-300 '> <FaGithub size={28}/> </button>
                            <button className='m-2  flex gap-3 hover:scale-110 duration-300 '><FaLinkedin size={28}/> </button>
                        </div> */}

                        <p className='text-white mt-3 text-center text-lg'>New to Smart Chat <Link to="/SignUp" className='text-cyan-100 text-[20px] ml-2'>Sign Up!</Link></p>

                        <h3 className='font-Connect sm:text-3xl text-2xl md:text-[28px] lg:text-[40px] text-cyan-100  sm:mt-9 mb-3 mt-3 text-center'>Stay Connected !</h3>
                    </div>

                    {/* for holding image */}
                    <div className='sm:block lg:h-full hidden ml-3  w-1/2'>
                        <img src={LoginImg} alt="pic" className='object-cover h-full rounded-2xl' />
                    </div>

                </div>

            </div>
            <div className='absolute top-2 left-2 flex justify-center items-center'>
                <img src={Chat} alt="chat icon" className='sm:w-[90px] w-[65px] sm:h-[90px] h-[65px]'/>
                <h3 className='text-white md:text-4xl sm:text-3xl text-2xl  font-SmartLogo'>Smart Connect</h3>
            </div>
            
        </div>
    </div>
    )
}

export default Login