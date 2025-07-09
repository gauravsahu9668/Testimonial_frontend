import axios from "axios"
import { BACKEND_URL } from "../../server/axiosConnect"
import { useSelector } from "react-redux"
import { useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
interface widge {
   widgetId:number,
   spaceId:number
}
const LeftSettings = () => {
 const location=useLocation()
  const url=location.pathname
  const total=url.split('/')
  const spaceId=Number(total[2])
  const {token}=useSelector((state:any)=>state.auth)
  const userId=Number(localStorage.getItem("userId"));
  const [widgets,setwidgets]=useState<widge[]>([]);
  const [loader,setloader]=useState(false)
  const [wallid,setwallid]=useState(0);
  const showWidget=async()=>{
    setloader(true)
    try{
      const result = await axios({
            url: `${BACKEND_URL}/space/getWidgets`,
            method: "POST",
            data: {
              spaceId: spaceId,
              userId: userId
            },
            headers:{
                Authorization:`Bearer ${token}`
            }
          });
          setloader(false)
         setwidgets(result.data.data);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    showWidget()
  },[])
  return (
    <div>
      {
        loader===false ? (
          widgets.length>0 ?(
            <div className="flex flex-col ">
  {widgets.map((wall) => (
    <div
      key={wall.widgetId}
      className="bg-[#343434] border-b-[1px] border-black  shadow hover:shadow-lg transition-shadow duration-300 p-4"
    >
      <div
        onClick={() => setwallid(wall.widgetId)}
        className="text-lg  font-semibold text-[#b3b0b0] cursor-pointer hover:text-[#E3E1E1] transition-colors"
      >
        Wall #{wall.widgetId}
      </div>

      {wallid === wall.widgetId && (
        <div className="mt-3 flex flex-col">
          <button
            onClick={() => window.open(`https://chic-puffpuff-b72889.netlify.app/wallPreview/${wall.widgetId}`, '_blank')}
            className="px-3 py-3 bg-[#202020] text-white  hover:bg-[#0E0E10] transition-colors text-sm"
          >
            Preview
          </button>
          <button
          onClick={async () => {
    try {
      await navigator.clipboard.writeText(`
        <iframe
  src="https://chic-puffpuff-b72889.netlify.app/wallPreview/${wall.widgetId}"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px; overflow: hidden;"
  title="Wall of Love"
  allowfullscreen
></iframe>
        `);
      toast.success("Copied!");
    } catch (e) {
      toast.error("Failed to copy!");
    }
  }}
            className="px-3 py-3 bg-[#202020] text-white border-t-[1px] border-black hover:bg-[#0E0E10] transition-colors text-sm"
          >
            Add to Website
          </button>
        </div>
      )}
    </div>
  ))}
</div>

          ):(
           <button
      className="px-6 py-3 mx-auto ml-10 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
    >
      No Walls
    </button>
          )
        ):(
          <div className="w-full h-[500px] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-white text-lg font-medium">Loading...</div>
      </div>
    </div>
        )
      }
    </div>
  )
}

export default LeftSettings
