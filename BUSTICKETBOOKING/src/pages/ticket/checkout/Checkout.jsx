import React from "react";
import RootLayout from "../../../layout/RootLayout";
import PassengerData from "./passengerdata/PassengerData";
import TopLayout from "../../../layout/topPage/TopLayout";
import BookingStatus from "./bookingstatus/BookingStatus";
const Checkout =()=>{
return (
    <div className="w-full space-y-12 pb-16">
         <TopLayout
            bgImg="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
            title={"BCheckout"}
        />

        <RootLayout className={"space-y-12 w-full pb-16"}>
            <div className="w-full grid grid-cols-7 items-start gap-44 relative">

                {/*Passenger details */}
              <PassengerData/>
                {/*Ticket Report Status */}
            <BookingStatus/>
            </div>
        </RootLayout>
         

    </div>
)
}
export default Checkout;