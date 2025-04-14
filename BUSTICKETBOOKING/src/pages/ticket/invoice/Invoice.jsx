import React, { useRef } from "react";
import TopLayout from "../../../layout/topPage/TopLayout";
import RootLayout from "../../../layout/RootLayout";
import PassengerInvoice from "./passengerInvoice/PassengerInvoice";
import CompanyInvoice from "./company/CompanyInvoice";
import {toPng} from 'html-to-image';
import download from 'downloadjs'
const Invoice =() =>{

   const invoiceRef = useRef(null);
   const handleDownload = async() =>{

    if(invoiceRef.current === null) return ;
    try{
      const dataUrl = await toPng(invoiceRef.current)
      download(dataUrl,"g-tech-invoice-report.png");
    }
    catch(error){
      console.error("Error while downloading the invoice", error);
    }
   }
  return(
    <div className="w-full space-y-12 pb-16">
         <TopLayout
            bgImg="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
            title={"Collect your invoice"}
        />

        <RootLayout className={"space-y-12 w-full pb-16"}>
            <div className="w-full flex items-center justify-center">

                {/* invoice card*/}
                 < div 
                      ref={invoiceRef}
                      className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative">

                {/*left side */}
                  <PassengerInvoice/>
                {/*right side */}
               <CompanyInvoice/>
               {/* cut circle */}
            
               <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />

               <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
                 </div>
                
               </div>
               {/* download invoice card button */}
               <div className="w-full flex justify-center items-center">
                 <button onClick={handleDownload} className="w-fit px-8 h-14 bg-primary text-neutral-50 font-bold text-lg rounded-lg">
                  Download Invoice
                 </button>

            </div>
        </RootLayout>
         

    </div>
  )
}
export default Invoice;