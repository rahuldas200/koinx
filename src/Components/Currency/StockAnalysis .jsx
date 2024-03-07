import React from 'react';

const StockAnalysis = ({ buyPercentage, sellPercentage, holdPercentage }) => {
  
  const getColor = (percentage) => {
    if (percentage >= 50) {
        return 'bg-green-500'; 
    }
    else if (percentage >= 30) {
        return 'bg-yellow-500'; 
    }
    else return 'bg-red-500'; 
  };

 
  const getSize = (percentage) => `w-[${percentage}%]`;

  
  const buyColor = getColor(buyPercentage);
  const buySize = getSize(buyPercentage);

  const sellColor = getColor(sellPercentage);
  const sellSize = getSize(sellPercentage);

  const holdColor = getColor(holdPercentage);
  const holdSize = getSize(holdPercentage);

 
  const maxPercentage = Math.max(buyPercentage, sellPercentage, holdPercentage);
  const circleColor = getColor(maxPercentage);
  

  return (
    <div className="flex p-5">
      <div className={ `w-[30%] flex justify-center items-center `}>
        <div className='bg-[#c8d6c6]  rounded-full p-12 '>
            <p className='text-xl font-bold'>{maxPercentage} %</p>
        </div>
      </div>
      <div className=' w-full flex flex-col gap-3'>
        <div className='flex gap-3'>
            <p className='w-[10%]'>Buy</p>
            <div className='flex gap-3 items-center  w-full'>
                <div className={`h-2 w-[60%]  ${buyColor} rounded-md` }>
                
                </div>
                <p>{buyPercentage} %</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <p className='w-[10%]'>Hold</p>
            <div className='flex gap-3 items-center  w-full'>
                <div className={`h-2 ${holdSize} ${holdColor} rounded-md` }></div>
                <p>{holdPercentage} %</p>
            </div>
           
        </div>
        <div className='flex gap-3'>
            <p className='w-[10%]'>Sell</p>
            <div className='flex gap-3 items-center w-full'>
                <div className={`h-2 ${sellSize} ${sellColor} rounded-md` }></div>
                <p>{sellPercentage} %</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;
