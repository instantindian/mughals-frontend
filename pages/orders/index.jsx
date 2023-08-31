import OrderItem from '@/components/OrderItem'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Orders = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <>
        {/* Heading of Orders */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-2 font-bold leading-tight  text-gray-700">
                My Orders
            </div>
        </div>

        {/* Order Cards start here */}
        <div className="flex flex-col lg:flex-row gap-12 py-10 lg:justify-center ">
          

          {/* cart Items */}
          <div className=' flex flex-col gap-3'>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
          </div>  
        </div>

        </>
      </Wrapper>
    </div>
  )
}

export default Orders
