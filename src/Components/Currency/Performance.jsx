import React, { useEffect, useState } from 'react'
import { Coinperformence } from '../../services/apiCalls/currency'
import data from '../../data/currencyPerformence.json'
import { MdInfo } from "react-icons/md";


const Performance = () => {

  const [CurrencyPerformance, setCurrencyPerformance] = useState([])

  console.log(CurrencyPerformance)

  useEffect ( () =>{
    const fetchData = async () => {
      // const res = await Coinperformence();
      // setCurrencyPerformance(res);
      setCurrencyPerformance(data);
    }

    fetchData();

  },[])
  
  
  {CurrencyPerformance?.low_24h}
  {CurrencyPerformance?.high_24h}
  return (
    <div className='p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl opacity-90 font-bold text-black'>Performence</h1>
        <div className='flex items-center text-base font-semibold  '>
          <div className=' w-[15%] flex flex-col gap-4  '>
            <div>
              <p className='opacity-65'>
                Today's low
              </p>
              <p className='opacity-95'>{CurrencyPerformance?.low_24h}</p>
            </div>
            <div>
              <p className='opacity-65'>
                52w low
              </p>
              <p>{CurrencyPerformance?.high_24h}</p>
            </div>
          </div>
          <div className='w-[70%] h-full flex flex-col gap-14 px-5'>
            <div className='h-2 w-full bg-green-800 rounded-xl'></div>
            <div className='h-2 w-full bg-green-800 rounded-xl'></div>
          </div>
          <div className='flex flex-col gap-4 w-[15%] items-center'>
          <div className=''>
              <p className='text-base font-semibold opacity-65'>
                Today's low
              </p>
              <p>{CurrencyPerformance?.low_24h}</p>
            </div>
            <div>
              <p className='opacity-65'>
                Today's low
              </p>
              <p>{CurrencyPerformance?.low_24h}</p>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className='flex flex-col gap-3'>
        <div className='flex gap-2 items-center '>
          <h1  className='text-xl opacity-60 font-bold text-black'>Fundamentals</h1>
          <MdInfo className='text-xl mt-1 opacity-60'/>
       </div>
       <div className='w-full flex gap-16 text-black  font-semibold'>
          <div className='flex flex-col gap-2 w-6/12'>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>{CurrencyPerformance?.name} <span>Price</span></p>
              <p className='text-black'>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>24h Low / 24h High</p>
              <p>{CurrencyPerformance?.low_24h} / {CurrencyPerformance?.high_24h}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>7d Low / 7d High</p>
              <p>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>Trading Volume</p>
              <p>{CurrencyPerformance?.total_volume}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>Market Cap Rank</p>
              <p> # {CurrencyPerformance?. market_cap_rank}</p>
            </div>

          </div>

          <div className='flex flex-col gap-3 w-6/12'>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>Market Cap</p>
              <p>{CurrencyPerformance?.market_cap}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>Market Cap Dominance</p>
              <p>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>Volume / Market Cap</p>
              <p>{CurrencyPerformance?.market_cap_change_percentage_24h}</p>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>All-Time Hight</p>
              <div>
                <p>{CurrencyPerformance?.ath} <span>{CurrencyPerformance?.ath_change_percentage}</span> </p>
                <p>{CurrencyPerformance?.ath_date}</p>
              </div>
            </div>
            <div className='flex justify-between py-3 border-b-[2px]  border-b-opacity-75'>
              <p className='opacity-65'>All-Time Low</p>
              <div>
                <p>{CurrencyPerformance?.atl} <span>{CurrencyPerformance?.atl_change_percentage}</span> </p>
                <p>{CurrencyPerformance?.atl_date}</p>
              </div>
            </div>

          </div>
       </div>
      </div>
    </div>
  )
}

export default Performance
