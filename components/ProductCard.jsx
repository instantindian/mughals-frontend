import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { getDiscountedPricePercentage } from '@/utils/helper';
import { briyani } from '@/public';
import { chilli } from '@/public';
import {gobbi} from '../public/foodimages/GobiManchurian/index'



const ProductCard = ({data}) => {

  if (!data || !data.attributes) {
    return null; // or return an appropriate fallback JSX
  }

  const { attributes: p, id } = data;

  return (
    
      <Link href={`/product/${p.slug}`}
      className="transform overflow-hidden border-b duration-200 hover:scale-105 cursor-pointer
      bg-orangeColorBackground rounded-xl border
      
      flex-col
      "
      >
        
        <Image
          width={1000}
          height={100}
          src={p?.thumbnail?.data?.attributes?.url}
          alt={p?.name}
          className={" bg-orangeColorBackground"}
        />

        
        <div className='p-4 text-black/[0.9] flex-col gap-16 bg-orangeColorBackground '>
            <div className='flex gap-2'>
                
                {/* <Image className="bg-white  bg-gradient-to-bl from-orange-400 to-orange-600  text-white text-xs font-bold  leading-none flex items-center rounded-md"
                src={chilli}
                width={24}
                height={24}
                /> */}
                <h2 className="text-xl font-bold">
                  {p.Name}
                </h2>
            </div>
            
            {/* small desc */}
            <div className='text-sm mt-1 mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nam?
            </div>
          
          <div className="flex justify-between text-black/[0.5] ">
            <p className="mr-2 text-lg font-semibold text-black"> <span className='semi-bold'>US</span>{" "}&#36;{""}{p.price}</p>
                
                <div className='flex gap-2'>
            
                
                <span className={`inline-flex place-items-center rounded-md ${p.VegorNonVeg === 'NON-VEG' ? 'bg-red-100 text-red-500' : 'bg-green-50'} px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}>
                  {p.VegorNonVeg}
                </span>
                </div>
                
            
            
              {/* {(
                <>
                  <p className="text-base font-medium line-through">
                  &#8377;700
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                   veg
                  </p>

                </>
              ) */} 
          </div>
        </div>
      </Link>
    
  )
}

export default ProductCard