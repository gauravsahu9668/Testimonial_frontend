import { useSelector } from "react-redux"
const Thankleft = () => {
  const {thankyougif,thankyouTitle,thankyouMessage}=useSelector((state:any)=>state.thankyou)
  return (
    // <div className="w-[30%]   min-h-[60vh] absolute left-24 -top-10   border-[1px] bg-[#e9e6e666]   rounded-md">
    //     <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">Live priview - Thank you page</div>
    //     <div className="w-full h-full flex flex-col justify-center">
    //       <div className="w-[90%] h-[210px]  mx-auto mt-10 rounded-md flex items-center justify-center">
    //         <img src={thankyougif} className="w-full h-full"></img>
    //       </div>
    //       <h1 className="w-full mt-4  text-center text-[40px] px-6 text-[#55595F] font-bold ">
    //         {thankyouTitle===""? "Thank you!" : `${thankyouTitle}`}
    //       </h1>
    //       <p className="w-full mt-4  text-center px-6 text-[18px] text-[#55595F]">
    //         {
    //           thankyouMessage==="" ? "Thank you so much for your shoutout! It means a ton for us! 🙏" : `${thankyouMessage}`
    //         }
    //       </p>
    //     </div>
    // </div>
    <div className="w-full relative bg-[#020203] mt-8 pt-6 pb-5 min-h-[60vh] rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300">
  <div className="text-[#059669] left-4 absolute -top-4 font-semibold text-[16px] py-1 px-2 w-fit rounded-full bg-[#A7F3D0]">
    Live preview - Thank you page
  </div>

  <div className="w-full h-full flex flex-col justify-center">
    <div className="w-[90%] h-[210px] mx-auto mt-10 rounded-md flex items-center justify-center">
      <img src={thankyougif} className="w-full h-full rounded-md" alt="Thank you animation" />
    </div>

    <h1 className="w-full mt-4 text-center text-[40px] px-6 text-[#c6c8c9] font-bold">
      {thankyouTitle === "" ? "Thank you!" : thankyouTitle}
    </h1>

    <p className="w-full mt-4 text-center px-6 text-[18px] text-[#c6c8c9]">
      {thankyouMessage === "" ? "Thank you so much for your shoutout! It means a ton for us! 🙏" : thankyouMessage}
    </p>
  </div>
</div>

  )
}

export default Thankleft
