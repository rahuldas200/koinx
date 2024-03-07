import React, { useEffect, useState } from 'react'
import { topTrending } from "../../services/apiCalls/currency"
import { BiSolidUpArrow } from "react-icons/bi";



const TrandingCoins = () => {

  const [topTrendingCoin , setTopTrendingCoin] = useState([]);
  


  useEffect( () =>  {

    const trendingCoins = async () => {
      
      const response = await topTrending();
      const firstThreeCoins = response?.coins.slice(0, 3);
      setTopTrendingCoin(firstThreeCoins);

    }

    trendingCoins();

  },[])




  return (
    <div className='bg- rounded-lg px-12 py-5 bg-white'>
      <h1 className=' text-xl font-semibold text-black'>Trending Coins (24h) </h1>
      <div className='mt-7 flex flex-col gap-3'>
        {
          topTrendingCoin.map( (element) => (
            <div key={element?.item?.coin_id} className='flex justify-between items-center '>
              <div className='flex items-center gap-2'>
                <div className='p-1 w-10'>
                  <img src={element?.item?.small} alt="" className='rounded-full' />
                </div>
                <h1 className='text-lg font-semibold'>{element?.item?.name}</h1>
              </div>
              <div className='flex items-center gap-2 rounded-md bg-green-200 px-2 py-1 text-green-700 font-semibold'>
                <BiSolidUpArrow/>
                <p>{element?.item?.coin_id} % </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TrandingCoins
