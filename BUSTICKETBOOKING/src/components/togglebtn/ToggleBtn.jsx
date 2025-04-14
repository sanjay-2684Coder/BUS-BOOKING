import React, { Children, useEffect, useRef, useState } from "react";
 
const ToggleBtn = ({buttonText, buttonTextHidden, children})=>{
  
    const [isVisible,setIsVisible] = useState(true);
    const ToggleRef = useRef(null);

    const toggleVisibility = ()=>{
        setIsVisible(!isVisible);

    }
    const handleOutsides= (e)=>{
        if(ToggleRef.current && !ToggleRef.current.contains(e.target)){
            setIsVisible(false);
        }
    }

    useEffect(()=>{
          document.addEventListener('mousedown',handleOutsides);
          return ()=>{
            document.removeEventListener('mousedown',handleOutsides);
          }
          
    },[]);
     
    return (
        <div className='w-full h-auto' ref={ToggleRef}>
         <button 
         onClick={toggleVisibility}
         className= {`w-fit px-4 py-2 border-2 border-primary ${!isVisible ? "bg-primary text-neutral-50" : "border-primary bg-transparent text-primary"} rounded-lg transition`}>
         {isVisible ? buttonTextHidden : buttonText }
         </button>
         {isVisible && (
            <div className='mt-4 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm'>
          {children}
            </div>
         )}
        </div>
    )

}
export default ToggleBtn;