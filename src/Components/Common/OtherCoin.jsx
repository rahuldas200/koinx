import React from 'react'
import TradingViewWidget from './TradingViewWidget '

const OtherCoin = () => {
  
  const data = [
    {
      id:1,
      item:<TradingViewWidget/>,
    },
    {
      id:2,
      
    },
    {
      id:3,
     
    },
    {
      id:4,
    },

    {
      id:5,
    },
    {
      id:6,
    },


  ]

  return (
    <div className='w-full bg-white '>
      <div className='w-11/12 mx-auto'>
        <h1>You may also like</h1>
          <div className='flex gap-5 flex-wrap '>
              {
                data.map( (element) =>(
                  <div key={element.id} className='bg-gray-800 mt-5 border-[2px] border-red-700'>
                    {element.item} ppp
                  </div>
                ))
              }
          </div>
      </div>
    </div>
  )
}

export default OtherCoin
