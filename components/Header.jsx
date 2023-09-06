import React,{useState,useEffect} from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMoblie from './MenuMoblie';
import { fetchDataFromApi } from '@/utils/api';


import {IoMdHeartEmpty} from "react-icons/io";
import {BsCart} from "react-icons/bs";
import {BiMenuAltRight} from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc";


import { useSelector } from "react-redux";
import {UserButton,useAuth} from '@clerk/nextjs'



const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    // fetch categories
    const [categories, setCategories] = useState(null);
    const { cartItems } = useSelector((state) => state.cart);

    // clerk auth
    const { isLoaded, userId, sessionId, getToken } = useAuth();


    // header scroll functionality method

    const controlNavbar = () => {
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY){
                setShow("-translate-y-[80px]");
            }else{
                setShow("shadow-sm")
            }
                
        }else{
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
        
    }

    useEffect(()=>{
        window.addEventListener("scroll", controlNavbar);
        return () =>{
            window.removeEventListener("scroll",controlNavbar);
        }
    },[lastScrollY]);


    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async() =>{
        const {data} = await fetchDataFromApi('/api/categories?populate=*')
        setCategories(data);
    }

    


    
  return (
    <header className={`w-full h-20px  md:h-[80px] bg-orangeColorBackground flex items-center justify-between  transition-transform duration-300
    sticky top-0 z-50 py-3
    `}>
        <Wrapper className="h-[60px] flex justify-between items-center p-3 sm:p-5">
            
            {/* Logo */}
            <div >
                <Link href="/" className='flex justify-center items-center  gap-1'>
                    <img src="/mainlogo1.png"  className='w-48 -ml-11 lg:-ml-20 md:w-[320px]' alt='instant indian'/>
                    {/* <p className='text-lg md:text-2xl font-bold text-secondaryColor'>MUGHALS</p> */}
                </Link>
            </div>
           


            
            {!userId && (
                <div className='flex items-center gap-2'>
                <Link
                    href={"/signup"}
                    className="px-5 py-2.5 lg:px-10 lg:py-3.5 w-full bg-white text-orange-600 text-center rounded-md shadow-xl block sm:w-auto font-bold"
                >
                    SignUp
                </Link>
                <Link
                    href={"/login"}
                    className="px-5 py-2.5 lg:px-10 lg:py-3.5 w-full bg-gradient-to-bl from-orange-600 bg-orange-400 text-white text-center rounded-md shadow-xl block sm:w-auto font-semibold "
                >
                    LogIn
                </Link>
                </div>
            )}
            
            
            {userId && (
                <>
                <Menu
                showCatMenu={showCatMenu} 
                setShowCatMenu={setShowCatMenu}
                categories = {categories}
            />        
            {/* end */}

            {/* menu items moblie view */}
            {mobileMenu && (
                <MenuMoblie
                showCatMenu={showCatMenu} 
                setShowCatMenu={setShowCatMenu}
                setMobileMenu={setMobileMenu}
                categories = {categories}
                />
            )}
            



            {/* left side icon start */}
             <div className="flex items-center gap-2 text-black">

                
                 {/* shopping cart menu icon start */}


                
                 <Link href="/Cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {cartItems.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                </Link>
                <div className='ml-auto'>
                    <UserButton afterSignOutUrl="/"/>
                </div>
                {/* shopping cart menu icon end */}



                {/* Moblie icon start */}
                <div className='w-8 flex md:w-12 h-8 md:hidden  rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
                    {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                    )}
                </div>


             <hr />
             </div>
            
                
                </>
            )}
            {/* menu items desktop view */}
            

            

        </Wrapper>
        
    </header>

  )
}

export default Header