
import Image from 'next/image'
import AddToCartBtn from './AddToCartBtn'
import React from 'react'
import { IoChevronForwardOutline, IoReturnUpBackSharp } from 'react-icons/io5'
import { IoChevronBack } from 'react-icons/io5'
import { ProductData } from '../ProductData'
import Link from 'next/link'
import { motion } from "framer-motion"


const AllProduct = () => {
    return (
        <>
       
            <div className="text-white ">
                <button>
                    <div className="back text-white md:py-16 flex items-center gap-2">
                        <IoReturnUpBackSharp />
                        <h4 className="font-semibold ">Home</h4>
                    </div>
                </button>

                <div className="heading pt-5">
                    <h2 className="text-4xl font-semibold text-center">
                        <span className="text-white">AVIALABLE </span>
                        <span className="text-red-600">ITEMS</span>
                    </h2>
                </div>

                <div className="products md:pt-20 pt-16">
                    <div className="flex flex-wrap items-center flex-col md:flex-row md:gap-7 gap-3">
                        {ProductData.map((product) => (
                            <motion.div   initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1 }} className="md:w-[22%] w-full" key={product.id}>

                                <div className=" rounded-lg overflow-hidden shadow-lg">

                                    <Image src={product.imagePath} alt='p' width={1000} height={1000} className="w-full h-[40vh] object-cover" />

                                 <div className="px-2 py-3 bg-[#444444]">
                                 <Link href='/Product'>      <h2 className="text-white font-semibold text-2xl mb-2 mt-4">{product.name}</h2>
                                        <p className="text-white ">{product.description} <span className="text-[#C40032] font-semibold">read more</span> </p>
                                        <h2 className="text-[#C40032] text-2xl font-bold ">${product.price}</h2></Link> 
                                        <div className="mt-4 flex justify-between">

                                           <AddToCartBtn product={product}/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        
                    </div>
                </div>

                <div className="pages md:py-10 py-5 flex justify-center ">
                    <ul className="flex md:gap-2 gap-1 cursor-pointer">
                        <li className="bg-[#444444] px-4 py-1 rounded-md hidden md:block "><IoChevronBack className='mt-1' /></li>
                        <li className="bg-[#C40032] px-4 py-1 rounded-md">1</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">2</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">3</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">...</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">8</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">9</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md">10</li>
                        <li className="bg-[#444444] px-4 py-1 rounded-md hidden md:block"><IoChevronForwardOutline className='mt-1' /></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default AllProduct
