type textReview={
    custMessage:string
    reviewImage:string
    starRating:number,
    custName:string,
    custEmail:string,
    custPorfilePicture:string,createdAt:string,textReview_id:number,Liked:boolean
}
type videReview ={
    custName:string,
    custEmail:string,
    videoUrl:string,
    starRating:number,createdAt:string,videoReview_id:number,Liked:boolean
}
interface VideoReviewProps {
    textReview:textReview[]
    videoReview: videReview[]
}
import { MdDeleteOutline } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import { FcLikePlaceholder } from "react-icons/fc";
import Rating from "./Rating"
import axios from "axios"
import { BACKEND_URL } from "../server/axiosConnect"
import { useSelector } from "react-redux"
import { FcLike } from "react-icons/fc"
const All: React.FC<VideoReviewProps> = ({ textReview,videoReview}) => {
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
                if(response.data.success){
                    window.location.reload();
                }
            })
        }catch(e){

        }
    }
  return (
    <>
       {
            textReview.map((data,index)=>{
                return (
                    <div key={index} className="flex rounded-lg  shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300 bg-[#111113] flex-col m-4 p-2 w-full ">
                        <div className="w-full  flex items-center justify-between">
                             <div className="bg-[#DBEAFE] flex items-center text-[#283f81] text-[15px] justify-center rounded-full px-5 ">Text</div>
                             <div onClick={()=>{likeHandler(data.textReview_id,!data.Liked,"text")}} className=" w-[40px] h-[40px] group ">
                                                    {
                                                       data.Liked===true? <FcLike size={"2rem"} className="cursor-pointer" ></FcLike> : <FcLikePlaceholder size={"2rem"} className="cursor-pointer"></FcLikePlaceholder>
                                                    }
                             </div>
                        </div>
                        <div className="w-full flex">
                                  <div className="flex flex-col w-[50%] p-1 items-start ">
                                    <div className="text-[black] mt-3">
                                    <Rating rating={data.starRating} ></Rating>
                                    </div>
                                    <div className="text-[15px] mt-3 text-[#bab7b7] font-semibold">{data.custMessage.substring(0,150)}</div>
                                    <img className="w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3   h-[150px] rounded-lg" src={data.reviewImage}></img>
                                  </div>
                                  <div className="flex flex-col w-[50%] pl-4 items-start ">
                                                <label className="text-[#bab7b7] text-[20px] font-semibold">Name</label>
                                                <div className="mt-2 flex flex-row gap-x-3 items-center">
                                                   <img className="w-[50px] h-[50px] rounded-full" src={data.custPorfilePicture}></img>
                                                   <div className="text-[16px] text-[#9c9b9b] ">{data.custName}</div>
                                                </div>
                                                <label className="mt-2 text-[#bab7b7] text-[20px] font-semibold">Email</label>
                                                <div className="  flex flex-row gap-x-3 items-center">
                                                   <div className="text-[16px] text-[#9c9b9b] ">{data.custEmail}</div>
                                                </div>
                                                <label className="mt-2 text-[#bab7b7] text-[20px] font-semibold">Submitted At</label>
                                                <div className="  flex flex-row gap-x-3 items-center">
                                                <div className="text-[16px] text-[#9c9b9b] ">{data.createdAt.split("T")[0]}</div>
                                                <div className="text-[16px] text-[#9c9b9b] ">{data.createdAt.split("T")[1].split('.')[0]}</div>
                                                </div>
                                                <div className="flex flex-row items-center justify-between text-black mt-5">
                                                      <div  className=" px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10  gap-x-1  hover:bg-[#c5bebe]">
                                                      <MdDeleteOutline></MdDeleteOutline>
                                                      delete
                                                      </div>
                                                       <div  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10  gap-x-1  hover:bg-[#c5bebe]">
                                                       <CiSquareMore></CiSquareMore>
                                                           more
                                                       </div>
                                                </div>
                                  </div>
                        </div>
                    </div>
                )
            })
        }
        {
           videoReview.map((data,index)=>{
                return (
                    <div key={index} className="flex rounded-lg  shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300 bg-[#111113] flex-col m-4 p-2 w-full ">
                        <div className="w-full  flex items-center justify-between">
                             <div className="bg-[#DBEAFE] flex items-center text-[#283f81] text-[20px] justify-center rounded-full px-5 ">Video</div>
                             <div onClick={()=>{likeHandler(data.videoReview_id,!data.Liked,"video")}} className="w-[40px] h-[40px] group ">
                                                   {
                                                       data.Liked===true? <FcLike size={"2rem"} className="cursor-pointer" ></FcLike> : <FcLikePlaceholder size={"2rem"} className="cursor-pointer"></FcLikePlaceholder>
                                                    }
                             </div>
                        </div>
                        <div className="flex  w-full">
                               <div className='flex flex-col'>
                               <div className="mt-3"><Rating  rating={data.starRating} ></Rating></div>
                                <div className="relative w-full mt-10 h-[200px] rounded-lg shadow-lg overflow-hidden">
                                <video
                                controls
                                loop
                                className="w-full h-full object-cover rounded-lg"
                                src={data.videoUrl}
                                ></video>
                               </div>
                               </div>
                                <div className="flex flex-col w-[50%] pl-8 pt-6  items-start ">
                             <label className="text-[#858282] text-[20px] font-semibold">Name</label>
                             <div className="mt-2 flex flex-row gap-x-3 items-center">
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
                                            <div className="flex flex-row items-center justify-between text-black mt-5">
                                                      <div  className=" px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10  gap-x-1  hover:bg-[#c5bebe]">
                                                      <MdDeleteOutline></MdDeleteOutline>
                                                      delete
                                                      </div>
                                                       <div  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10  gap-x-1  hover:bg-[#c5bebe]">
                                                       <CiSquareMore></CiSquareMore>
                                                           more
                                                       </div>
                                            </div>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  );
}
export default All
