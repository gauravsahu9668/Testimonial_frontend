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
    // <div className="w-full min-h-[100vh] flex flex-col items-end">
    //     <div className="w-[50%] mt-6 mr-16 rounded-md border-[1px] border-[#a1a1bc]  flex flex-row ">
    //         {
    //             mainData.map((data)=>{
    //                 return (
    //                     <div onClick={()=>{setPage(data.page)}} className={`w-[25%] cursor-pointer flex rounded-md items-center justify-center px-3 py-2  gap-x-3 ${page===data.page && "bg-[#5D5DFF]"}`}>
    //                         {
    //                             data.icon==="IoSettingsOutline" && <IoSettingsOutline></IoSettingsOutline>
    //                         }
    //                         {
    //                             data.icon==="CiHeart" && <CiHeart></CiHeart>
    //                         }
    //                         {
    //                             data.icon==="GiSettingsKnobs" && <GiSettingsKnobs></GiSettingsKnobs>
    //                         }
    //                         {
    //                             data.icon==="IoMdNotificationsOutline" && <IoMdNotificationsOutline></IoMdNotificationsOutline>
    //                         }
    //                         <span>{data.page}</span>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    //     <div className="w-full px-5 relative">
    //         {
    //             page==="Basic" && 
    //             <>
    //             <BasicLeft></BasicLeft>
    //             <BasicRight></BasicRight>
    //             </>
                
    //         }
    //         {
    //             page==="Thank you page" && 
    //             <>
    //             <Thankleft></Thankleft>
    //             <ThankRight></ThankRight>
    //             </>
                
    //         }
    //         {
    //             page==="Extra settings" && 
    //             <>
    //              <BasicLeft></BasicLeft>
    //              <SettingRight></SettingRight>
    //             </>
    //         }
    //         {
    //             page==="Notifications" && 
    //             <>
    //              <NotifyLeft></NotifyLeft>
    //              <NotifyRight></NotifyRight>
    //             </>
    //         }
    //     </div>
    // </div>
  //   <div className="w-full min-h-[100vh] flex flex-col items-end">
  // <div className="w-[90%] sm:w-[80%] md:w-[50%] mt-6 mr-4 sm:mr-8 lg:mr-16 rounded-md border-[1px] border-[#a1a1bc] flex flex-row flex-wrap sm:flex-nowrap">
  //   {
  //     mainData.map((data) => {
  //       return (
  //         <div 
  //           onClick={() => { setPage(data.page) }} 
  //           className={`w-[45%] sm:w-[25%] cursor-pointer flex rounded-md items-center justify-center px-3 py-2 gap-x-3 ${page === data.page && "bg-[#5D5DFF]"}`}>
  //           {
  //             data.icon === "IoSettingsOutline" && <IoSettingsOutline />
  //           }
  //           {
  //             data.icon === "CiHeart" && <CiHeart />
  //           }
  //           {
  //             data.icon === "GiSettingsKnobs" && <GiSettingsKnobs />
  //           }
  //           {
  //             data.icon === "IoMdNotificationsOutline" && <IoMdNotificationsOutline />
  //           }
  //           <span className="text-xs sm:text-base">{data.page}</span>
  //         </div>
  //       );
  //     })
  //   }
  // </div>
  // <div className="w-full px-5 relative">
  //   {
  //     page === "Basic" && 
  //     <>
  //       <BasicLeft />
  //       <BasicRight />
  //     </>
  //   }

  //   {
  //     page === "Thank you page" && 
  //     <>
  //       <Thankleft />
  //       <ThankRight />
  //     </>
  //   }

  //   {
  //     page === "Extra settings" && 
  //     <>
  //       <BasicLeft />
  //       <SettingRight />
  //     </>
  //   }

  //   {
  //     page === "Notifications" && 
  //     <>
  //       <NotifyLeft />
  //       <NotifyRight />
  //     </>
  //   }
  // </div>
  //   </div>
  <div className="w-full min-h-[100vh] flex flex-col items-end">
  {/* Menu Section with Hover Effects and Shadows */}
  <div className="w-[90%] sm:w-[80%] md:w-[50%] mt-6 mr-4 sm:mr-8 lg:mr-16 rounded-md border-[1px] border-[#a1a1bc] flex flex-row flex-wrap sm:flex-nowrap shadow-lg hover:shadow-xl transition-all duration-300">
    {mainData.map((data) => {
      return (
        <div
          onClick={() => { setPage(data.page) }}
          className={`w-[45%] sm:w-[25%] cursor-pointer flex rounded-md items-center justify-center px-3 py-2 gap-x-3 transition-all duration-200 hover:bg-[#7979ff] ${page === data.page && "bg-[#5D5DFF] text-white"}`}>
          {/* Display Icons Based on data.icon */}
          {data.icon === "IoSettingsOutline" && <IoSettingsOutline />}
          {data.icon === "CiHeart" && <CiHeart />}
          {data.icon === "GiSettingsKnobs" && <GiSettingsKnobs />}
          {data.icon === "IoMdNotificationsOutline" && <IoMdNotificationsOutline />}
          
          {/* Page Name */}
          <span className="text-xs sm:text-base">{data.page}</span>
        </div>
      );
    })}
  </div>

  {/* Content Section (Conditionally Render Components Based on Page) */}
  <div className="w-full px-5 relative mt-6">
    {page === "Basic" && (
      <>
        <BasicLeft />
        <BasicRight />
      </>
    )}

    {page === "Thank you page" && (
      <>
        <Thankleft />
        <ThankRight />
      </>
    )}

    {page === "Extra settings" && (
      <>
        <BasicLeft />
        <SettingRight />
      </>
    )}

    {page === "Notifications" && (
      <>
        <NotifyLeft />
        <NotifyRight />
      </>
    )}
  </div>
</div>

  )
}

export default SpaceCreation
