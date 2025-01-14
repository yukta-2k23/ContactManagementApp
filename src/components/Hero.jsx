import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen bg-[#EBF0FF] flex flex-col items-center justify-center'>
      <h1 className='text-[6rem] font-sans font-extrabold text-[#2A52BE]'>Hello!</h1>
      <h5 className='text-sm font-medium font-sans  text-[#202841] text-center mt-[-1rem]'>One stop Contact app for managing information <br /> about everyone you know!</h5>
      <img className = "mt-2" src="../src/assets/avatar.png " alt="avatar" />
    </div>
  )
}

export default Hero
