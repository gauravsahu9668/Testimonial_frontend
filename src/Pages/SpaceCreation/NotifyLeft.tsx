import { useState } from "react"
import { useSelector } from "react-redux"
import  videoLogo from "../../assets/videologo.avif"
const NotifyLeft = () => {
  const {notifySubject,notifyMessage}=useSelector((state:any)=>state.extra)
  const [notification,setNotification]=useState<String>("Text")
  return (
    // <div className="w-[34%] bg-[#e9e6e666]  min-h-[80vh] absolute left-24 -top-10   border-[1px]   rounded-md">
    //    <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">Live preview</div>
    //    <div className="w-[80%] mx-auto mt-6 p-3 rounded-md bg-white">
    //    <div>
    //    <div className="text-[18px] w-[90%] mx-auto mt-2 text-black font-semibold">Hey John Doe,</div>
    //    <div className="text-[16px] w-[90%] mx-auto mt-2 text-black font-semibold">{
    //     notifySubject==="" ? "You just made a testimonial to 🥳" : `${notifySubject}`
    //     }</div>
    //     <div className="text-[14px] w-[90%] mx-auto text-start mt-2 text-[#1d1c1cb3]">{
    //     notifyMessage==="" ? "Here goes the message of your notification.." : `${notifyMessage}`
    //     }</div>
    //     {
    //       notification==="Text" ? 
    //       <div className="w-[90%] bg-[#FEF3C7] mt-4 rounded-2xl py-7 text-black font-bold text-[18px] mx-auto flex items-center justify-center">
    //         Wow what a great product!
    //       </div> :
    //       <div className="w-[90%] h-[180px] bg-[#FEF3C7] mt-4 rounded-2xl  text-black font-bold text-[18px] mx-auto flex items-center justify-center">
    //         <img src={videoLogo} className="w-full h-full rounded-2xl"></img>
    //       </div>
    //     }
    //     <div className=" mt-4 text-[16px] w-[90%] mx-auto  text-black font-semibold flex flex-col items-start gap-x-4">Retweet to spread the word 👇
    //     <button className=" rounded-md mt-4 bg-[#1DA1F2] px-3 py-2 text-[16px] text-white font-semibold">Share On </button>
    //     </div>
    //     <div className=" mt-4 text-[14px] w-[90%] mx-auto  text-[#39393a] font-semibold">
    //        — Gaurav from Testimonial
    //     </div>
    //    </div>
    //    </div>
    //    <div className="w-full h-[50px] absolute bottom-0 flex flex-row ">
    //       <button className={`w-[50%] flex items-center justify-center ${notification==="Text"?  "bg-[#5D5DFF]" :"bg-white"}`} onClick={()=>{setNotification("Text")}}>Text</button>
    //       <button className={`w-[50%] flex items-center justify-center ${notification==="Video"? "bg-[#5D5DFF]":"bg-white"}`} onClick={()=>{setNotification("Video")}}>Video</button>
    //    </div>
    // </div>
    <div className="w-[34%] bg-[#e9e6e666] min-h-[80vh] absolute left-24 -top-10 border-[1px] rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
  {/* Live Preview Banner */}
  <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">
    Live preview
  </div>

  {/* Notification Box */}
  <div className="w-[80%] mx-auto mt-6 p-3 rounded-md bg-white">
    <div className="text-[18px] w-[90%] mx-auto mt-2 text-black font-semibold">Hey John Doe,</div>

    <div className="text-[16px] w-[90%] mx-auto mt-2 text-black font-semibold">
      {notifySubject === "" ? "You just made a testimonial to 🥳" : `${notifySubject}`}
    </div>

    <div className="text-[14px] w-[90%] mx-auto text-start mt-2 text-[#1d1c1cb3]">
      {notifyMessage === "" ? "Here goes the message of your notification.." : `${notifyMessage}`}
    </div>

    {/* Conditional Notification Content */}
    {
      notification === "Text" ? 
      <div className="w-[90%] bg-[#FEF3C7] mt-4 rounded-2xl py-7 text-black font-bold text-[18px] mx-auto flex items-center justify-center">
        Wow what a great product!
      </div> :
      <div className="w-[90%] h-[180px] bg-[#FEF3C7] mt-4 rounded-2xl text-black font-bold text-[18px] mx-auto flex items-center justify-center">
        <img src={videoLogo} className="w-full h-full rounded-2xl" alt="Video"></img>
      </div>
    }

    {/* Retweet Section */}
    <div className="mt-4 text-[16px] w-[90%] mx-auto text-black font-semibold flex flex-col items-start gap-x-4">
      Retweet to spread the word 👇
      <button className="rounded-md mt-4 bg-[#1DA1F2] px-3 py-2 text-[16px] text-white font-semibold hover:bg-[#0A81C2] transition-colors duration-200">
        Share On
      </button>
    </div>

    {/* Footer Section */}
    <div className="mt-4 text-[14px] w-[90%] mx-auto text-[#39393a] font-semibold">
      — Gaurav from Testimonial
    </div>
  </div>

  {/* Notification Type Toggle Buttons */}
  <div className="w-full h-[50px] absolute bottom-0 flex flex-row bg-white border-t-[1px] border-[#E2E8ED] rounded-b-md">
    <button
      className={`w-[50%] flex items-center justify-center p-2 ${notification === "Text" ? "bg-[#5D5DFF] text-white" : "bg-white text-black"}`}
      onClick={() => { setNotification("Text") }}
    >
      Text
    </button>

    <button
      className={`w-[50%] flex items-center justify-center p-2 ${notification === "Video" ? "bg-[#5D5DFF] text-white" : "bg-white text-black"}`}
      onClick={() => { setNotification("Video") }}
    >
      Video
    </button>
  </div>
</div>

  )
}

export default NotifyLeft
