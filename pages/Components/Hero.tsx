
import React from 'react'
import { AiFillStar , AiOutlineStar} from 'react-icons/ai'

const Hero = () => {
    return (
        <>
            <div className="relative top-0 w-full h-[60vh] hero1">
                <div className="hero absolute top-0 w-full h-[60vh]"></div>
                <div className="absolute md:left-[40%] left-[20%] top-48">
                <h2 className="text-white text-center font-semibold text-4xl mb-2 mt-4">iPhone 9</h2>
                <div className="flex gap-2 text-yellow-600 text-4xl justify-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
            </div>
            </div>
          
        </>
    )
}

export default Hero
