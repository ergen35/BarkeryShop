import donuts from '../assets/donuts.svg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero() {
    return (
        <div className="flex px-20 pt-32">
            <div className="w-1/2 space-y-6">
                <p className="text-5xl flex-wrap gradient-color font-extrabold tracking-tighter">
                    <span>Sweet moments,</span>
                    <span className="block">freshly baked with</span>
                    <span className="block">love</span>
                </p>

                <p className="w-96">
                    Customized cakes, treats and every thing sweet for all your special moments.
                </p>

                <p>
                    <button className="btn-primary hover:scale-110 transition duration-500">
                        Shop Now
                    </button>
                </p>

                <p className='flex flex-row space-x-1'>
                    <a className='bg-[#480054] text-white rounded-[4px] cursor-pointer'>
                        <FaFacebook className='p-1.5' size={28} />
                    </a>
                    <a className='bg-[#480054] text-white rounded-[4px]  cursor-pointer'>
                        <FaLinkedinIn className='p-1.5' size={28} />
                    </a>
                    <a className='bg-[#480054] text-white rounded-[4px] cursor-pointer'>
                        <FaInstagram className='p-1.5' size={28} />
                    </a>
                </p>
            </div>
            <div className="w-1/2">
                <div className="flex flex-row justify-center items-center align-top -mt-12">
                    <img src={donuts} className='h-[380px] w-[722px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero;