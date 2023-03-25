"use client"
import Image from 'next/image'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../Store/Store'
import {AiOutlineDelete} from 'react-icons/ai'
import { decrement } from '../../Store/Features/cartSlice'

const AddCartList = () => {

    const cartItems = useAppSelector((state) => state.cart.cartitems)
  const dispatch = useAppDispatch();

  
    return (
        <div>
            {cartItems.length>0 ?
            cartItems.map((item) => (
                <div className="flex gap-5 bg-[#2b2a2a] p-3 rounded-lg mb-3 relative"  >
                    <Image src={item.product.imagePath} alt='s' width={70} height={100} className='rounded-[1rem]' />
                    <div className="">
                        <span className='text-white'>{item.product.name}</span>
                        <h5 className="text-[#C40032] text-lg font-bold ">${item.product.price}</h5>

                    </div>
                   <div className="text-white absolute right-2 bottom-1"><button onClick={() =>dispatch(decrement(item.product))}><AiOutlineDelete/></button></div>
              

                </div>
            )):
           
            <h1 className="text-white font-semibold ">No item Selected</h1>
            }
        </div>
    )
}

export default AddCartList
