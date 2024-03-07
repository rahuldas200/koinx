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

  return (
    <div className='p-5 flex flex-col gap-4'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-semibold'>Performence</h1>
        <div className='flex  justify-between items-center'>
          <div>
            <p>Today's Low</p>
            <p>{CurrencyPerformance?.low_24h}</p>
          </div>
          <div className='w-[70%] h-1 bg-green-800 rounded-md'></div>
          <div>
            <p>Today's High</p>
            <p>{CurrencyPerformance?.high_24h}</p>
          </div>
        </div>
        <div className='flex  justify-between items-center'>
          <div>
            <p>52W Low</p>
            <p>{CurrencyPerformance?.low_24h}</p>
          </div>
          <div className='w-[70%] h-1 bg-green-800 rounded-md'></div>
          <div>
            <p>52W High</p>
            <p>{CurrencyPerformance?.high_24h}</p>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col gap-3'>
        <div className='flex gap-2 items-center '>
          <h1  className='text-2xl font-semibold text-black'>Fundamentals</h1>
          <MdInfo className='text-xl mt-1'/>
       </div>
       <div className='w-full flex gap-16 text-black opacity-70 font-semibold'>
          <div className='flex flex-col gap-2 w-6/12'>
            <div className='flex justify-between py-3'>
              <p>{CurrencyPerformance?.name} <span>Price</span></p>
              <p className='text-black'>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>24h Low / 24h High</p>
              <p>{CurrencyPerformance?.low_24h} / {CurrencyPerformance?.high_24h}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>7d Low / 7d High</p>
              <p>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>Trading Volume</p>
              <p>{CurrencyPerformance?.total_volume}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>Market Cap Rank</p>
              <p> # {CurrencyPerformance?. market_cap_rank}</p>
            </div>

          </div>

          <div className='flex flex-col gap-3 w-6/12'>
            <div className='flex justify-between'>
              <p>Market Cap</p>
              <p>{CurrencyPerformance?.market_cap}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>Market Cap Dominance</p>
              <p>{CurrencyPerformance?.current_price}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>Volume / Market Cap</p>
              <p>{CurrencyPerformance?.market_cap_change_percentage_24h}</p>
            </div>
            <div className='flex justify-between py-3'>
              <p>All-Time Hight</p>
              <div>
                <p>{CurrencyPerformance?.ath} <span>{CurrencyPerformance?.ath_change_percentage}</span> </p>
                <p>{CurrencyPerformance?.ath_date}</p>
              </div>
            </div>
            <div className='flex justify-between py-3'>
              <p>All-Time Low</p>
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
