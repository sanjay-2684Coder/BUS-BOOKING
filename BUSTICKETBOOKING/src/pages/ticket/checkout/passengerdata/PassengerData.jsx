import React from "react";
import PaymentMethod from "./payment/PaymentMethod";

const PassengerData = () =>{
    return(
      <div className="w-full col-span-4 py-4 space-y-6" > 
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>
      <div className="space-y-7">
        <div className="w-full space-y-2">
            <label htmlFor="fullname" className="text-sm text-neutral-500 font-medium">
                Full Name </label>
            <input  type="text" placeholder='e.g Ram' className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border
                   border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal
                   placeholder:text-neutral-400"/>
        </div>
        <div className="w-full space-y-2">
            <label htmlFor="email" className="text-sm text-neutral-500 font-medium">
                Email Address </label>
            <input  type="email" placeholder='ram@example.com' className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border
                   border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal
                   placeholder:text-neutral-400"/>
        </div>
        <div className="w-full space-y-2">
            <label htmlFor="phoneNo" className="text-sm text-neutral-500 font-medium">
                Phone </label>
            <input  type="Altnumber" placeholder='e.g +91 9654808554' className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border
                   border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal
                   placeholder:text-neutral-400"/>
        </div>
        <div className="w-full space-y-2">
            <label htmlFor="number" className="text-sm text-neutral-500 font-medium">
                Alternate Phone</label>
            <input  type="number" placeholder='e.g +91 8154808554' className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border
                   border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal
                   placeholder:text-neutral-400"/>
        </div>
        <div className="w-full space-y-2">
            <label htmlFor="number" className="text-sm text-neutral-500 font-medium">
                Pickup Station</label>
                <select
  defaultValue=""
  className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border
             border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal
             placeholder:text-neutral-400"
>
  <option value="" disabled>
    choose your Nearest Pickup Station
  </option>
  <option value="sarvate">Sarvate Bus Station</option>
  <option value="chawni">Chawni</option>
  <option value="naklakha">Navlakha</option>
  <option value="chotigawaltoli">Choti Gawal Toli</option>
  <option value="gangwal">Gangwal</option>
</select>

          
             
        </div>

      </div>
      {/*Payment method */}
      <PaymentMethod/>
  </div>
    )
}
export default PassengerData;