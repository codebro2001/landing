import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
export default function Header() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="relative md:w-[1200px] md:shrink-0  md:h-[52px]  sm:h-auto  sm:flex sm:flex-col md:flex-row   md:flex md:justify-between md:items-center md:mx-[10%] sm:gap-y-4 md:mt-11 sm:px-3 md:px-0">
        <div className="sm:mt-[50px] md:mt-0">
            <img src={Logo} alt="" />
        </div>
        <div className={isOpen ? "sm:block" : "sm:hidden"}  >
            <ul className=" hover:cursor-pointer md:h-[50px] md:flex md:items-center  md:flex-row  sm:flex sm:flex-col  sm:gap-y-7 md:gap-[60px]   text-[#110229] font-medium">
                <li>HOME</li>
                <li>PROPERTIES</li>
                <li>AGENTS</li>
                <li>BLOG</li>
                <button className="border-2 border-[#1DAEFF] w-[150px] text-[#1DAEFF] h-full rounded-[14px]">LOGIN</button>
            </ul>
           
        </div>
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="absolute top-[65px] hover:cursor-pointer right-[10px] md:hidden"/>
       
    </div>
    );
}