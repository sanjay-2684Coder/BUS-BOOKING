import React from "react"
import BusImg from "../../../../assets/bus.png";
import { FaCircle, FaPhone } from "react-icons/fa6";
import QrImg from "../../../../assets/qrcode.jpg";
const PassengerInvoice =()=>{
    return(
        <div className="w-full col-span-4 rounded-xl relative">
            {/*Top bus details */}
            <div className="w-full flex items-center justify-between bg-primary px-6 py-3 rounded-tl-3xl">
             <div className="flex items-center gap-x-3">
                <img src={BusImg} alt="bus img" className=" w-auto h-12 object-cover object-center"/>
                <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
                Sworgadwari Deluxe
                </h1>
             </div>
             <div className="flex items-center gap-x-2">
                <p className="text-xl text-neutral-50 font-bold">
                    <span className="text-lg ">(Bus No.)</span> MP 09 4234
                </p>
             </div>
            </div>
     
          <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-6 mb-1">
               <div className="col-span-4 space-y-3.5">

               {/*bill no.  */}
               <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
                    <p className="text-base text-neutral-500 font-normal">
                        Bill No. 786
                    </p>
                    <p className="text-base text-neutral-500 font-normal">
                        NPR 1600 <span className="text-xs">/seat</span>
                    </p>
                    <p className="text-base text-neutral-500 font-normal">
                        Date: 2024-10-31
                    </p>
                </div>
                {/* passenger details */}
                <div className=" w-full flex items-center justify-between">
                    <div className="space-y-1.5">
                    <p className="text-base text-neutral-500 font-normal">
                        Name of Passenger: <span className="font-medium">Sanjay</span>
                    </p>
                    <p className="text-base text-neutral-500 font-normal">
                        Total Seat No: <span className="font-medium">
                            A2,A3,A4,B6
                        </span>
                    </p>
                    <p className="text-base text-neutral-500 font-normal">
                        Total No. of Passenger: <span className="font-medium">
                            04 only
                        </span>
                    </p>
                    <p className="text-base text-neutral-500 font-normal">
                        Pickup Station: <span className="font-medium">Navlakha</span>
                    </p>
                    </div>
                    <div className="space-y-4 flex items-center justify-center flex-col">
                      <div className="space-y-1 text-center">
                      <p className="text-base text-neutral-500 font-normal">
                        Total Price: 
                    </p>
                    <h1 className="text-xl text-neutral-600 font-bold">
                        NPR 6400
                    </h1>
                      </div>
                      <div className="w-fit px-3 py-1 rounded-full bg-green-500/5 border border-green-600 text-green-600 text-sm font-medium flex items-center justify-center gap-2">
                        <FaCircle size={16}/>
                        <span>Bill Paid</span>
                      </div>
                    </div>
                </div>

                {/*route details */}
                <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
                <p className="text-base text-neutral-600 font-normal">
                        Indore <span className="text-neutral-400 px-2">--------</span>
                        Mumbai
                    </p>
                    <p className="text-base text-neutral-600 font-normal">
                        Arrive at 05:45 PM
                    </p>
                    <p className="text-base text-neutral-600 font-normal">
                        Departure at 06:30 PM
                    </p>
                </div>
              </div>
              <div className=" col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
                <img src={QrImg} alt="Qr Img" className="w-full aspect-square object-cover object-center rounded-xl"/>
              </div>
          </div>
                
         {/*Left bottom section */}
         <div className="w-full bg-primary absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5">
             <p className="text-xs text-neutral-100 font-light">
                Note : 40% charge for cancellation price 24hours of programme.
             </p>
             <div className="flex items-center gap-x-2">
                <FaPhone className="w-3 h-3 text-neutral-100"/>
                <p className="text-sm text-neutral-100 font-light">
                  +91-9088433433 , +91-7993847735
                </p>
             </div>
         </div>
        </div>
    )
}
export default PassengerInvoice;