import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { BACKEND_URL } from "../../server/axiosConnect"
import { useSelector } from "react-redux"
import { useState } from "react"
import ListLayout from "../Layouts/ListLayout"
import CarouselLayout from "../Layouts/CarouselLayout"
import MasonaryLayout from "../Layouts/MasonaryLayout"
type textReview={
  custMessage:string
  reviewImage:string
  starRating:number
  custName:string
  custEmail:string
  custPorfilePicture:string,createdAt:string,textReview_id:number,Liked:boolean
}
type videReview ={
  custName:string,
  custEmail:string,
  videoUrl:string,
  starRating:number,createdAt:string,videoReview_id:number,Liked:boolean
}
const RightBox = () => {
    const location=useLocation()
    const url=location.pathname
    const total=url.split('/')
    const id=Number(total[2])
    const {token}=useSelector((state:any)=>state.auth)
    const [textReview,settextReview]=useState<textReview[]>([]);
    const [videoReview,setvideoReview]=useState<videReview[]>([]);
    const getspaceDetails = async () => {
        try{
          const spaceDetails= await axios({
            url: `${BACKEND_URL}/space/getspaceDetails`,
            method: "POST",
            data: {
              spaceId: id,
            },
            headers:{
                Authorization:`Bearer ${token}`
            }
          });
          console.log(spaceDetails)
          settextReview(spaceDetails.data.datatext)
          setvideoReview(spaceDetails.data.dataVideo)
        }catch(e){
          console.log(e)
        }
    };
    const layout = useSelector((state: any) => state.layout.layout)
    const colorScheme = useSelector((state: any) => state.layout.colorScheme)
    console.log(layout)
  useEffect(()=>{
      console.log(id)
      getspaceDetails();
  },[])
  return (
    <div className="flex  items-center justify-center  w-full h-full overflow-hidden">
    <div  className={`${colorScheme==="Light" ? "bg-white":"bg-black"} w-full h-full overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10  shadow flex flex-col items-center justify-start`}>
    {
      layout === "list" && <ListLayout textReview={textReview} videoReview={videoReview} />
    }
    {
      layout === "grid" && <ListLayout textReview={textReview} videoReview={videoReview} />
    }
    {
      layout === "slider" && <ListLayout textReview={textReview} videoReview={videoReview} />
    }
    {
      layout === "carousel" && <CarouselLayout />
    }
    {
      layout === "masonry" && <MasonaryLayout />
    }
    </div>
    </div>
  )
}

export default RightBox
