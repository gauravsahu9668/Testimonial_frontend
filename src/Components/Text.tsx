type textReview={
    custMessage:string
    reviewImage:string
    starRating:number
    custName:string
    custEmail:string
    custPorfilePicture:string,createdAt:string,textReview_id:number,Liked:Boolean
}
interface VideoReviewProps {
    textReview:textReview[]
}
import { MdDownload } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import Rating from "./Rating"
import { FcLikePlaceholder } from "react-icons/fc"
import { IoMdCodeWorking } from "react-icons/io";
import axios from "axios"
import { BACKEND_URL } from "../server/axiosConnect"
import { useSelector } from "react-redux"
import { FcLike } from "react-icons/fc";
import toast from "react-hot-toast"
import { IoCopyOutline } from "react-icons/io5"
import { useState } from "react"
import handleDownload from "../services/createSpace"
const Text:React.FC<VideoReviewProps>  = ({textReview}) => {
    const { token} = useSelector((state: any) => state.auth);
    const [code,setcode]=useState(false);
    const [iframehtml,setiframehtml]=useState("");
    const [reviewid,setreviewid]=useState(-1);
    const crossHandler=()=>{
      setcode(false);
      setreviewid(-1);
    }
    const downloadimageHandler=(imageurl:string)=>{
       handleDownload(imageurl,"downloaded-file.jpg")
       toast.success("image start downloading")
    }
    const generateifram=async(id:number)=>{
        setcode(true)
        setreviewid(id);
       const iframe=`<iframe src="https://backend.sahug6194.workers.dev/api/v1/space/iframetext/${id}" width="700" height="400" style="border: none;"></iframe>`
       setiframehtml(iframe);
    }
    const [iscopied,setIsCopied]=useState(false)
    const copyHandler=()=>{
        navigator.clipboard.writeText(iframehtml);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        toast.success("code copied");
    }
    const likeHandler=async(Id:number,mark:boolean,type:string)=>{
        try{
            await axios({
                url:`${BACKEND_URL}/space/like`,
                method:"PUT",
                data:{Id,mark,type},
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then((response)=>{
                console.log(response)
                window.location.reload()
            })
        }catch(e){
        }
    }
  return (
    <>
      {
        textReview.map((data,index)=>{
                return (
                    <div className="flex relative flex-col w-[70%] my-6 mx-auto  bg-[#FAF5FF] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                       <div onClick={()=>{likeHandler(data.textReview_id,!data.Liked,"text")}} className="absolute right-4 top-4 w-[40px] h-[40px] group ">
                           {
                              data.Liked===true? <FcLike size={"2rem"} className="cursor-pointer" ></FcLike> : <FcLikePlaceholder size={"2rem"} className="cursor-pointer"></FcLikePlaceholder>
                           }
                       </div>
                      <div key={index} className="flex p-4 flex-row  w-full ">
                                           <div className="flex flex-col w-[50%] p-1 items-start ">
                                               <div className="bg-[#DBEAFE] flex items-center text-[#283f81] text-[20px] justify-center rounded-full px-5 ">Text</div>
                                               <div className="text-black mt-3">
                                               <Rating rating={data.starRating} ></Rating>
                                               </div>
                                               <div className="text-[15px] mt-3 text-black font-semibold">{data.custMessage}</div>
                                               <img className="w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3   h-[150px] rounded-lg" src={data.reviewImage}></img>
                                           </div>
                                           <div className="flex flex-col w-[50%] pl-16 pt-16  items-start ">
                                               <label className="text-[#858282] text-[20px] font-semibold">Name</label>
                                               <div className="mt-2 flex flex-row gap-x-3 items-center">
                                                  <img className="w-[50px] h-[50px] rounded-full" src={data.custPorfilePicture}></img>
                                                  <div className="text-[16px] text-[#9c9b9b] ">{data.custName}</div>
                                               </div>
                                               <label className="mt-2 text-[#858282] text-[20px] font-semibold">Email</label>
                                               <div className="  flex flex-row gap-x-3 items-center">
                                                  <div className="text-[16px] text-[#9c9b9b] ">{data.custEmail}</div>
                                               </div>
                                               <label className="mt-2 text-[#858282] text-[20px] font-semibold">Submitted At</label>
                                               <div className="  flex flex-row gap-x-3 items-center">
                                               <div className="text-[16px] text-[#9c9b9b] ">{data.createdAt.split("T")[0]}</div>
                                               <div className="text-[16px] text-[#9c9b9b] ">{data.createdAt.split("T")[1].split('.')[0]}</div>
                                               </div>
                                           </div>
                      </div>
                      <div className="w-full flex justify-end items-center  p-2">
                                           <div className="w-[40%] mr-6 py-2 text-[#706f6f] font-semibold flex items-center justify-between">
                                               <div onClick={()=>{generateifram(data.textReview_id)}} className="flex cursor-pointer items-center gap-x-1 px-2 rounded-lg hover:bg-[#c5bebe]">
                                                   <IoMdCodeWorking></IoMdCodeWorking> code
                                               </div>
                                               <div onClick={()=>{downloadimageHandler(data.reviewImage)}}  className="flex cursor-pointer items-center px-2 gap-x-1 rounded-lg hover:bg-[#c5bebe]">
                                                   <MdDownload></MdDownload>
                                                   download
                                               </div>
                                               <div  className="flex cursor-pointer items-center px-2 gap-x-1 rounded-lg hover:bg-[#c5bebe]">
                                                   <MdDeleteOutline></MdDeleteOutline>
                                                   delete
                                               </div>
                                               <div  className="flex cursor-pointer items-center px-2 gap-x-1 rounded-lg hover:bg-[#c5bebe]">
                                                   <CiSquareMore></CiSquareMore>
                                                   more
                                               </div>
                                           </div>
                      </div>
                      {
                        code && data.textReview_id===reviewid && <div className="p-6 relative rounded-lg mx-auto bg-[#1F2937] text-white sm:w-[70%] w-full mb-10">
                         <div onClick={()=>{crossHandler()}} className="w-[25px] absolute h-[25px] right-2 top-2 flex items-center justify-center text-black bg-white rounded-md cursor-pointer"><MdDeleteOutline></MdDeleteOutline></div>
                        <h2 className="text-[20px] font-semibold">Try our sample embed code</h2>
                        <p className="text-[16px] mt-2">Embed the wall of love to your website in 1 minute</p>
                        <pre className="bg-[#111827] p-4 mt-4 rounded-lg text-sm overflow-x-auto">
                          <code className="text-[#22C55E]">{iframehtml}</code>
                        </pre>
                        <div className="flex gap-4 mt-4">
                          <button
                            className="flex items-center gap-2 bg-[#DBEAFE] text-[#2563EB] font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                            onClick={copyHandler}
                            disabled={iscopied}
                          >
                            <IoCopyOutline />
                            {iscopied ? "Copied!" : "Copy Code"}
                          </button>
                          <a
                            href="https://jsfiddle.net/damonchen/0xdrsy3h/1/"
                            className="flex items-center gap-2 bg-[#FEF3C7] text-[#BD661F] font-medium py-2 px-4 rounded-lg hover:bg-[#FCD34D] hover:scale-105 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live demo
                          </a>
                        </div>
                        </div>
                      }
                    </div>
                )
            })
        }
    </>
  )
}
export default Text
