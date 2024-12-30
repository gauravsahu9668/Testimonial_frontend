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
    // const searchHandler=(e:any)=>{
    //   setseachQ(e.target.value)
    // }
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(!isOpen);
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
      //   loader ? 
      // <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#cacaca]">
      // <div className="h-12 w-12 border-4  border-t-[#5D5DFF] border-gray-600 rounded-full animate-spin"></div>
      //  </div>
      //   :
  <div className="w-full max-h-[cal(100vh-75px)] flex flex-col bg-white text-white">
    <div className="flex items-center justify-between bg-[#FAF5FF] px-6 py-4 ">
    <div className="flex items-center gap-x-6 text-black ">
      <img
        src={space.spaceLogo}
        alt="Space Logo"
        className="w-[150px] h-[100px] object-cover rounded-lg"
      />
      <h1 className="text-2xl text-black font-semibold">{space.spaceName}</h1>
    </div>
    <div className="flex items-center gap-x-8">
      <div className="text-center">
        <p className="text-sm text-[#1b1b1b] font-medium">Video Credits</p>
        <span className="text-[#393939] text-lg font-semibold">2</span>
      </div>
      <div className="text-center">
        <p className="text-sm text-[#1b1b1b] font-medium">Text Credits</p>
        <span className="text-[#393939] text-lg font-semibolf">10</span>
      </div>
      {/* <button className="px-4 py-2 border border-teal-400 rounded-lg hover:bg-teal-600 hover:text-white">
        Edit Space
      </button> */}
      <EditSpace spaceId={id} thankyou={thankyou} space={space} Extras={Extras} notification={Notify}></EditSpace>
    </div>
    </div>
    <div className="flex relative">
        <div className="w-[20%] text-[black] h-[cal(100vh-223px)]  bg-[#FAF5FF] p-6 absolute left-0 top-0 ">
      <h2 className="mb-6 text-lg font-semibold text-[black]">Inbox</h2>
      {inboxData.map((data, index) => (
        <div
          key={index}
          className={`flex items-center gap-x-4 p-3 mb-3 rounded-lg cursor-pointer ${
            inbox === data.text ? "bg-gray-300 text-[#363535] font-medium" : " text-[black] hover:bg-gray-200"
          }`}
          onClick={() => setInbox(data.text)}
        >
          {data.text === "Liked" && <SlLike className="text-lg  text-[#363535]" />}
          {data.text === "All" && <IoMdWallet className="text-lg  text-[#363535]" />}
          {data.text === "Video" && <IoVideocam className="text-lg  text-[#363535]" />}
          {data.text === "Text" && <BsChatText className="text-lg text-[#363535]" />}
          <span>{data.text}</span>
           <div className="flex items-center justify-end w-full text-end pr-3">
           {data.text==="All" && `${totalreview}`}
            {data.text==="Text" && `${textReview.length}`}
            {data.text==="Video" && `${videoReview.length}`}
          { data.text==="Liked" && `${liked}`}
           </div>
        </div>
      ))}

      {/* Additional Sidebar Options */}
      <div className="mt-10">
        <div className="p-3 mb-3 rounded-lg text-black   ml-1 font-medium cursor-pointer">Integrations</div>
          <div className="w-full rounded p-4">
              <div
        onClick={toggleMenu}
        className="flex items-center justify-between cursor-pointer"
      >
        <span className="font-semibold text-gray-700">Embed widgets</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
              </div>
              {isOpen && (
          <div className="mt-4 space-y-3 text-gray-600">
          <div className="flex items-center cursor-pointer gap-2">
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
            <Link to="/walloflove">
                 <span>Wall of Love</span>
            </Link>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
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
                d="M3 10h7V7h4v3h7M4 21v-2h16v2M7 7l-4 7m14-7l4 7"
              />
            </svg>
            <Link to={`/analytics/${id}`}>
            <span>Analytics</span>
            </Link>
          </div>
          </div>
      )}
          </div>
         </div>
        </div>
        <div className="ml-[20%] w-[80%]   p-6 ">
        <div className="mb-6 w-[75%] flex items-center gap-y-3 mx-auto"> 
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search testimonial by name,rating and time"
          className=" px-4 w-[75%] py-3 rounded-sm border shadow-sm border-gray-200  text-black focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <input
          type="text"
          placeholder="See with time"
          className=" px-4 w-[25%] py-3 ml-4 rounded-sm border shadow-sm border-gray-200  text-black focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        </div>
        {
          loader ? 
          <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#F9FAFB]">
        <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
      </div>
           :
           <div className="flex flex-col gap-y-6">
        {inbox === "All" && <All textReview={textfilter} videoReview={videofilter} />}
        {inbox === "Text" && <Text  textReview={textfilter} />}
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
