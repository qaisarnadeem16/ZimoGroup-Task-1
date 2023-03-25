import Image from 'next/image'
import Slider from "react-slick";
import React from 'react'
import { IoReturnUpBackSharp } from 'react-icons/io5'
import p1 from '../../public/assets/p-1.jpg'
import p2 from '../../public/assets/p-2.jpg'
import p4 from '../../public/assets/p-4.jpg'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'white ', fontSize: '4rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '8rem', right: 20 }}
            onClick={onClick} >  <MdKeyboardArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", color: 'white ', fontSize: '4rem', backgroundColor: 'transparent', zIndex: '10', position: 'absolute', top: '8rem', left: 20 }}
            onClick={onClick} >  <MdKeyboardArrowLeft />
        </div>
    );
}

const ProductSlider = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <Image src={p1} alt='' className="w-[100%] h-[50px]" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="">
                <button className='md:pt-10'>
                    <div className="back text-white  bg-black p-2 rounded flex items-center gap-2">
                        <IoReturnUpBackSharp />
                        <h4 className="font-semibold ">Home</h4>
                    </div>
                </button>

                <div className="py-1 flex">
                    <div className="md:w-1/2 w-full pb-16">
                        <Slider {...settings}>
                            <div>
                                <Image src={p1} alt='' width={1000} />
                            </div>
                            <div>
                                <Image src={p2} alt='' width={700} />
                            </div>
                            <div>
                                <Image src={p4} alt='' width={1000} />
                            </div>
                        </Slider>
                        {/* <Image src={p1} alt='' width={1000} /> */}
                    </div>
                    <div className="md:w-[40%] w-full px-5">
                        <h2 className="text-white font-semibold text-4xl mb-2 mt-4">iPhone 9</h2>
                        <p className="text-white mt-5 ">An apple mobile which is Nothing like apple  </p>
                        <div className="flex mt-5">
                            <span className="rounded-full text-red-700 bg-red-100 px-2 font-semibold"><h1>SMARTPHONE</h1></span>
                            <span className="rounded-full text-red-700 bg-red-100 px-2 font-semibold ml-7"><h1>Apple</h1></span>
                        </div>
                        <h2 className="text-[#C40032] text-2xl font-bold mt-5">$549</h2>
                        <div className="mt-5 flex justify-between">
                            <button className="flex gap-2 items-center justify-center  bg-[#C40032] text-white py-2 px-4 rounded" >
                                <BsFillCartPlusFill /> Add to Cart
                            </button>

                            <p className="text-lg text-green-600">IN STOCK: 94</p>
                        </div>
                        <div className="mt-5">
                            <span className="text-white text-[14px]">Average ratings:</span><span className="text-green-600 ml-2">4.69</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductSlider
