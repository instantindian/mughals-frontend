import Link from "next/link";
import React from "react";


const Contact = () => {
  return (
    <section className="py-14 bg-orangeColorBackground">
      <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
        <div className="flex-1 max-w-xl">
          <h3 className="text-4xl font-bold text-black/70 leading-relaxed">
            Get all  updates about Franchise directly to your inbox.
          </h3>
          <p className="text-gray-600 mt-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
          >
            <div className="relative">
              <svg
                className="w-6 h-6 text-gray-800 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-black/70 bg-transparent outline-none border focus:border-orange-950 shadow-sm rounded-lg sm:max-w-xs"
              />
            </div>
            <Link
            href={"/"}
            className="px-10 py-3.5 w-full bg-gradient-to-bl from-orange-600 bg-orange-400 text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold "
          >
            Know More
          </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
