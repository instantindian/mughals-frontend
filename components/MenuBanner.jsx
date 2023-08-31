import React from 'react'

// we are using additional libary for the reacy slider - react responsive slider
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";


const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
        <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] md:right-[54px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-gradient-to-bl from-orange-400 to-orange-600 text-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-gradient-to-bl from-orange-400 to-orange-600 text-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                {/* <div className="px-[15px] z-50 md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:top-[5px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        hello
                </div> */}
                    <img
                        src="/slide5.jpg"
                        className="aspect-[18/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-gradient-to-bl from-orange-400 to-orange-600 text-white absolute bottom-[25px] md:bottom-[25px] left-0  text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer">
                        Order Now
                    </div>
                </div>

                <div>
                    
                    <img
                        src="/slide1.jpg"
                        className="aspect-[18/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-gradient-to-bl from-orange-400 to-orange-600 text-white absolute bottom-[25px] md:bottom-[25px] left-0  text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer">
                        Order Now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide2.jpg"
                        className="aspect-[18/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-gradient-to-bl from-orange-400 to-orange-600 text-white absolute bottom-[25px] md:bottom-[25px] left-0  text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer">
                        Order Now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide4.jpg"
                        className="aspect-[18/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-gradient-to-bl from-orange-400 to-orange-600 text-white absolute bottom-[25px] md:bottom-[25px] left-0  text-[15px] md:text-[30px] uppercase font-semibold cursor-pointer">
                        Order Now
                    </div>
                </div>
            </Carousel>
    </div>
  )
}

export default HeroBanner