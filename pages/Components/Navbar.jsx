
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import logo from '../../public/assets/logo.png'
import AddCartList from './AddCartList'
import { useAppSelector } from '../../Store/Store'
import { totalPriceSelector } from '../../Store/Features/cartSlice'

const Navbar = () => {
    const totalPrice=useAppSelector(totalPriceSelector)

    
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div className=" py-5 ">
                <div className="navbar bg-[#7D0B27] px-2 py-2 rounded-[1rem] flex justify-between">
                    <div className="flex items-center gap-1">
                        <Image src={logo} alt="" width={40} />
                        <h2 className="text-4xl text-white font-[600]">NC</h2>
                    </div>
                    <button onClick={toggleMenu}>
                        <div className="flex items-center gap-2 px-2 py-1 rounded-[5px] bg-[#ab6575] text-white font-semibold ">
                            <AiOutlineShoppingCart className='ml-2' />
                            <span className=" text-lg ">Cart</span>
                        </div>
                    </button>
                </div>
            </div>


           {/* <div className="closeCart block z-10 fixed w-full h-full opacity-10 bg-red-900"></div> */}
            <div className={`${showMenu ? "md:w-[20%] w-[80%]" : 'hidden'} bg-[#444444] h-full absolute top-0 right-0 px-5 `} >



                <div className="text-white flex justify-between py-7 text-xl relative">
                    <h1 className="text-white font-semibold ">Selected items</h1>
                    <button onClick={toggleMenu} ><IoClose className=' text-xl font-semibold absolute top-5 right-5' /></button>
                </div>

                <div className="itemlists">
                    {/* <h1 className="text-white font-semibold ">No item Selected</h1> */}
                    <AddCartList/>
                </div>


                <div className="total text-white font-semibold flex w-[80%] justify-between absolute bottom-5 text-xl">
                    <h1 className="">Total:</h1>
                    <h1 className=""> $ {totalPrice}</h1>
                </div>

            </div>

        </>
    )
}

export default Navbar
