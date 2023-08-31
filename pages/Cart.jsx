import React, {useMemo} from 'react';
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DeliveryMode from '@/components/DeliveryMode';

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from '@clerk/nextjs';


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    const {address} = useSelector(state => state.address); // Get address from Redux store

    // user
    const { user } = useUser(); 

    const subTotal = useMemo(()=>{
        return cartItems.reduce((total, val) => total + val.attributes.price, 0)
    },[cartItems])


    // handle payments
    const handlePayment = async () => {
        try {
          setLoading(true);
          const stripe = await stripePromise;
    
          // Filter cart items to include only necessary information
        //   const filteredCartItems = cartItems.map(item => ({
        //     name: item?.name,
        //     quantity: item?.quantity,
        //     imageUrl: item?.imageUrl,
        //     price: item?.price,
        //     spicyLevel: item?.spicyLevel,
        //   }));

          // Get the current date, time, and day
            const currentDate = new Date();
            const currentTime = currentDate.toLocaleTimeString();
            const currentDay = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    
          const res = await makePaymentRequest("/api/orders", {
            products: cartItems, // Use the filtered cart items
            // address: address,
            // // userid:user.id,
            // username: user.username,
            // useremail:user.email,
            // date: currentDate.toISOString(), // Include the current date in ISO format
            // time: currentTime,
            // day: currentDay,
          });
          await stripe.redirectToCheckout({
            sessionId: res.stripeSession.id,
          });
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      };
    
    
    
   


    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                { cartItems.length > 0 &&(
                    <>

                                            {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                My Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* Cart content start */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Cart Items
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item?.id} data={item}/>
                                ))}
                                
                            <Link href={"/"} 
                            className='mt-5 lg:mt-8 flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-6 font-bold text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                <p href={"/"} className="font-semibold text-blue-600">
                                    Add More Items
                                </p>
                            </Link>
                            </div>

                            
                            {/* CART ITEMS END */}

                            {/* Summary start */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Order Summary</div>

                                {/* delivery options */}
                                <div className='p-5 my rounded-xl'>
                                    
                                        <DeliveryMode/>
                                    
                                </div>


                                
                                {/* billing information */}
                                <div className="p-5 my-5 bg-black/[0.03] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Subtotal
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            &#36;
                                            {/* 205 */}
                                            {subTotal}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div>
                                    {/* BUTTON START */}
                                <button
                                    className="w-full py-4 rounded-xl bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                    {/* {loading && <img src='/spinner.svg'/>} */}
                                </button>
                                {/* BUTTON END */}
                                </div>

                                


                            </div>
                            {/* summary end */}

                        </div>
                        {/* CART CONTENT END */} 
                    
                    </>
                )}


                        {/* Empty cart */}
                        {
                        cartItems.length < 1 
                        &&
                         (
                            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                            <Image
                                src="/emptycart.png"
                                width={300}
                                height={300}
                                className="w-[300px] md:w-[400px]"
                            />
                            <span className="text-xl font-bold">
                                Your cart is empty
                            </span>
                            <span className="text-center mt-4">
                                Looks like you have not added anything in your cart.
                                <br />
                                Go ahead and explore top categories.
                            </span>
                            <Link
                                href="/"
                                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                            >
                                Add Your Favourite Food
                            </Link>
                        
                        </div>

                        )} 
                        
            </Wrapper>
        </div>
    )
};

export default Cart