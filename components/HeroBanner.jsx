import React from "react";
import { motion } from "framer-motion";
import {
  circle,
  Delivery,
  dialog1,
  dialog2,
  Food1,
  Food2,
  Food3,
  Ring,
} from "../public/index";
import Image from "next/image";
import Link from "next/link";


const HeroBanner = () => {
  return (
    // breaking down into two parts
    <motion.div className="w-full md:h-[720px]  grid grid-cols-1 md:grid-cols-2  gap-3 p-2 md:gap-6  bg-orangeColorBackground ">
      {/* left part */}
      <div className="flex flex-col items-center justify-start md:p-4  gap-8 md:items-baseline">
        {/* {greetings} */}
        <div className="px-4 py-1  items-center justify-center gap-5 bg-white rounded-full md:flex hidden">
          <p className="text-lg font-bold text-secondaryColor">
            Hello Guest
          </p>

          {/* delivery icon */}
          <div className="w-10 h-10 flex items-end justify-center rounded-full bg-yellow-200 shadow-md ">
            <Image
              src={Delivery}
              alt="Man with delivery"
              className="w-full h-full object-contain"
              width={120}
              height={120}
            />
          </div>
        </div>

        {/* left main heading part  */}
        <p className="text-[40px] text-darkTextColor md:text-[64px] font-sans font-bold leading-[5rem] ">
          <span className="text-black/70">Apana</span>
          <span className="text text-thirdColor"> </span>{" "}
          <span className="text text-secondaryColor">Hyderabadi</span> 
          <span className="text-black/70">{" "}food delivered to your door</span>
          
        </p>

        {/* left secondary text */}
        <p className="text-gray-600 text-xl font-semibold leading-relaxed">
          Order your favourite and tasty food from us. Check out our best menu
          that will make you eat healthy again. Tailored to your personal tastes
          and nutritional needs.
        </p>

        {/* Banner buttons */}
        <div className="mt-6 md:mt-8 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex ">
          <Link
            href={"/"}
            className="px-10 py-3.5 w-full bg-gradient-to-bl from-secondaryColor to-thirdColor text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold "
          >
            Get started
          </Link>
          <Link
            href={"/"}
            className="px-10 py-3.5 w-full text-secondaryColor text-center border rounded-md duration-300 hover:text-thirdColor hover:shadow block sm:w-auto font-semibold"
          >
            Know More About us
          </Link>
        </div>

        {/* Available cities */}
        <div className="flex mt-3 flex-col">
          
          <p className="font-extrabold text-lg text-gray-600 underline ">Available in cities</p>

          {/* cities */}
          <p className="font-bold text-gray-500">
            New York, Chicago, San Francisco, Dallas, San Jose-CA, Los Angeles, Houston, 
            Maryland
          </p>
        </div>

      </div>

      {/* Right side hero banner */}
      <div className="py-2 div2  items-center justify-end relative md:flex hidden">


        {/* food image */}
        <Image
          src={Food1}
          alt="indian briyani"
          srcset=""
          className="md:w-[350px] food-img top-[25%] absolute left-[6%] food-1"
        />
        <Image
          src={Food2}
          alt="idly"
          srcset=""
          className="md:w-[100px] food-img food-2"
        />
        <Image
          src={Food3}
          alt="indian curry"
          srcset=""
          className="md:w-[100px] food-img food-3"
        />


        {/* dialog messages */}
            <Image src={dialog1} 
            className="dialog-1 z-10" 
            alt="" srcset="" />
            <Image src={dialog2}
            className="dialog-2"
            alt="" />

            <Image src={circle} className="shape shape-1" alt="" />
            <Image src={circle} className="shape shape-2" alt="" />
            <Image src={circle} className="shape shape-3" alt="" />
            


            <Image src={Ring} className="shape shape-4" alt="" />
            <Image src={Ring} alt="" srcset="" className='shape shape-5' />






      </div>
    </motion.div>
    // hell
  );
};

export default HeroBanner;
