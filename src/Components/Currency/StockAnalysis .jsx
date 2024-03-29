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

  const getTextColor = (percentage) => {
    if (percentage >= 50) {
        return 'text-green-500'; 
    }
    else if (percentage >= 30) {
        return 'text-white opacity-60'; 
    }
    else return 'text-red-500 opacity-80'; 
  };

 
  const getSize = (percentage) => `w-[${percentage}px]`;

  
  const buyColor = getColor(buyPercentage);
  const buySize = getSize(buyPercentage);

  console.log(buySize)

  const sellColor = getColor(sellPercentage);
  const sellSize = getSize(sellPercentage);

  const holdColor = getColor(holdPercentage);
  const holdSize = getSize(holdPercentage);

 
  const maxPercentage = Math.max(buyPercentage, sellPercentage, holdPercentage);

  const textColor = getTextColor(maxPercentage)
  

  return (
    <div className="flex p-5 flex-flex-col gap-4">
      <div className={ `w-[30%] flex justify-center items-center `}>
        <div className='bg-[#c8d6c6] h-36 w-36  rounded-full  flex justify-center items-center'>
            <p className={`text-4xl font-semibold flex items-center gap-2 ${textColor}`}>{maxPercentage} <span className='text-xl'>%</span> </p>
        </div>
      </div>
      <div className=' w-full flex flex-col gap-3 justify-center'>
        <div className='flex gap-3'>
            <p className='w-[10%] text-sm font-medium opacity-60'>Buy</p>
            <div className='flex gap-3 items-center  w-full'>
                <div className={`h-2 w-[60%]  ${buySize} ${buyColor} rounded-md` }>
                
                </div>
                <p>{buyPercentage} %</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <p className='w-[10%] text-sm font-medium opacity-60'>Hold</p>
            <div className='flex gap-3 items-center  w-full '>
                <div className={`h-2 w-[10%] ${holdSize} ${holdColor} rounded-md` }></div>
                <p>{holdPercentage} %</p>
            </div>
           
        </div>
        <div className='flex gap-3'>
            <p className='w-[10%] text-sm font-medium opacity-60'>Sell</p>
            <div className='flex gap-3 items-center w-full'>
                <div className={`h-2 w-[8%] ${sellSize} ${sellColor} rounded-md` }></div>
                <p>{sellPercentage} %</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;
