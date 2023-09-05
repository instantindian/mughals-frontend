import Image from 'next/image'
import React from 'react'
import SignUpImage from "../../public/signup.jpg"
import {SignUp} from "@clerk/nextjs"
import Link from 'next/link'



const SignUpPage = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>


        

        <Image src={SignUpImage}
        className="h-full w-full object-cover absolute top-0 left-0"      
         alt="" srcset=""/>

        
        {/* content-box */}
        <div className='flex flex-col items-center bg-lightOverlay  w-[100%] md:w-[50%] h-[100%] z-10 
        backdrop-blur-sm p-4 px-4 py-12 gap-6'>
            
            <div className='flex-col  items-center '>
            
              
              {/* signup */}
              <div className='mx-52 lg:mx-60  '>
                <SignUp />
              </div>

            </div>
            
        </div>


        
      
    </div>
  )
}

export default SignUpPage
