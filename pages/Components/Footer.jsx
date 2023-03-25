import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {AiFillGithub, AiFillMail, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className="bg-[#050505] md:px-48 px-5 py-7">
            
            <div className="">
                <h1 className="text-[#C40032] text-4xl font-semibold">Next Cart</h1>
                <p className="mt-3 text-white">Developed By Qaisar Nadeem</p>
            </div>

            <div className="mt-5 flex gap-5">
                <GrLinkedin className='text-white text-xl'/>
                <AiFillGithub className='text-white text-xl'/>
                <AiFillMail className='text-white text-xl'/>
                <AiOutlineWhatsApp className='text-white text-xl'/>
            </div>

            <div className="pt-10  flex justify-between">
                <span className="text-white text-[13px]">Copyright © 2023 All rights reserved designed and developed by <span className="text-[#C40032]">Qaisar</span> </span>
                <div className="md:flex gap-5 text-white font-semibold hidden">
                    <h1 className="">Home</h1>
                    <h1 className="">Product</h1>
                    <h1 className="">Contact</h1>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer
