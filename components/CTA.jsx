import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    indianfood
} from "../public/index"

const CTA = () => {
  return (
    <section className="py-14 bg-orangeColorBackground">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-10 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={indianfood}
              className="md:max-w-xl sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-secondaryColor text-lg font-bold">
              WHAT WE HAVE ON MENU
            </h3>
            <p className="text-black/60 text-3xl font-bold sm:text-4xl">
                We serve the best {" "}
                <span className="text text-secondaryColor">Indian Food</span> {" "}
                  in town
            </p>
            <p className="mt-3 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            
            <div className="flex pt-7">
                <Link
                href={"/"}
                className="px-10 py-3.5 w-full bg-gradient-to-bl from-secondaryColor to-thirdColor text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold "
                >
                View Menu
                </Link>

            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
