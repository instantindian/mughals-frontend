import Image from 'next/image'
import React from 'react'
import {
    pickuporder,
    doorstep
} from "../public/index";



const Delivery = () => {
    

        const deliveryOptions = [
            {
                icon:<Image src={pickuporder} width={200} height={200} alt="pickup order"/>,
                title: "Crubside Pickup",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
            },
            {
                icon:<Image src={doorstep} width={150} height={150} alt="pickup order"/>,
                title: "Door Step Delivery",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
            }
        ]
    
        return (
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
                    <div>
                        <div className="max-w-xl space-y-3">
                            <h3 className="text-black/80 text-lg font-extrabold">
                                DELIVERY
                            </h3>
                            <p className="text-gray-600 text-xl font-bold sm:text-4xl">
                                Now we provide different ways to collect your food.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                            </p>
                        </div>
                        <div className="mt-12 max-w-lg lg:max-w-none">
                            <ul className="space-y-8">
                                {
                                    deliveryOptions.map((item, idx) => (
                                        <li key={idx} className="flex gap-x-4">
                                            <div className="flex-none w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg text-gray-800 font-bold">
                                                    {item.title}
                                                </h4>
                                                <p className="mt-3">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <iframe className=' w-[100%] h-[100%] md:w-[600px]'  height="100%" frameBorder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </section>
        )
    
}

export default Delivery