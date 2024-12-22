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
import { CiShare2 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import Rating from "./Rating"
import { FcLikePlaceholder } from "react-icons/fc"
import axios from "axios"
import { BACKEND_URL } from "../server/axiosConnect"
import { useSelector } from "react-redux"
import { FcLike } from "react-icons/fc";
const Text:React.FC<VideoReviewProps>  = ({textReview}) => {
    const { token} = useSelector((state: any) => state.auth);
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
                                               <div className="flex cursor-pointer items-center gap-x-1 px-2 rounded-lg hover:bg-[#c5bebe]">
                                                   <CiShare2></CiShare2>
                                                   share
                                               </div>
                                               <div  className="flex cursor-pointer items-center px-2 gap-x-1 rounded-lg hover:bg-[#c5bebe]">
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
                      </div>
                )
            })
        }
    </>
  )
}

export default Text