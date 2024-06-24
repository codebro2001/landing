import rectangleusa from "../assets/rectangleusa.png"
import rectangleuk from "../assets/rectangleuk.png"
import rectangleparis from "../assets/rectangleparis.png"
import rectanglecastle from "../assets/rectanglecastle.png"
export default function Cards() {
    return (
        <>
            <div className="  md:w-[1201px]  md:mx-[10%] text-center md:mt-[103px] ">
                
                    <h1 className="font-semibold luqfa sm:text-[25px]  md:text-[38px] text-[#110229]">
                    We are available in many <br/>
                     well-known countries
                    </h1>
            
                <div className="  flex sm:flex sm:flex-wrap md:flex-nowrap sm:gap-y-[30px] md:gap-y-0 justify-center gap-x-[30px] md:my-[56px]">

                        <div className="w-[278px] h-[426px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${rectangleusa})`}}>
                            <h1 className="my-[40px] font-semibold text-2xl">AMERICA</h1>
                        </div>
                        <div className="w-[278px] h-[426px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${rectangleuk})`}}>
                            <h1 className="my-[40px] font-semibold text-2xl">LONDON</h1>
                        </div>
                        <div className="w-[278px] h-[426px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${rectangleparis})`}}>
                            <h1 className="my-[40px] font-semibold text-2xl">PARIS</h1>
                        </div>
                        <div className="w-[278px] h-[426px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${rectanglecastle})`}}>
                            <h1 className="my-[40px] font-semibold text-2xl">SPAIN</h1>
                        </div>

                </div>


            </div>        
        
        
        </>
    )
}