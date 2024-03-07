import React,{ useState } from 'react'
import { FaBook } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import StockAnalysis from './StockAnalysis ';
const Sentiments = () => {

    const data =[

        {
            id:1,
            img:<FaBook/>,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum ",
            paragraph:"Lorem ipsum,   molestias beatae cupiditate suscipit hic modi similique ducimus numquam esse ullam! Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
        },
        {
            id:2,
            img:<FaBook/>,
            title:"Lorem ipsum dolor sit amet consectetur  atque a dolorum laborum.",
            paragraph:"Lorem ipsum,  aperiam ea sed, molestias beatae cupiditate suscipit hic modi similique ducimus numquam esse ullam! Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
        },
        {
            id:3,
            img:<FaBook/>,
            title:"Lorem ipsum dolor sit amet consectetur  atque a dolorum laborum.",
            paragraph:"Lorem ipsum,  aperiam ea sed, molestias beatae cupiditate suscipit hic modi similique ducimus numquam esse ullam! Praesentium minima blanditiis eos recusandae animi doloremque totam modi corporis!",
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

    const buyPercentage = 60;
    const sellPercentage = 30;
    const holdPercentage = 10;

  return (
    <div className=''>
        <div>
            <h1>Sentiments</h1>
            <div>
                <h1>Fandamentals</h1>
                <MdInfo/>
            </div>
        </div>
        <div>
            <div className='flex'>
                {
                   data.slice(startIndex, endIndex).map((element, index) =>(
                    <div key={index} className='flex'>
                            <div className=''>
                                {element.img}
                            </div>
                            <div>
                                <p>{element.title}</p>
                                <p>{element.paragraph}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={handleNextReviews}> <FaChevronRight/> </button>
            </div>
        </div>

        <div>
            <div>
                <p>Analust Estimates</p>
                <MdInfo/>
            </div>
            <div>
                <StockAnalysis buyPercentage={buyPercentage} sellPercentage={sellPercentage} holdPercentage={holdPercentage}/>
            </div>
        </div>
    </div>
  )
}

export default Sentiments
