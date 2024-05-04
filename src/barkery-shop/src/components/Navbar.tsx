import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsHeadsetVr } from "react-icons/bs";

const navElements = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Shop",
        link: "#shop",
    },
    {
        name: "Services",
        link: "#services",
    },
    {
        name: "Blog",
        link: "#blog",
    },
]

function Navbar() {

    const [activeSection, setActiveSection] = useState("Home")

    return (
        <>
            <div className="bg-white container mx-auto px-4 items-center flex border-white shadow-secondary shadow-md rounded-br-lg rounded-bl-lg h-16">
                <a href="/" className="text-secondary montserrat-500 text-2xl">Barkery </a>
                <nav className="flex justify-center space-x-6 items-center flex-1">
                    {navElements.map((nav, index) => <a onClick={() => setActiveSection(nav.name)} href={nav.link} key={index} className={`${activeSection == nav.name ? "text-primary font-medium" : "text-black"} font-light transition-all ease-in-out hover:text-primary hover:translate-y-1 hover:scale-110 hover:font-semibold`}>{nav.name}</a>)}
                </nav>
                <div className="flex space-x-4">
                    <a className="me-1">Login/Register</a>
                    <div className="flex flex-row space-x-2 items-center">
                        <FaRegHeart size={20} className="text-tertiary" />
                        <BsHeadsetVr size={20} className="text-[#001A72]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;