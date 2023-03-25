"use cli";
import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { Product } from '../../Interface'
import { increment, productQtySelector } from '../../Store/Features/cartSlice'
import { useAppDispatch, useAppSelector } from '../../Store/Store'

interface Props {
  product: Product
}
const AddToCartBtn = (props: Props) => {

  const qty = useAppSelector((state) =>
    productQtySelector(state, props.product.id))

  const dispatch = useAppDispatch();

  if (!qty)
    return (
      <button className="flex gap-2 items-center justify-center w-full bg-[#C40032] text-white py-2 px-4 rounded" onClick={() => dispatch(increment(props.product))}>
       <BsFillCartPlusFill/> Add to Cart
      </button>
    )
  return (<button className="flex gap-2 items-center justify-center w-full disabled cursor-not-allowed bg-[#ea3b67] text-gray-400 py-2 px-4 rounded" onClick={() => dispatch(increment(props.product))}>
    <BsFillCartPlusFill/>Add to Cart
  </button>)
}

export default AddToCartBtn;