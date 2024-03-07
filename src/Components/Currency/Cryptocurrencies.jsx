import React from 'react'
import FreeCart from './FreeCart'
import TrandingCoins from './TrandingCoins';
import Performance from './Performance';
import Sentiments from './Sentiments';
import AboutCoin from './AboutCoin';
import Tokenomics from './Tokenomics';
import Team from './Team';
import CoinWidgets from './CoinWidgets';


const Cryptocurrencies = () => {
    const arrow = ">>";

  return (
    <div className='w-11/12 mx-auto h-full'>
     <div className='flex gap-2 items-center mt-3'>
        <h4 className=' opacity-65 text-base'>Cryptocurrencies <span className='text-sm font-mono ml-2'>{arrow}</span> </h4>
        <h4 className='text-base font-semibold text-black'>Bitcoin</h4>
     </div>

     <div className='w-full h-full flex gap-5'>

        <div className='w-[65%]  rounded-md h-full mt-2 flex flex-col gap-5'>
          <div className='bg-white rounded-md'>
            <CoinWidgets/>
          </div>
          <div className='bg-white rounded-md'>
            <Performance/>
          </div>
          <div className='bg-white mb-14 rounded-md '>
            <Sentiments/>
          </div>
          <div className='bg-white mb-6 rounded-md'>
            <AboutCoin/>
          </div>
          <div className='bg-white mb-6 rounded-md'>
            <Tokenomics/>
          </div>
          <div className='bg-white mb-6 rounded-md'>
            <Team/>
          </div>
        </div>
        <div className='w-[35%]  h-full ml-5 flex flex-col gap-5'>
          <FreeCart/>
          <TrandingCoins/>
          
        </div>
        
     </div>

    </div>
  )
}

export default Cryptocurrencies
