import Image from 'next/image'
import React from 'react'
import briyani from "../public/index"


const TrackItem = () => {
  return (
    <div className="flex py-5 gap-3 lg:gap-3 border-b">
        
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                {/* <Image
                    src = {briyani}
                    alt={briyani}
                    width={100}
                    height={100}
                    className="rounded-lg"
                /> */}
                <img src="../GobiManchurian/g1.jpeg" width={100} height={100} className="rounded-2xl"/>
        </div>
        {/* IMAGE END */}

        <div className='w-full flex flex-col'>
            <div className="flex flex-col md:flex-row justify-between">
                
                {/* PRODUCT TITLE */}
                <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                    {/* {p.Name} */}
                    Chicken Briyani
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                    {/* {p.subtitle} */}
                    Aromatic Rice Dish with Succulent Chicken and Fragrant Spices
                </div>

                {/* PRODUCT PRICE */}
                <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        Price : &#36;
                        {/* {p.price} */}
                        19.68
                </div>
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-md font-medium text-black/[0.5] hidden md:block">
                Men&apos; 
                Aromatic Rice Dish with Succulent Chicken and Fragrant Spices
                {/* {p.subtitle} */}
            </div>
            
            {/* size and quanity start */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                    <div className="flex items-center gap-1">
                        
                        <div className="font-semibold">Spicy level:</div>
                        <p>mild</p>
                        
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="font-bold">Quantity:</div>
                        <p>1</p>
                    </div>
                </div>
            </div>
            {/* size and quanity end */}




        </div>


    </div>
  )
}

export default TrackItem