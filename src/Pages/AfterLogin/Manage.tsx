import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"
import { BACKEND_URL } from "../../server/axiosConnect"
import { inboxData } from "../../data/inboxData"
import { SlLike } from "react-icons/sl"
import { IoMdWallet } from "react-icons/io"
import { IoVideocam } from "react-icons/io5"
import { BsChatText } from "react-icons/bs"
import All from "../../Components/All"
import Text from "../../Components/Text"
import Liked from "../../Components/Liked"
import Video from "../../Components/Video"
import EditSpace from "./EditSpace"
import { Link } from "react-router-dom"
interface thankyouState {
  thankyougif: string | null;
  thankyouTitle: string;
  thankyouMessage: string;
}
const initalthankyouState= {
  thankyougif: "",
  thankyouTitle: "",
  thankyouMessage: ""
}
interface AuthState {
  maxVideoDuration: string | null; 
  maxCharacters: number;
  videoButtonText:string;
  textButtonText:string;
  consentDisplay:string;
  textSubmissionTitle:string;
  QuestionLabel:string;
  notifySubject:string;
  notifyMessage:string
}
const  extrainitialState ={
  maxVideoDuration: "" ,
  maxCharacters: 0,
  videoButtonText:"",
  textButtonText:"",
  consentDisplay:"",
  textSubmissionTitle:"",
  QuestionLabel:"",
  notifySubject:"",
  notifyMessage:""
}
type spaceData ={
  spaceName: string | null;
  headerTitle: string;
  customMessage: string;
  spaceLogo:string;
  questions: string[];
}
const initialState={
  spaceName:"",
  spaceLogo:"",
  headerTitle:"",
  customMessage:"",
  questions:[]
}
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
interface Notification {
  notifySubject:string  
  notifyMessage:string
}
const  initialNotification ={
  notifySubject:"",
  notifyMessage:"",
}
const Manage = () => {
    const location=useLocation()
    const url=location.pathname
    const total=url.split('/')
    const id=Number(total[2])
    const {token}=useSelector((state:any)=>state.auth)
    const [loader,setloader]=useState(false)
    const [space,setSpace]=useState<spaceData>(initialState);
    const [textReview,settextReview]=useState<textReview[]>([]);
    const [videoReview,setvideoReview]=useState<videReview[]>([]);
    const [inbox,setInbox]=useState("All")
    const [totalreview,settotalreview]=useState<Number>(0);
    const [Extras,setExtras]=useState<AuthState>(extrainitialState)
    const [Notify,setNotify]=useState<Notification>(initialNotification)
    const [thankyou,setThankyou]=useState<thankyouState>(initalthankyouState)
    const [liked,setLiked]=useState(0);
    const [search,setseachQ]=useState("");
    const getspaceDetails = async () => {
        setloader(true);
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
          setloader(false)
          setSpace({spaceName:spaceDetails.data.data.spaceName,spaceLogo:spaceDetails.data.data.spaceLogo,
            headerTitle:spaceDetails.data.data.headerTitle,customMessage:spaceDetails.data.data.customMessage,
            questions:spaceDetails.data.data.questions
          })
          setExtras(spaceDetails.data.data.Extras);
          setNotify(spaceDetails.data.data.Notifications)
          setThankyou(spaceDetails.data.data.Thankyou)
          settextReview(spaceDetails.data.datatext)
          setvideoReview(spaceDetails.data.dataVideo)
          setvideoFilteredData(spaceDetails.data.dataVideo)
          settextFilteredData(spaceDetails.data.datatext)
          setLiked(spaceDetails.data.likedCount)
          const total=spaceDetails.data.datatext.length + spaceDetails.data.dataVideo.length
          settotalreview(total)
        }catch(e){
          console.log(e)
        }
    };
    const[showTabs,setshowtabs]=useState(false);
    const[textfilter,settextFilteredData]=useState<textReview[]>([]);
    const[videofilter,setvideoFilteredData]=useState<videReview[]>([]);
    const searchHandler = (e:any) => {
      const search = e.target.value.trim().toLowerCase(); // Use the input's value directly
      setseachQ(e.target.value); 
      if (search === "") {
          setvideoFilteredData(videoReview);
      } else {
          setvideoFilteredData(
              videoReview.filter(data =>
                  data.custName.toLowerCase().startsWith(search.trim().toLowerCase())
              )
          );
      }
      if (search === "") {
        settextFilteredData(textReview);
    } else {
        settextFilteredData(
            textReview.filter(data =>
                data.custName.toLowerCase().startsWith(search.trim().toLowerCase())
            )
        );
    }
  };
    useEffect(()=>{
        console.log(id)
        getspaceDetails();
    },[])
  return (
    <>{
     <div className="w-[100vw]  mt-16 bg-[#18181b] flex flex-col  text-white">
      <div className="  flex items-center justify-between bg-[#111113] px-6 py-4 ">
            <div className="flex items-center gap-x-6 text-[#e0dfdf]">
             <img
             src={space.spaceLogo}
        alt="Space Logo"
        className="w-[150px] h-[100px] object-cover rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300"
             />
             <div className="flex flex-col gap-y-8">
       <h1 className="text-2xl text-[#e0dfdf] font-semibold">{space.spaceName}</h1>
       <EditSpace spaceId={id} thankyou={thankyou} space={space} Extras={Extras} notification={Notify}></EditSpace>
             </div>
            </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full ">
           <div className="w-[18%] hidden lg:flex flex-col text-[black] bg-[#111113] p-6 min-h-[70vh]">
           <h2 className="mb-6 text-lg font-semibold text-[#aeaeae]">Inbox</h2>
           {inboxData.map((data, index) => (
           <div
          key={index}
          className={`flex items-center gap-x-4 p-3 mb-3 rounded-lg cursor-pointer ${
            inbox === data.text ? " text-[#aeaeae] rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300" : "px-3 py-2 rounded-xl  hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]  text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointerhover:shadow-lg hover:shadow-emerald-500/10"
          }`}
          onClick={() => setInbox(data.text)}
        >
          {data.text === "Liked" && <SlLike size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "All" && <IoMdWallet size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "Video" && <IoVideocam size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "Text" && <BsChatText size={'2rem'} className="text-lg text-[#aeaeae]" />}
          <span>{data.text}</span>
           <div className="flex items-center justify-end w-full text-end pr-3">
           {data.text==="All" && `${totalreview}`}
            {data.text==="Text" && `${textReview.length}`}
            {data.text==="Video" && `${videoReview.length}`}
          { data.text==="Liked" && `${liked}`}
           </div>
           </div>
           ))}
          <div className="flex pl-2 mt-4 items-center text-[#bfbebe] cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              />
            </svg>
            <Link to={`/walloflove/${id}`}>
                 <span>Wall of Love</span>
            </Link>
          </div>
          </div>
          <div className="w-full p-3 flex flex-col lg:hidden">
             <div className="flex  rounded-md p-3 w-full items-center justify-between ">
              <span className="text-[#dedddd]">Inbox</span>
               <button onClick={()=>setshowtabs(!showTabs)} className="text-[#dedddd]">{showTabs? "close":"open"}</button>
             </div>
             <div>
                 { showTabs && (
                  <>
                  {inboxData.map((data, index) => (
                       <div
          key={index}
          className={`flex items-center gap-x-4 p-3 mb-3 rounded-lg cursor-pointer ${
            inbox === data.text ? " text-[#aeaeae] rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300" : "px-3 py-2 rounded-xl  hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]  text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointerhover:shadow-lg hover:shadow-emerald-500/10"
          }`}
          onClick={() => {setInbox(data.text) ;setshowtabs(false)}}
        >
          {data.text === "Liked" && <SlLike size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "All" && <IoMdWallet size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "Video" && <IoVideocam size={'2rem'} className="text-lg  text-[#aeaeae]" />}
          {data.text === "Text" && <BsChatText size={'2rem'} className="text-lg text-[#aeaeae]" />}
          <span>{data.text}</span>
           <div className="flex items-center justify-end w-full text-end pr-3">
           {data.text==="All" && `${totalreview}`}
            {data.text==="Text" && `${textReview.length}`}
            {data.text==="Video" && `${videoReview.length}`}
          { data.text==="Liked" && `${liked}`}
           </div>
                       </div>
                   ))}
                    <div className="flex pl-2 mt-4 items-center text-[#bfbebe] cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              />
            </svg>
            <Link to={`/walloflove/${id}`}>
                 <span>Wall of Love</span>
            </Link>
          </div>
                  </>
                 )
                 }
             </div>
          </div>
        <div className="w-full lg:w-[82%] flex flex-col px-2">
        <div className="mt-3 w-full  flex items-center gap-y-3 mx-auto"> 
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search testimonial by name,rating and time"
          className=" px-4 w-[75%] ml-2 py-3   shadow-sm   focus:outline-none   p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#73d2d7] text-[#a9a7a7]"
        />
        <input
          type="text"
          placeholder="See with time"
          className=" px-4 w-[25%] py-3 ml-4 mr-2   shadow-sm    focus:outline-none focus:ring-1  p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none  focus:ring-[#73d2d7] text-[#a9a7a7]"
        />
        </div>
        {
          loader ? 
          <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#18181b]">
          <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
          </div>
           :
           <div className=" w-full grid grid-col-1 md:grid-cols-2 gap-4 p-4  place-items-center">
        {inbox === "All" && <All textReview={textfilter} videoReview={videofilter} />}
        {inbox === "Text" && <Text  textReview={textfilter}/>}
        {inbox === "Video" && <Video videoReview={videofilter} />}
        {inbox === "Liked" && <Liked search={search} />}
           </div>
        }
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Manage
