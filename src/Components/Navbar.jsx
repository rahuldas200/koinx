import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-16 shadow-md bg-white'>
        <div className='w-11/12  mx-auto h-full flex items-center relative'>
            <div className='w-6/12'>
                <img src={logo} alt="" className='w-[90px]' />
                <span className='absolute top-0 left-24 font-bold  space-x-2 text-xs'>TM</span>
            </div>
            <div className='w-6/12 flex   items-center gap-20 justify-between'>
                <div className='flex  gap-10 ml-10  font-semibold text-base'>
                    <a href="/">Crypto Taxes</a>
                    <a href="/">Free Tools</a>
                    <a href="/">Resource Center</a>
                </div>
                <div className='px-4 py-1 bg-blue-800 rounded-md text-blue-50'>
                    <button>Get started</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
