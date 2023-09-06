import { useState } from "react";
import Wrapper from "./Wrapper";

const TrackOrder =  () => {
  const [steps, setStep] = useState({
    stepsItems: [
      "Order Confirmation",
      "Cooking",
      "Out For Delivery",
      "Delivered",
    ],
    currentStep: 3,
  });

  return (
    <div className="border p-4 rounded-xl lg:h-[200px] lg:w-full">
      <Wrapper>
        <div className=" flex flex-col lg:gap-10 ">

          <div className="flex justify-between gap-3 flex-col lg:flex-row lg:gap-0">
            <div className="flex flex-col gap-2 lg:gap-4">
              {/* order status */}
              <div className="text-lg font-semibold">
                Order Status <span className="text-xs font-normal">ID</span>
                <span className="text-xs font-extrabold text-black/70">#1259394</span>
              </div>

              {/* inProgress  / completed */}
              <div className="flex gap-3">
                <span class="inline-flex items-center  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">    
                  In Progress
                </span>
                <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Online-Delivery
                </span>

              </div>
            </div>

            <div className="text-sm font-semibold text-gray-500 md:mb-5 ">
                Order on Tue,March 23, 2022, 12:33 PM
            </div>
          
          </div>

          <div>
            <div className="max-w-2xl mx-auto px-4 lg:px-0">
              <ul
                aria-label="Steps"
                className="items-center text-gray-600 font-medium md:flex lg:gap-16"
              >
                {steps.stepsItems.map((item, idx) => (
                  <li
                    key={idx}
                    aria-current={steps.currentStep == idx + 1 ? "step" : false}
                    className="flex-1 last:flex-none flex md:items-center"
                  >
                    <div className="flex gap-x-3 ">
                      <div className="flex items-center flex-col gap-x-2">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                            steps.currentStep > idx + 1
                              ? "bg-green-600 border-green-600"
                              : "" || steps.currentStep == idx + 1
                              ? "border-green-600"
                              : ""
                          }`}
                        >
                          <span
                            className={` ${
                              steps.currentStep > idx + 1
                                ? "hidden"
                                : "" || steps.currentStep == idx + 1
                                ? "text-green-600"
                                : ""
                            }`}
                          >
                            {idx + 1}
                          </span>
                          {steps.currentStep > idx + 1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className={`h-12 flex items-center md:hidden ${
                            idx + 1 == steps.stepsItems.length ? "hidden" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="h-8 flex items-center md:h-auto">
                        <h3
                          className={`text-xs ${
                            steps.currentStep == idx + 1 ? "text-green-600" : ""
                          }`}
                        >
                          {item}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`flex-1 hidden md:block ${
                        idx + 1 == steps.stepsItems.length ? "md:hidden" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mx-auto text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TrackOrder;