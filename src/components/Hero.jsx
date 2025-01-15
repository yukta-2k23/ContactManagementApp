import React from 'react'
import avatar from '../src/assets/avatar.png';

const Hero = () => {
  return (
    <div className='h-screen bg-[#EBF0FF] flex flex-col items-center justify-center'>
      <h1 className='text-[6rem] font-sans font-extrabold text-[#2A52BE]'>Hello!</h1>
      <h5 className='text-sm font-medium font-sans  text-[#202841] text-center mt-[-1rem]'>One stop Contact app for managing information <br /> about everyone you know!</h5>
      <img className = "mt-2" src={avatar} alt="avatar" />
    </div>
  )
}

export default Hero
