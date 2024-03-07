import React from 'react'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import { FaArrowRight } from "react-icons/fa6";

const AboutCoin = () => {

    const cart = [
        {
            id:1,
            img:first,
            title:"Calculate your profit",
            bg:"bg-green-300"
        },
        {
            id:1,
            img:second,
            title:"Calculate your profit",
            bg:"bg-red-300"
        },
    ]

  return (
    <div className='flex flex-col gap-5 p-5 '>
      <div>
        <h1 className='text-2xl font-semibold'>About Bitcoin</h1>
      </div>
      <div className='flex flex-col gap-2 border-b-[2px] border-opacity-65'>
        <h1 className='text-xl font-semibold '>What is Bitcoin?</h1>
        <p className='text-sm font-semibold opacity-65 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            necessitatibus voluptatum quidem suscipit perferendis veritatis delectus, recusandae aspernatur cumque, 
            placeat nostrum obcaecati. Rem, aspernatur veniam. Consequatur harum repellat perspiciatis delectus enim nulla minima dicta ipsum,
            sunt unde. Nulla fuga facilis eius minima officiis sapiente minus, corporis officia similique sequi doloremque!
        </p>
      </div>

      <div className='flex flex-col gap-3 border-b-[2px] border-opacity-65'>
        <h1 className='text-xl font-semibold '>Lorem ipsum dolor sit amet.</h1>
        <p className='text-sm font-semibold opacity-65'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid odit ipsum sunt officiis voluptatem consequuntur quibusdam! 
            Repellat, fuga inventore explicabo velit laboriosam temporibus perferendis quis modi id rerum quas facere.
        </p>
        <p className='text-sm font-semibold opacity-65'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid odit ipsum sunt officiis voluptatem consequuntur quibusdam! 
            Repellat, fuga inventore explicabo velit laboriosam temporibus perferendis quis modi id rerum quas facere.
        </p>
        <p className='text-sm font-semibold opacity-65 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid odit ipsum sunt officiis voluptatem consequuntur quibusdam! 
            Repellat, fuga inventore explicabo velit laboriosam temporibus perferendis quis modi id rerum quas facere.
        </p>
      </div>

      <div className=''>
            <h1 className='text-xl font-bold'>Already holding Bitcoin?</h1>
            <div className='flex justify-between gap-7 mt-3'>
                {
                    cart.map( (element,index)=>(
                        <div key={index} className={`${element.bg} flex gap-7 p-2 rounded-md w-6/12 items-center`}>
                            <div>
                                <img src={element.img} alt="" className='w-24 rounded-lg'/>
                            </div>
                            <div>
                                <h1 className='text-base font-bold text-white opacity-90'>{element.title}</h1>
                                <div className='px-4 py-1 bg-white mt-3 flex gap-2 items-center rounded-lg'>
                                    <button className='mb-1'>Check now</button>
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default AboutCoin
