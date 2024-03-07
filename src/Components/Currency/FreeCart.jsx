import React from 'react'
import freeCart from '../../assets/FreeCart.png'
import { BsArrowRight } from "react-icons/bs";


const FreeCart = () => {

  return (
    <div className=' bg-[#1e54f6]  rounded-2xl'>
      <div className='px-12 py-7 flex flex-col gap-5 items-center'>
        <h1 className='text-2xl  font-bold text-center text-white'>Get Started With KoinX<br /> for Free</h1>
        <p className='text-center text-sm font-medium text-white'>With our range of futures that you can equip for free
          koinx allow you to be more educated aware of your text reports
        </p>
        <img src={freeCart} alt="" className='w-[220px]' />
        
        <div className='flex justify-center'>
          <button className='px-5 py-3 bg-white rounded-lg flex items-center gap-2 '>
            <p className='text-sm font-semibold '> Get started for free</p>
            <BsArrowRight className='font-semibold'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FreeCart
