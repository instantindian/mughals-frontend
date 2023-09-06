import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
// import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import ProductDetailsCarousel from "@/components/ProductsDetailsCarousel";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StarIcon } from '@heroicons/react/20/solid'



const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full py-10 lg:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[75px]">
          {/* left column start */}
          <div className="w-full lg:w-auto flex-[1.5] max-w-fit lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3 md:gap-10 flex-col">
            {/* PRODUCT TITLE */}
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {p.Name}
                    
                </div>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                    (Serves {p.numberofserves})
                </span>

            </div>
            

            {/* PRODUCT SUBTITLE */}
            <div className="text-md font-semibold mb-5 text-gray-500">
              {/* {p.subtitle} */}
              Aromatic Rice Dish with Succulent Chicken and Fragrant Spices
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center  justify-between">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                MRP : &#36;
                {p.price}
              </p>

              {/* reviews */}
              <div className="">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-orange-600"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href="#" className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                      {reviews.totalCount} reviews
                  </a>
                    
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-sm font-medium text-black/[0.5] mb-10">
              {`(Also includes all applicable duties)`}
            </div>

            {/* quanity */}
            {/* <div className="md:mb-5">
                <label for="Quantity" className=""> Quantity </label>

                <div className="flex items-center gap-1">
                    <button
                    type="button"
                    className="
                    inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10
                    "
                    >
                    &minus;
                    </button>

                    <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className=" w-10
                    inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10
                    "
                    />

                    <button
                    type="button"
                    className="
                    inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10
                    "
                    >
                    +
                    </button>
                </div>
            </div> */}

            {/* Spicy RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              
              <div className={`flex justify-between mb-2 ${p.spicylevel && p.spicylevel.data ? 'block' : 'hidden'}`}>
                <div className="text-md font-semibold">choose level you want</div>
              </div>
              {/* HEADING END */}

              {/* spicy level START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p?.spicylevel?.data?.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 text-gray-800 font-semibold ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.level
                                                ? "  items-center rounded-md bg-green-50 font-semibold text-green-700 ring-1 ring-inset ring-green-600/20 "
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.level);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.level}
                                    </div>
                  ))}
  
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              { showError &&
                <div className="text-red-600 mt-1">
                 * selection is required
                </div>
              }
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full mb-5 py-4 rounded-lg bg-black text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75"
              // className=" bg-gradient-to-bl from-orange-600 bg-orange-400 text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold "
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }                
              }}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button> */}
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-1">Ingredients In This Meal</div>
              <div className="markdown text-md mb-5">
                {/* <ReactMarkdown> */}
                    {/* {p.description} */}
                {/* spicy level START */}
                <p className="text-gray-500 font-base">
                    {p.description}
                </p>
                <div id="sizesGrid" className="grid grid-cols-2 gap-2">
                            <div className=" rounded-md text-center py-2 font-medium flex gap-2" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <p>Chicken</p>
                                
                            </div>
                            <div className=" rounded-md text-center py-2 font-medium flex gap-2" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <p>Basmati Rice</p>
                            </div>
                            <div className=" rounded-md text-center py-2 font-medium flex gap-2" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <p>Briyani Spice Mix</p>
                            </div>
                            

                            
                            
                    </div>
                    {/* SIZE END */}
                {/* </ReactMarkdown> */}
              </div>

            </div>
          </div>
          {/* right column end */}
        </div>

        <RelatedProducts products={products}/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;


export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  console.log(products.data)
  const paths = products?.data?.map((p) => ({
      params: {
          slug: p.attributes.slug,
      },
  }));
  console.log(paths)

  return {
      paths,
      fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
      `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
      props: {
          product,
          products,
      },
  };
}