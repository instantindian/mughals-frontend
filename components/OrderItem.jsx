import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// import SignUpImage from "./../public/signup.jpg"
import SignUpImage from "../public/signup.jpg";
import {WiDirectionRight} from "react-icons/wi"



const OrderItem = () => {
  return (
    <div className='flex py-5 gap-3 lg:gap-6 border px-2 lg:px-10 rounded-md'>

    {/* Image start */}

    <div className="shrink-0 aspect-square w-[80px] lg:w-[140px]">
                <Image
                    src = {SignUpImage}
                    width={1000}
                    height={500}
                    className="rounded-lg object-fill"
                />
                {/* <img src="../GobiManchurian/g1.jpeg" width={100} height={100} className="rounded-2xl"/> */}
    </div>

      <div className='w-full flex flex-col gap-2 lg:gap-80 lg:flex-row'>

        {/* card left side */}
        <div className="flex flex-col lg:gap-4 gap-2">
            {/* orderid */}
            <div className="text-sm lg:text-md font-extrabold text-black/70">
                        ORDER ID : {" "}
                        <span className='text-black/[0.5]'>
                         #14572197234
                        </span>
            </div>

            {/* items */}
            <div className="text-sm md:text-md font-semibold text-black/[0.6] block">
                Chicken briyani * 2, Panner Kebab * 1, Mango Lassi * 4
            </div>

            {/* Delivery Status */}
            <div className="text-sm lg:text-base font-bold text-black/70 mt-2">
                        Delivery Status : {" "}
                        <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Deliverd
                        </span>
            </div>
        </div>

        {/* card right side */}
        <div className='flex flex-col justify-between gap-2 lg:gap-3'>
            
            {/* Order Creation and time */}
            <div className='text-sm font-medium text-black/[0.6]'>
                Order on Tue,March 23, 2022, 12:33 PM
            </div>

            <div className=' text-sm lg:text-md font-bold text-black/70 flex gap-1 items-center'>
                Total Amount Paid : 
                <span>{" "}</span>
                <span className='text-md lg:text-base text-black/60'>
                 $ 45.17
                </span>
            </div>

            <Link href={"/order"} 
                className='flex items-center'>
                    
                    <p className="font-extrabold text-md lg:text-base text-orange-700 cursor pointer">
                        VIEW DETAILS
                    </p>
                    <span className='text-4xl text-orange-700'>
                    <WiDirectionRight/>
                    </span>
            </Link>

        </div>




      </div>



    </div>
  )
}

export default OrderItem
