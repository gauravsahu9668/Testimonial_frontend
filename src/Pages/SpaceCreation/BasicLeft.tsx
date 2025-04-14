import { useSelector } from "react-redux"
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
const BasicLeft = () => {
  const {headerTitle,customMessage,questions,spaceLogo}=useSelector((state:any)=>state.form1)
  const {videoButtonText,textButtonText,QuestionLabel}=useSelector((state:any)=>state.extra)
  
  return (
    // <div className="w-[34%] bg-[#e9e6e666]  min-h-[80vh] absolute left-24 -top-10   border-[1px]   rounded-md">
    //     <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">Live priview - Testimonial page</div>
    //      <div className="mt-10 w-[60%] h-[150px] bg-[#9b979766] rounded-md mx-auto">
    //       <img src={spaceLogo} className="w-full h-full rounded-md"></img> 
    //      </div>
    //      <div className="text-[30px] mt-2 text-center font-semibold px-4">
    //       {
    //         headerTitle===""? "Header goes here..." : `${headerTitle}`
    //       }
    //      </div>
    //      <div className="text-[18px] mt-2 text-center px-4 w-full text-[#666]">
    //        {customMessage==="" ? "Your custom message goes here...": `${customMessage}`}
    //      </div>
    //      <div className="flex flex-col w-full items-start">
    //         <span className="text-[18px] mt-2 text-start w-full px-6 font-semibold">
    //           {
    //             QuestionLabel==="" ? "Questions" :`${QuestionLabel}`
    //           }
    //         </span>
    //         <div className="flex flex-col items-start min-h-[120px] p-4 gap-y-4">
    //           {
    //             questions.map((ques:String,index:any)=>{
    //               return (
    //                 <div key={index} className="text-[18px] flex items-center w-full  gap-x-4  text-[#666]">
    //                   <div className="w-[10px] h-[10px] rounded-full bg-[#77aee5]"></div>
    //                   <div>
    //                   {
    //                     ques
    //                   }
    //                   </div>
    //                 </div>
    //               )
    //             })
    //           }
    //         </div>
    //      </div>
    //      <div className="w-full flex flex-col items-center justify-center gap-y-2 mt-3 mb-14">
    //         <button className="bg-[#5D5DFF] text-white w-[70%] rounded-md py-2 text-[18px]">
    //           <div className="w-full flex gap-x-4 items-center justify-center">
    //            <FaVideo></FaVideo>
    //            {
    //             videoButtonText==="" ? "Record a video" :                   
    //                 `${videoButtonText}`
    //            }
    //           </div>
    //           </button>
    //         <button className="bg-[#33363A] mt-2 text-white w-[70%] rounded-md py-2 text-[18px]">
    //           <div className="w-full flex gap-x-4 items-center justify-center">
    //            <IoMdText></IoMdText>
    //            {
    //             textButtonText==="" ? "Record a video" :                   
    //                 `${textButtonText}`
    //            }
    //           </div>
    //         </button>
    //      </div>
    // </div>
    <div className="  w-full relative bg-[#020203] mt-8 pt-6 pb-1 min-h-[60vh] rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300 ">
     <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">
    Live preview - Testimonial page
     </div>
  
  <div className="mt-10 w-[60%] h-[150px] bg-[#9b979766] rounded-md mx-auto">
    <img src={spaceLogo} className="w-full h-full rounded-md" alt="Testimonial space logo" />
  </div>
  
  <div className="text-[30px] mt-2 text-center text-white font-semibold px-4">
    {headerTitle === "" ? "Header goes here..." : `${headerTitle}`}
  </div>
  
  <div className="text-[18px] mt-2 text-center px-4 w-full text-[#808080]">
    {customMessage === "" ? "Your custom message goes here..." : `${customMessage}`}
  </div>

  <div className="flex flex-col w-full items-start text-white">
    <span className="text-[18px] mt-2 text-start w-full px-6 font-semibold">
      {QuestionLabel === "" ? "Questions" : `${QuestionLabel}`}
    </span>

    <div className="flex flex-col items-start min-h-[120px] p-4 gap-y-4">
      {questions.map((ques:any, index:any) => (
        <div key={index} className="text-[18px] flex items-center w-full gap-x-4 text-[#808080]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#77aee5]"></div>
          <div>{ques}</div>
        </div>
      ))}
    </div>
  </div>

  <div className="w-full flex flex-col items-center justify-center gap-y-2 mt-3 mb-14">
    <button className="bg-[#5D5DFF] text-white w-[70%] rounded-md py-2 text-[18px]">
      <div className="w-full flex gap-x-4 items-center justify-center">
        <FaVideo />
        {videoButtonText === "" ? "Record a video" : `${videoButtonText}`}
      </div>
    </button>

    <button className="bg-[#33363A] mt-2 text-white w-[70%] rounded-md py-2 text-[18px]">
      <div className="w-full flex gap-x-4 items-center justify-center">
        <IoMdText />
        {textButtonText === "" ? "Record a video" : `${textButtonText}`}
      </div>
    </button>
  </div>
    </div>

  )
}

export default BasicLeft
