import React from 'react'
import WelcomeVid from '../Assets/welcome_vid.mp4'
import Chat from '../Assets/chat.png'
import { useState } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'



const Home = () => {

    const [value, setValue] = useState()

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    },[navigate,value])

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className='relative w-full h-full justify-center items-center'>
            <video src={WelcomeVid} loop  muted autoPlay className='w-full h-full object-cover'/>
            
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'>
              
              <h1 className='text-white md:text-[45px] lg:text-[60px] xl:text-[90px] sm:text-[40px] text-[23px] justify-center items-center flex font-Connect mb-3'>Welcome to <span className='ml-5 text-blue-400'>Smart</span><span className='ml-5 text-orange-500 '>Connect</span></h1>
              
              <div className='bg-cyan-100 rounded-xl md:w-[550px] lg:w-[700px] w-[340px] sm:w-[500px] md:h-[100px] h-[80px] my-8 flex sm:gap-5 gap-2 justify-center items-center bg-opacity-40 p-4'>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" required placeholder='Enter room code' className=' lg:w-[350px] w-[300px] p-2 rounded-xl text-xl'/>
                <button onClick={handleJoinRoom} className='bg-blue-500 md:w-[100px] sm:w-[100px] lg:w-[150px] w-[260px] h-[40px] rounded-xl'>Join</button>
              </div>


            </div>
            <div className='absolute top-2 left-2 flex justify-center items-center'>
              <img src={Chat} alt="chat icon" className='sm:w-[90px] w-[65px] sm:h-[90px] h-[65px]'/>
              <h3 className='text-white md:text-4xl sm:text-3xl text-2xl  font-SmartLogo'>Smart Connect</h3>
            </div>

            <div className='absolute top-2 right-2 flex justify-center items-center'>
              <button onClick={() => signOut(auth)} className='text-white bg-slate-600 rounded-lg p-2 mr-4 mt-5 flex justify-center items-center'> <span className='hidden text-[16px] 2xl:text-[20px] sm:block'>LogOut</span>  <FiLogOut className='sm:ml-2 justify-center items-center' size={25}/></button>
            </div>
        </div>
    </div>
  )
}

export default Home