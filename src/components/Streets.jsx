import rectangle from "../assets/Rectangle7.png"

export default function Streets({data}) {
    
    return (
        <>
            <div className="   mx-[10%] mt-[103px]">
               <div className="flex justify-between mb-5 md:w-[1202px] border-red-400" >

                <h1 className="text-[28px]">Recently Added</h1>
                <h1 className="text-[24px] text-[#1DAEFF]">See all</h1>
                </div>

                <div className="grid grid-cols-1  md:grid gap-5  md:grid-cols-2 md:place-content-between">
                   {
                    data.map((item) => (
                    <div className=" flex p-6 rounded-xl border-[#1DAEFF]  border-2  ">
                      <div className="mx-6 px-5">
                        <img className="w-[132px] h-[191px]" src={item.image} alt="" />
                      </div>
                      <div className="flex flex-col gap-y-[32px]">
                        <h1 className="font-italic text-[20px] font-semibold">{item.street}</h1>
                        <div >
                            <h1 className="text-[#8F90A6] italic">{item.characteristics}</h1>
                        </div>
                        <div className="flex justify-between items-center italic ">
                            <h1 className="text-[#8F90A6]">{item.postedby}</h1>
                            <button className="w-[108px] h-[38px] bg-[#8F90A6] rounded-md text-white">{item.price}</button>
                        </div>
                       </div>
                    </div>
                    )) 
                   }
                </div>
             </div>  
        </>
    );

}
