import { useRouter } from 'next/router'
import MenuBanner from "../../components/MenuBanner"
import ProductCard from '@/components/ProductCard';
import React,{useState,useEffect} from 'react';
import { fetchDataFromApi } from '@/utils/api';
import useSWR from "swr";
const maxResult = 10;



const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

const subCategories = [
    { name: "Menu", href: "/category/Menu" },
    { name: "Starters", href: "/category/Starters" },
    { name: "Main Course", href: "/category/MainCourse" },
    { name: "Tandoori Delights", href: "#" },
    { name: "Deserts", href: "#" },
  ];
const filters = [
    {
      id: "Veg/Non-Veg",
      name: "Veg/Non-Veg",
      options: [
        { value: "Veg", label: "Veg", checked: false },
        { value: "Non-Veg", label: "Non-Veg", checked: false },
      ],
    },
    {
        id: "spicylevel",
        name: "Spicy Level",
      options: [
        { value: "low", label: "low", checked: false },
        { value: "medium", label: "medium", checked: false },
        { value: "chef choice", label: "chef choice", checked: true },
        { value: "extra spicy", label: "extra spicy", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "spicylevel",
      name: "Spicy Level",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Category = ({category,products, slug}) => {
    const router = useRouter();
    // const { slug } = router.query;
    const {query} = useRouter()
    const [pageIndex, setPageIndex] = useState(1);

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    
    // fetch the categories
    // const [categories, setCategories] = useState(null);

    // useEffect(() => {
    //   // fetchCategories();
    //   const fetchCategories = async() =>{
    //     try{
    //       const {data} = await fetchDataFromApi('/api/categories?populate=*');
    //       setCategories(data);
    //     }
    //     catch(error){
    //       console.log("Error fetching the data",error);
    //     }
    //   };

    //   fetchCategories();
    // }, []);

  // const fetchCategories = async() =>{
  //     const {data} = await fetchDataFromApi('/api/categories?populate=*')
  //     setCategories(data);
  // }

  // console.log(categories)

  // const { Setcategories, error, isLoading } = useSWR(
  //   `/api/categories?populate=*`,
  //   fetchDataFromApi,
  //   {
  //       fallbackData: categories,
  //   }
  // );

  // console.log(Setcategories)
  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
      fetchDataFromApi,
      {
          fallbackData: products,
      }
  );
    

  


  return (
    <div className='max-w-full md:py-10 md:px-10'>
    

    {/* Banner */}
    <div className='max-w-full max-h-full'>
    <MenuBanner/>
    </div>
    
    
    {/* {products} */}
    <section>
        {/* {left menu} */}

        <div>
        {/* Mobile filter dialog */}
        {/* <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root> */}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className=" text-lg md:text-3xl font-bold tracking-tight text-orange-950 capitalize">
              WHAT WE HAVE IN {" "}
              {category?.data?.[0].attributes?.name}
            </h1>

            {/* <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-base font-semibold text-gray-700 hover:text-gray-900">
                    Menu
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div> */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3 max-2xl:grids-cols-4 items-center">
              {/* Filters */}
              {/* <MenuShowCase2 categories={subCategories} filters={filters}/> */}
            
            
              {/* Products grid */}
              {data?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
              ))}
              
                {/* <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/> */}
              
                
                
            
            </div>
          </section>
        </main>
      </div>


        

    </section>

     {/* PAGINATION BUTTONS START */}
     {data?.meta?.pagination?.total > maxResult && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${
                            data && data.meta.pagination.pageCount
                        }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
                


    </div>
  )
}

export default Category


export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  
  console.log(category.data);

  const paths = category?.data?.map((c) => ({
      params: {slug: c.attributes.slug},
  }));
  console.log(paths)
  return {
      paths,
      fallback: 'blocking',
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug  } }) {
  const category = await fetchDataFromApi(
      `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
      props: {
          category,
          products,
          slug,
      },
  };
}
