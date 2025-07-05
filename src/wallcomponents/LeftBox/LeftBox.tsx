import { FiLayout } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import LeftLayout from "./leftLayout";
import LeftReview from "./leftReview";
import LeftSettings from "./leftSettings";
import LeftStyle from "./leftStyle";
const LeftBox = () => {
  const [page,setpage]=useState("Layout");
  return (
    <div className=" w-full md:w-1/4 bg-[#202020] text-gray-100 shadow-black border-t-[1px] border-[#050505] flex ">
        <div className="w-[20%] h-full border-r-[1px] border-black flex flex-col items-center">
            
             <div onClick={()=>{setpage("Layout")}} className={`flex flex-col w-full  py-3 items-center text-[15px] cursor-pointer hover:text-[#e3e1e1] ${page==="Layout"?"text-[#e3e1e1]":"text-[#8F8F8F]"} hover:bg-[#343434] `}>
                <FiLayout size={"20px"}></FiLayout>
                <span>layout</span>
             </div>
             <div  onClick={()=>{setpage("Review")}} className={`flex flex-col w-full  py-3 items-center text-[15px] cursor-pointer hover:text-[#e3e1e1] ${page==="Review"?"text-[#e3e1e1]":"text-[#8F8F8F]"} hover:bg-[#343434] `}>
                <IoImageOutline size={"20px"}></IoImageOutline>
                <span>review</span>
             </div>
             <div  onClick={()=>{setpage("Style")}}  className={`flex flex-col w-full  py-3 items-center text-[15px] cursor-pointer hover:text-[#e3e1e1] ${page==="Style"?"text-[#e3e1e1]":"text-[#8F8F8F]"} hover:bg-[#343434] `}>
                <IoIosColorPalette size={"20px"}></IoIosColorPalette>
                <span>style</span>
             </div>
             <div  onClick={()=>{setpage("Settings")}} className={`flex flex-col w-full  py-3 items-center text-[15px] cursor-pointer hover:text-[#e3e1e1] ${page==="Settings"?"text-[#e3e1e1]":"text-[#8F8F8F]"} hover:bg-[#343434] `}>
                <IoMdSettings size={"20px"}></IoMdSettings>
                <span>settings</span>
             </div>
        </div>
       <div className={`w-full h-full`}>
          <div className="w-full h-[10%] border-b-[1px] border-black flex items-center justify-center text-[20px] text-[#e4e2e2]">
            {page}
          </div>
          <div className="w-full px-3 scrollbar overflow-y-scroll h-[75%]">
            {
              page==="Layout" && <LeftLayout></LeftLayout>
            }
            {
              page==="Review" && <LeftReview></LeftReview>
            }
            {
              page==="Style" && <LeftStyle></LeftStyle>
            }
            {
              page==="Settings" && <LeftSettings></LeftSettings>
            }
          </div>
         <div className="w-full h-[15%] flex items-center justify-center px-3 border-t-[1px] border-black">
              <div className="bg-gradient-to-r flex items-center  from-emerald-500  to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Add to your website
              </div>
         </div>
        </div>
        
    </div>
  )
}

export default LeftBox
