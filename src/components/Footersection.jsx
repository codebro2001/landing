import logo from "../assets/Logo.png";
import arrowbutton from "../assets/Group8.png";
export default function Footersection({ footersocialmedia }) {
  return (
    <>
      <div className=" md:mx-[8%] md:flex md:justify-around  justify-center my-20">
        <div className=" w-[410px] ">
          <img src={logo} alt="" />
          <p className="my-6 text-[#8F90A6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-8 my-6">
            {footersocialmedia.map((item) => (
              <img className="h-[22px] w-[22px]" src={item.img} alt="" />
            ))}
          </div>
          <p className="text-[#8F90A6]">© 2021 . All rights reserved.</p>
        </div>
        <div className="flex flex-col text-[#110229] font-semibold gap-6 my-6">
          <h1>take a tour</h1>
          <h1>features</h1>
          <h1>partners</h1>
          <h1>pricing</h1>
          <h1>product</h1>
          <h1>support</h1>
        </div>
        <div className="flex flex-col gap-6 text-[#110229] font-semibold my-6">
          <h1>Our company</h1>
          <h1>about us </h1>
          <h1>agents</h1>
          <h1>blog</h1>
          <h1>media</h1>
          <h1>contact us</h1>
        </div>
        <div className="w-[227px] mt-6">
            <h1>subscribe</h1>
            <p className="text-[#8F90A6] my-6 ">Subscribe to get latest property, blog news from us</p>
           <div className="relative inline-block   ">
            <input className="h-[54px] border-[#8F90A6] border-2 rounded-lg w-[227px] p-4" type="text" placeholder="Email Address" />
            <img className="absolute top-2 right-2 " src={arrowbutton} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
