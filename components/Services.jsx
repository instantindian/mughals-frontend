import Image from 'next/image'
import React from 'react'
import { Chefcaute, FoodOrder, intime } from '../public/index'


const Services = () => {
  return (
    <div className='w-full h-full p-[30px] flex flex-col items-center '>
      
      {/* services heading  */}
      <div className='flex items-center flex-col'>
        <p className='text-orange-950  text-2xl font-bold '>WHAT WE SERVE</p>
        <p className='text-amber-800 text-xl font-semibold'>Savor Authentic Indian Flavors</p>
        {/* <p className='text-gray-400 services-heading3'> Delivery Partner</p> */}
      </div>

      {/* services vectors */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:px-36  px-10 lg:gap-24 lg:justify-center'>
        
        <article className=''>
          <Image src={FoodOrder} alt="" srcset="" width={340} />
          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-secondaryColor text-2xl '>Easy to Order</h3>
            <p className='text-base font-sans font-normal text-gray-600 text-center'>You Only need few steps to order healthy and Delicious Indian food </p>
          </div>
        </article>

        <article>
          <Image src={Chefcaute} alt="" srcset="" width={340} />
          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-secondaryColor text-2xl '>Kitchen</h3>
            <p className='text-center text-base text-md font-sans font-normal text-gray-600'>
            Try timeless dishes made with age old techniques by expert cooks
            </p>
          </div>
        </article>

        <article>
          <Image src={intime} alt="" srcset="" width={340} />
          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-2xl text-secondaryColor'>Delivery</h3>
            <p className='text-center text-md font-sans font-normal text-gray-600 '>
            Get Indian food delivered to your door - kebabs, haleem, biryani.
            </p>
          </div>
        </article>


      </div>


    </div>
  )
}

export default Services
