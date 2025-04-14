import { useState } from "react"
import {mainData} from "../../data/mainline"
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import BasicLeft from "../SpaceCreation/BasicLeft";
import BasicRight from "../SpaceCreation/BasicRight";
import Thankleft from "../SpaceCreation/Thankleft";
import ThankRight from "../SpaceCreation/ThankRight";
import SettingRight from "../SpaceCreation/SettingRight";
import NotifyLeft from "../SpaceCreation/NotifyLeft";
import NotifyRight from "../SpaceCreation/NotifyRight";
import { useEffect } from "react";
const SpaceCreation = () => {
    const [page,setPage]=useState("Basic");
    useEffect(() => {
      const handleBeforeUnload = (event:any) => {
        event.preventDefault();
        event.returnValue = ""; // Modern browsers display a generic message
      };
    
      window.addEventListener("beforeunload", handleBeforeUnload);
    
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);
  return (
  <div className="w-full min-h-[100vh] flex flex-col bg-[#18181b] pt-8 items-end">
        <div className="w-[95%] flex flex-col md:flex-row justify-between mx-auto">
          <div className=" w-full   md:w-[40%] mt-9 md:p-10">
          {page === "Basic" && (
          <BasicLeft/>
          )}
          {page === "Thank you page" && (
          <>
          <Thankleft />
          </>
          )}
          {page === "Extra settings" && (
          <>
          <BasicLeft />
          </>
          )}
          {page === "Notifications" && (
          <>
          <NotifyLeft />
          </>
          )}
          </div>
          <div className=" w-full  md:w-[60%] md:p-5 mt-10">
             <div className="w-full   py-2 flex flex-row items-center">
             {mainData.map((data) => {
             return (
             <div
          onClick={() => { setPage(data.page) }}
          className={`w-[45%] sm:w-[25%]   hover:bg-black/40 
   space-x-2  ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10 flex items-center rounded-md  text-white justify-center px-1 py-2 gap-x-1 md:m-2 transition-all duration-200  ${page === data.page && "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"}`}>
          {/* Display Icons Based on data.icon */}
          {data.icon === "IoSettingsOutline" && <IoSettingsOutline />}
          {data.icon === "CiHeart" && <CiHeart />}
          {data.icon === "GiSettingsKnobs" && <GiSettingsKnobs />}
          {data.icon === "IoMdNotificationsOutline" && <IoMdNotificationsOutline />}
          <span className="text-xs sm:text-base">{data.page}</span>
             </div>
             )
             })}
              </div>
              {page === "Basic" && (
              <>
              <BasicRight />
              </>
               )}
            {page === "Thank you page" && (
            <>
            <ThankRight />
          </>
          )}
          {page === "Extra settings" && (
          <>
          <SettingRight />
          </>
          )}
          {page === "Notifications" && (
          <>
          <NotifyRight />
          </>
          )}
          </div>
        </div>
  </div>

  )
}

export default SpaceCreation
