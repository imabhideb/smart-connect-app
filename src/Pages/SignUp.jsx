import React, { useState, useEffect } from 'react'
import WelcomeVid from '../Assets/welcome_vid.mp4'
import Chat from '../Assets/chat.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Google from '../Assets/google_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { UserAuth } from '../Context/AuthContext'


const SignUp = () => {
  
  const[error,setError] = useState(false)
  const navigate = useNavigate()
  
  // Google Sign Up process
  // const {googleSignIn, user} = UserAuth()
  // const handleGoogleSignIn = async () => {
  //   try{
  //     await googleSignIn()
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   if(user != null){
  //     navigate("/Home")
  //   }
  // },[navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[1].value
    const password = e.target[2].value

    try{
      await createUserWithEmailAndPassword(auth, email, password)
    }catch(error){
      setError(true)
    }
    navigate("/Home")
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className='relative w-full h-full justify-center items-center'>
            <video src={WelcomeVid} loop  muted autoPlay className='w-full h-full object-cover'/>
            
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'>
              
              {/* <h1 className='text-white text-[70px] justify-center items-center flex font-Connect mb-3'>Welcome to <span className='ml-5 text-blue-400'>Smart</span><span className='ml-5 text-orange-500 '>Connect</span></h1> */}
              <h1 className='text-white md:text-[45px] lg:text-[50px] xl:text-[65px] mt-7 sm:text-[40px] text-[23px] justify-center items-center flex font-Connect mb-3'>Welcome to <span className='ml-5 text-blue-400'>Smart</span><span className='ml-5 text-orange-500 '>Connect</span></h1>
              
              <div className='bg-cyan-100 rounded-xl md:w-1/2 lg:w-[500px] w-[361px] my-8 flex flex-col justify-center items-center bg-opacity-40 p-4'>
                <p className='text-5xl font-bold font-SignUp mb-5 p-2'>Sign Up</p>
                
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 px-4'>
                            
                    <input type="text" placeholder='Enter your name'  className="mt-1 block w-[340px] md:w-[340px] lg:w-[400px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                    <input type="email" placeholder='Email'  className="mt-1 block md:w-[340px] lg:w-[400px] w-[340px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                    <input type="password" placeholder='Enter your password'  className="mt-1 block md:w-[340px] lg:w-[400px] w-[340px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                    <input className='hidden' type="file" id='file' />
                  

                    <button className='bg-[#002D74] rounded-xl text-white py-2 font-semibold hover:scale-110 duration-300'>Sign Up</button>

                    {error && <span>Something went wrong</span>}

                </form>

                <div className='sm:mt-10 mt-3 mb-2 grid grid-cols-3 w-full items-center text-gray-700'>
                    <hr className='border-gray-300' />
                    <p className='text-center font-seold text-white text-lg'>Or</p>
                    <hr className='border-gray-300' /> 
                </div>

                {/* <p className='text-[20px] font-bold mt-3'>Sign up with</p>
                
                <div className='flex items-center justify-center gap-4 mt-3 mb-2'>
                  <button onClick={handleGoogleSignIn} className='m-2 mr-1 flex gap-3 hover:scale-110 duration-300'><img src={Google} alt="google-logo" className='w-[34px] h-[34px] ' /> </button>
                  <button className='m-2 flex gap-3 hover:scale-110 duration-300'> <FaGithub size={28}/> </button>
                  <button className='m-2  flex gap-3 hover:scale-110 duration-300'><FaLinkedin size={28}/> </button>
                </div> */}
                
                <p className='text-xl text-white'>Already have an account ? <Link to="/Login" className='text-cyan-300 '>Log In</Link></p>

              </div>


            </div>
            <div className='absolute top-2 left-2 flex justify-center items-center'>
              <img src={Chat} alt="chat icon" className='w-[90px] h-[90px]'/>
              <h3 className='text-white text-4xl  font-SmartLogo'>Smart Connect</h3>
            </div>
        </div>
    </div>
  )
}

export default SignUp