import React,{ useState } from 'react'
import { FaBook } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import StockAnalysis from './StockAnalysis ';
const Sentiments = () => {

    const data =[

        {
            id:1,
            img:<FaBook className='text-white'/>,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum ",
            paragraph:"Lorem ipsum,   ducimus numquam esse ullam! Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
        },
        {
            id:2,
            img:<FaBook className='text-white'/>,
            title:"Lorem ipsum dolor sit amet consectetur  atque a dolorum laborum.",
            paragraph:"Lorem ipsum, modi similique ducimus numquam esse ullam! Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
        },
        {
            id:3,
            img:<FaBook className='text-white'/>,
            title:"Lorem ipsum dolor sit amet consectetur  atque a dolorum laborum.",
            paragraph:"Lorem ipsum,  Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
        },
    ]

    const [startIndex, setStartIndex] = useState(0);
    const endIndex = Math.min(startIndex + 2, data.length); // Display 2 reviews at a time

    const handleNextReviews = () => {

        if(endIndex == data.length){
            setStartIndex(0);
        }

        if (endIndex < data.length) {
            setStartIndex(startIndex + 1);
            console.log(endIndex);
        }

        
    };

    const buyPercentage = 76;
    const sellPercentage = 8;
    const holdPercentage = 16;

  return (
    <div className='p-5 flex flex-col gap-5'>
        <div>
            <h1 className='text-xl font-bold mb-3'>Sentiments</h1>
            <div className='flex items-center gap-3'>
                <h1 className='text-base font-bold opacity-60'>Key events</h1>
                <MdInfo className='text-xl opacity-60 mt-1'/>
            </div>
        </div>
        <div className=''>
            <div className='flex gap-5'>
                {
                   data.slice(startIndex, endIndex).map((element, index) =>(
                    <div key={index} className='flex gap-5 bg-blue-100 p-3 rounded-lg'>
                            <div className='w-[10%]'>
                                <div className='p-2 bg-blue-700 rounded-full flex justify-center items-center'>
                                    {element.img}
                                </div>
                            </div>
                            <div>
                                <p>{element.title}</p>
                                <p>{element.paragraph}</p>
                            </div>
                    </div>
                    ))
                }

                
            </div>
            <div className='p-2 bg-slate-400 opacity-85 w-10 h-10 rounded-full flex justify-center items-center absolute top-[32%] right-[3px]  '>
                <button className='' onClick={handleNextReviews}>
                    <FaChevronRight className='text-white'/>
                </button>
            </div>

        </div>

        <div>
            <div className='flex items-center gap-3'>
                <p className='text-base font-bold opacity-60' >Analust Estimates</p>
                <MdInfo  className='text-xl opacity-60 mt-1'/>
            </div>
            <div>
                <StockAnalysis buyPercentage={buyPercentage} sellPercentage={sellPercentage} holdPercentage={holdPercentage}/>
            </div>
        </div>
    </div>
  )
}

export default Sentiments
