import banner from "../assets/B.png"
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
export default function Banner() {
    
    return (    
        <>
         <div className="md:w-[1300px] md:h-[633px] md:mx-[7%] my-[38px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>
                <div className=" sm:p-[50px] md:p-0 md:w-[490px] md:pt-24 md:mx-[89px]">
                <h1 className="text-[#110229] font-bold sm:text-[30px]  md:text-[56px]">Easy way to find a
                perfect property </h1> 
                <p className="mt-[39px] text-[22px]">
                We provide a complete service for the sale,
                purchase or rental of real estate.
                </p>  
                </div>

                <div className="  md:mx-[89px] md:my-[62px] md:h-[141px] md:w-[918px] ">
                  <div className="md:flex gap-4">
                    <button className="w-[102px] h-[39px] bg-white rounded-t-lg text-[14px] font-medium">RENT</button>
                    <button className="w-[102px] h-[39px] text-[#8F90A6] text-[14px] font-medium">BUY</button>
                    <button className="w-[102px] h-[39px] text-[#8F90A6] text-[14px] font-medium">SELL</button>
                  </div>
                  <div className="w-full  border-red-500 sm:rounded-2xl md:rounded-none  md:flex-row md:flex md:items-center justify-between md:h-[102px] bg-slate-50 opacity-[95%]">
                        <div className=" sm:gap-y-3  w-[688px] md:h-[62px] sm:flex sm:flex-col   md:flex  md:flex-row  gap-x-3 my-5 mx-7">
                            <div className=" md:w-56 sm:w-full border-r-2 relative border-[#DCDCEB] ">
                                <h1 className="text-[18px] font-semibold ">Location</h1>
                                <p className="text-[#8F90A6]">select your city</p>
                                <CiLocationOn className="absolute top-7 right-2"/>

                            </div>
                            <div className=" md:w-56  border-r-2 relative border-[#DCDCEB] ">
                                <h1 className="text-[18px] font-semibold ">Property Type</h1>
                                <p className="text-[#8F90A6]">Choose property type</p>
                                <IoIosArrowDropdown className="absolute top-7 right-2"/>

                            </div>
                            <div className="  relative border-[#DCDCEB] ">
                                <h1 className="text-[18px] font-semibold ">Price Range</h1>
                                <p className="text-[#8F90A6]">choose price range</p>
                             

                            </div>
                        </div>
                        <div className="h-[54px] sm:mx-8  w-[54px] bg-[#1DAEFF] mr-[37px] rounded-md flex justify-center items-center">
                        <IoSearch className="w-[17px] h-[17px"/>
                        </div>
                  </div>
                </div>
        </div>
        </>
    )


}
