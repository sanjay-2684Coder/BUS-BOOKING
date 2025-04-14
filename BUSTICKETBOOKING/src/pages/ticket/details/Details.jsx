import React from "react";
import WarningAlert from "../../../components/alertmessage/WarningAlert";
import { Link } from "react-router-dom";
import TopLayout from "../../../layout/topPage/TopLayout";
import RootLayout from "../../../layout/RootLayout";
import BusSeat from "./seat/busseat/BusSeat";
import ToggleBtn from "../../../components/togglebtn/ToggleBtn";
import Amenties from "./amenties/Amenties";
import ReservationPolicy from "./reservationploicy/ReservationPolicy";
import BusImage from "./busimage/BusImage";

const Details=()=>{

const message=(
    <>
   One individuals can only book 10 seats. If you want to book more than 10 seats,
   Please <Link to={"/support-team"} className="text-yellow-600 font-medium">Contact our support team.</Link>
   </>
);
   


    return(
        <div className="w-full space-y-12 pb-16">
        <TopLayout
            bgImg="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
            title="Bus Details"
        />

        <RootLayout className={"space-y-12 w-full pb-16"}>
         <div className="w-full space-y-8">
            {/*warning message */}
            <WarningAlert message={message}/>
            {/*seat Layout */}
            <BusSeat/>
         </div>

          {/*bus details */}
          <div className="w-full flex items-center justify-center flex-col gap-8 text-center">
            {/* short description about bus */}
            <p className="text-base text-neutral-500 font-normal text-justify">
             This is just a sample text for the demo purpose. 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Libero quaerat repellat incidunt velit eos cumque eaque magni 
             perspiciatis. Modi ad, laboriosam laudantium distinctio dolor 
             corrupti tempore earum eveniet numquam. Voluptate.
             Libero quaerat repellat incidunt velit eos cumque eaque magni 
             perspiciatis. Modi ad, laboriosam laudantium distinctio dolor 
             corrupti tempore earum eveniet numquam. Voluptate.
             <span className="text-lg text-neutral-600 font-medium ml-2">
                Want to see more about bus?
             </span>
            </p>
            {/*Buttons */}
            <div className="w-full flex items-center justify-center gap-6 flex-col">
                <ToggleBtn 
                 buttonText={"See Bus Details"}
                 buttonTextHidden={"Hide Bus Details"}
                >
                <div className="w-full space-y-10">
                    {/*reservation policy and amenities */}
                    <div className="w-full grid grid-cols-7 gap-20">
                        {/*Amenties */}
                         <Amenties/>
                        {/*reservation policy */}
                            <ReservationPolicy/>
                    </div>

                    {/* bus images */}
                    <BusImage/>
                </div>
                </ToggleBtn>
            </div>
          </div>
        </RootLayout>
        </div>
    )
}
export default Details;