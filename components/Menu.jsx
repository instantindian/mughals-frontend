
import React from 'react';
import Link from 'next/link';
import {BsChevronDown} from "react-icons/bs"


// menu data 
const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 3, name: "Menu", subMenu: true},
    { id: 5, name: "About us", url: "/" },
    { id: 4, name: "Catering", url: "/" },
    {id: 6, name:"Franchise", url:"/franchise"},
    {id: 6, name:"Contact", url:"/contact"}
];


const Menu = ({showCatMenu,setShowCatMenu, categories}) => {

    
  return (
    <ul className='hidden md:flex items-center gap-8 text-secondaryColor font-bold  '>
        {data.map((item) =>{
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className='cursor-pointer flex items-center gap-2 relative ' 
                            onMouseEnter={()=>setShowCatMenu(true)}
                            onMouseLeave={()=>setShowCatMenu(false)}
                        >
                            {item?.name}
                            <BsChevronDown size={13}/>

                            {showCatMenu &&(                                
                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] p-2 text-black text-lg font-semibold shadow-lg rounded-md'>
                                {categories?.map(({attributes : c, id}) =>{
                                    return(
                                        <Link
                                         key={id} 
                                         href={`/category/${c.slug}`}
                                         onClick={() => setShowCatMenu(false)}
                                         >
                                            <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.04] 
                                            rounded-md'>
                                                {c.name}
                                                <span className='opacity-50 text-sm'
                                                >{`(${c.products.data.length})`}</span>
                                                </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        )}

                        </li>
                    ) : (
                        <li className='cursor-pointer'>
                            <Link href={item?.url}>
                                {item.name}
                            </Link>
                        </li>

                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default Menu