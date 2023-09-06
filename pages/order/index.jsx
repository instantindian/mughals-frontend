import TrackItem from "@/components/TrackItem";
import TrackOrder from "@/components/TrackOrder";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <div className="w-auto lg:py-16">
      {/* wrapper */}
      <Wrapper>
        <div className="flex flex-col gap-4 ">
          {/* top */}

          <Link href={"/orders"} className="flex gap-2 mt-5 lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-6 font-bold text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <p href={"/"} className="font-bold text-base text-blue-600">
                My Orders
              </p>
        </Link>
         
          <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row justify-between">
            

            {/* order tracking */}
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col gap-2 lg:gap-8">
                {/* track order */}
                <div className="flex flex-col lg:flex-row gap-12 ">
                  <TrackOrder />
                </div>

                {/* menu card */}
                <div className="flex border p-4 rounded-lg flex-col">

                    <p className="flex text-xl font-semibold items-end gap-2 text-black/[0.7]">
                        Order Items
                    </p>

                    {/* menu items cards */}
                    <div className="flex flex-col gap-2 lg:px-8" >
                        <TrackItem/>
                        <TrackItem/>
                        <TrackItem/>
                    </div>
                  
                </div>
              </div>


              
            </div>

            {/* delivery address */}
            <div className=" flex flex-col gap-5 ">
                
                {/* shipping address */}
                <div className="border flex items-start p-10 w-full  rounded-xl flex-col gap-4">               
                <p className="title font-semibold text-xl text-black/[0.7]">
                  Shipping Address
                </p>

                {/* map */}
                <div className="">
                  <iframe
                    className=" w-[100%] h-[100%] md:w-[400px] lg:max-w-[400px] lg:h-[300px]"
                    height="100%"
                    frameBorder="0"
                    title="map"
                    marginheight="0"
                    marginwidth="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>

                {/* address */}
                {/* city */}
                <p className="text-lg font-bold flex flex-col">
                  San Diego
                  <span className="text-xs font-semibold text-black/[0.5]">
                    California State, USA
                  </span>
                </p>

                {/* place address  */}
                <p className="text-md text-black/[0.6] font-bold">
                  3891 Ranchview, Dr.Richardson, 68239
                </p>
                </div>

                {/* payment details */}

                <div className="border p-5 rounded-lg">

                    <p className="text-xl font-semibold text-black/[0.8]">
                        Payment Details
                    </p>

                     {/* billing information */}
                     <div className="p-5 my-5 bg-black/[0.03] rounded-xl">


                                    <div>
                                        <p className="text-base font-semibold">Paid Via Bank</p>

                                    </div>
                                    

                                    <div className="text-sm md:text-base py-5 border-b border-t mt-5 mb-5 flex flex-col gap-2">

                                        <div className="flex justify-between" >
                                            <p className="">
                                                subtotal 
                                            </p>
                                            <p>
                                            &#36;
                                            205.83
                                            </p>
                                        </div>

                                        <div className="flex justify-between" >
                                            <p className="">
                                                Delivery Charges
                                            </p>
                                            <p>
                                            &#36;
                                            5.83
                                            </p>
                                        </div>


                                        <div className="flex justify-between" >
                                            <p className="">
                                                Tips
                                            </p>
                                            <p>
                                            &#36;
                                            2.83
                                            </p>
                                        </div>
                                        
                                    </div>


                                    <div className="flex justify-between">
                                        <div className="text-md md:text-lg font-semibold text-black">
                                            Total {" "}
                                            <span className="text-xs">    
                                            (tax.incl)
                                            </span>
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            &#36;
                                            215.83
                                            {/* {subTotal} */}
                                        </div>
                                    </div>
                                    
                    
                    </div>
                    

                </div>

              

            </div>




           
            </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Order;
