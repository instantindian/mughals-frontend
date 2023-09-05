import Image from 'next/image'
import React from 'react'
import SignUpImage from "../../public/signup.jpg"
import {SignIn} from "@clerk/nextjs"
import Link from 'next/link'



const LoginPage = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>


        

        <Image src={SignUpImage}
        className="h-full w-full object-cover absolute top-0 left-0"      
         alt="" srcset=""/>

        
        {/* content-box */}
        <div className='flex flex-col items-center bg-lightOverlay  w-[100%] md:w-[50%] h-[100%] z-10 
        backdrop-blur-sm p-4 px-4 py-12 gap-6'>
            
            <div className='flex-col  items-center'>
              
            
              
              {/* signup */}
              <div className='lg:mx-40'>
                <SignIn/>
              </div>

              {/* Available cities */}
              <div className="flex mt-3 flex-col p-4">
                
                <p className="font-extrabold text-lg text-secondaryColor underline "> We are Available in cities</p>

                {/* cities */}
                <p className="font-extrabold text-gray-800">
                  New York, Chicago, San Francisco, Dallas, San Jose-CA, Los Angeles, Houston, 
                  Maryland
                </p>
              </div>

            </div>
            
        </div>


        
      
    </div>
  )
}

export default LoginPage
