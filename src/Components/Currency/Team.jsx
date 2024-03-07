import React from 'react'
import jon from '../../assets/Jon.png'
import Elina from '../../assets/Elina William.png'
import Jon2 from '../../assets/Jhon Sumit.png'

const Team = () => {

    const data = [
        {
            id:1,
            name:"Jhon Sumit",
            img:Jon2,
            signeture:"Designetion hear",
            about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ad. Numquam pariatur cumque consequatur dicta, saepe at quidem ratione unde placeat. Animi alias saepe ullam omnis praesentium vero adipisci quo, accusantium odit exercitationem, veniam ex sint neque ipsum qui amet minus tenetur voluptate excepturi commodi molestias iusto beatae sunt. Facere."

        },
        {
            id:2,
            name:"Elina Williams",
            img:Elina,
            signeture:"Designetion hear",
            about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ad. Numquam pariatur cumque consequatur dicta, saepe at quidem ratione unde placeat. Animi alias saepe ullam omnis praesentium vero adipisci quo, accusantium odit exercitationem, veniam ex sint neque ipsum qui amet minus tenetur voluptate excepturi commodi molestias iusto beatae sunt. Facere."

        },
        {
            id:3,
            name:"Jhon Sumit",
            img:jon,
            signeture:"Designetion hear",
            about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ad. Numquam pariatur cumque consequatur dicta, saepe at quidem ratione unde placeat. Animi alias saepe ullam omnis praesentium vero adipisci quo, accusantium odit exercitationem, veniam ex sint neque ipsum qui amet minus tenetur voluptate excepturi commodi molestias iusto beatae sunt. Facere."

        }
    ]

  return (
    <div className='p-5'>
      <div>
        <h1 className='text-xl font-bold'>Team</h1>
      </div>
      <div>
        <p className='font-semibold text-sm opacity-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolores illum repudiandae earum recusandae, dolore ratione deleniti ex nobis maxime.</p>
        <div className='flex flex-col gap-3 mt-2'>
            {
                data.map((element,index) => (
                    <div className='flex gap-5 bg-blue-100  items-center p-3 w-full rounded-lg'>
                        <div className='flex flex-col gap-1 items-center justify-center w-[80%]'>
                            <img src={element.img} alt="" className='w-32 rounded-md' />
                            <h1 className='text-lg font-bold'>{element.name}</h1>
                            <p className='opacity-80 font-semibold text-sm'>{element.signeture}</p>
                        </div>
                        <p className='p-2'>
                            {element.about}
                        </p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Team
