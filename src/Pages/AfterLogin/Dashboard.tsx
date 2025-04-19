import { IoIosAdd } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoCheckboxOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaBullseye } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { BACKEND_URL } from "../../server/axiosConnect";
import toast from "react-hot-toast";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
const [spaces, setSpace] = useState([]);
const [totalSpaces, setTotalSpaces] = useState(0);
const { token,credits} = useSelector((state: any) => state.auth);
const [opener,setopener]=useState(-1)
const [loader,setLoader]=useState(false)
const deleteHandler=async(space_id:number)=>{
    try{
       const response=await axios({
        url:`${BACKEND_URL}/space/deleteSpace`,
        method:"DELETE",
        data:{
          spaceId:space_id
        },
        headers:{
          Authorization:`Bearer ${token}`
        }
       })
       console.log(response)
       getallSpaces()
    }catch(e){
      console.log("error in fetching the data")
    }
}
const navigate=useNavigate();
const copyHandler=(space_id:number)=>{
     const url=`${space_id}`
     navigator.clipboard.writeText(url)
     toast.success("space copied")
}
const createSpaceHandler=()=>{
     
      navigate("/create-space/new")
}
const copylink=()=>{
  const url="https://chic-puffpuff-b72889.netlify.app"
  navigator.clipboard.writeText(url)
  toast.success("space link copied")
}
const getallSpaces = async () => {
     setLoader(true)
     const userId=localStorage.getItem("userId");
     console.log(userId);
    try{
      await axios({
        url:`${BACKEND_URL}/user/get-all-spaces`,
        method:"POST",
        data:{
           user_id:userId
        },
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then((result)=>{
        setSpace(result.data.data)
        setLoader(false)
        setTotalSpaces(result.data.data.length)
        console.log(result.data.data)
      })
    }catch(e){
      console.log(e)
    }
};
const gettextvideodata=async()=>{
  const userId=Number(localStorage.getItem("userId"));
  try{
    await axios({
      url:`${BACKEND_URL}/analytics/allreviewdata`,
      method:"POST",
      data:{
        userId
      },
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(()=>{
    })
  }catch(error){
    console.log(error);
  }
}
const [showMenu, setShowMenu] = useState(false);
useEffect(() => {
    getallSpaces();
    gettextvideodata();
}, []); 
  return (
  <> {
    loader ?
      <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#18181b]">
        <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
      </div> :
      <div className="flex flex-col w-full min-h-[100vh] bg-[#18181b] text-[#374151]">
        {/* <div className="w-[90%] lg:w-[75%] mx-auto mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:pb-0">
          <div className="w-full lg:w-[50%] p-3 flex flex-col justify-start">
            <button className="w-max px-4 py-2 rounded-full bg-[#EFF6FF] text-[#2563EB] font-semibold flex items-center justify-center text-sm">
              New feature
            </button>
            <h1 className="mt-4 text-[22px] lg:text-[30px] font-semibold text-[#1F2937]">Portfolio Page Builder</h1>
            <p className="mt-4 lg:mt-8 text-[14px] lg:text-[18px] text-[#4B5563]">
              A customizable one-page profile showcasing your business, testimonials, and contact information. Can be hosted on your custom domain. Perfect for agencies and freelancers to demonstrate their track record of success and establish new relationships.
            </p>
            <div className="flex mt-4 lg:mt-5 gap-x-3">
              <button className="px-4 py-2 rounded-md bg-[#E5E7EB] text-[#1F2937] text-sm hover:bg-[#D1D5DB]">
                Learn more
              </button>
              <button className="px-4 py-2 rounded-md bg-[#F3F4F6] text-[#6B7280] text-sm hover:bg-[#E5E7EB]">
                Dismiss
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] mt-4 lg:mt-0 rounded-md">
            <img src={pagebuilder} className="rounded-md w-full object-cover" alt="Page Builder" />
          </div>
        </div> */}
        {/* <div className="mt-20 w-[80%] mx-auto py-5 ">
               <DashboardGraph1></DashboardGraph1>
        </div> */}
        <div className="w-full bg-[#111113] py-12">
           <div className="w-[90%] lg:w-[75%] mx-auto my-6">
          <h1 className="text-[28px] lg:text-[35px] font-bold text-[#d1d3d4] mb-6">Overview</h1>
          <div className="flex flex-wrap gap-4 justify-between mb-10">
            <div className="flex-1 min-w-[200px] p-6 rounded-xl  bg-[#111113] shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#f6f7f9]">Total credits</p>
                <CiVideoOn className="text-[#f6f7f9]" />
              </div>
              <div className="text-[20px] lg:text-[24px] text-[#f6f7f9] font-semibold mt-4">{credits}</div>
            </div>
            <div className="flex-1 min-w-[200px] p-6 rounded-xl  bg-[#111113]  shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#f6f7f9]">Total Spaces</p>
                <BsStars className="text-[#f6f7f9]" />
              </div>
              <div className="text-[20px] lg:text-[24px] text-[#f6f7f9] font-semibold mt-4">{totalSpaces}</div>
            </div>
            <div className="flex-1 min-w-[200px] p-6 rounded-xl  bg-[#111113]  shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#f6f7f9]">Current Plan</p>
                <IoCheckboxOutline className="text-[#f6f7f9]" />
              </div>
              <div className="flex justify-between mt-2 items-center">
                <p className="text-[20px] lg:text-[24px] text-[#4eeddb] font-semibold">Starter</p>
                <button className="px-3 py-2 text-sm rounded-md bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE]">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
           </div>
        </div>
        {spaces.length !== 0 ? (
          <div className="w-[90%] lg:w-[75%] mx-auto pb-32">
            <div className="w-full flex justify-between items-center mt-10">
              <h1 className="text-[24px] lg:text-[32px] font-bold text-[#c9c4c4]">Spaces</h1>
                <button onClick={()=>{createSpaceHandler()}} className="bg-gradient-to-r flex items-center gap-x-2 from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <IoIosAdd />
                  Create a new space
                </button>
            </div>
            <div className="flex w-full flex-col ">
              {spaces.map((data: any, index) => (
                   <div
                      key={index}
  className="relative w-full flex flex-col md:flex-row justify-between rounded-2xl bg-[#111113] shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300 mt-8"
                      >
                      <div className="w-full md:w-[25%] flex flex-col md:flex-row h-auto p-2 rounded-lg">
    <img
      src={data.spaceLogo}
      alt={`${data.spaceName} Logo`}
      className="w-full h-[80%] md:h-full rounded-lg object-cover"
    />
                      </div>
                      <div className="w-full flex flex-row md:flex-col  p-1">
    <div className="w-full flex items-center justify-between pl-4 md:pr-8 text-left text-[20px] md:text-[30px] font-semibold text-[#d8d7d7]">
      <span>{data.spaceName}</span>
      <button onClick={()=>{setShowMenu(!showMenu); setopener(data.id)}} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/50 hover:outline-none hover:ring-2 hover:ring-inset hover:ring-emerald-500">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
    </div>
    <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
      <Link
        to={`/manage-testimonial/${data.space_id}`}
        className="px-3 py-2 justify-start gap-y-3 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
      >
        <FaBullseye className="text-blue-600" />
        <span>Manage Testimonials</span>
      </Link>
      <div
        onClick={() => copyHandler(data.space_id)}
        className="px-3 py-2 justify-start gap-y-3 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
      >
        <IoIosLink className="text-emerald-500" />
        <span>Get Space ID</span>
      </div>
      <div
        onClick={() => copylink()}
        className="px-3 py-2 justify-start gap-y-3 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
      >
        <IoIosLink className="text-emerald-500" />
        <span>Get Shareable Link</span>
      </div>
      <div
        onClick={() => deleteHandler(data.space_id)}
        className="px-3 py-2 justify-start gap-y-3 rounded-md text-sm font-medium text-red-600 hover:text-white hover:bg-black/40 flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
      >
        <RiDeleteBinLine className="" />
        <span>Delete Space</span>
      </div>
      </div>
                      </div>
                      {
                        showMenu && opener===data.id && (
                          <div className="absolute flex flex-col gap-y-2 bottom-8 right-10 bg-[#1f1f1f] p-4 rounded-xl shadow-lg shadow-emerald-500/10 text-sm text-gray-300">
  <span className="hover:text-white transition-colors duration-200 cursor-pointer">
    <Link to={`/manage-testimonial/${data.space_id}`}>Manage testimonial</Link>
  </span>
  <span
    onClick={() => copyHandler(data.space_id)}
    className="hover:text-white transition-colors duration-200 cursor-pointer"
  >
    Get spaceId
  </span>
  <span
    onClick={() => copylink()}
    className="hover:text-white transition-colors duration-200 cursor-pointer"
  >
    Get link
  </span>
  <span
    onClick={() => deleteHandler(data.space_id)}
    className="text-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
  >
    Delete space
  </span>
                          </div>
                        )
                      }
                   </div>
               ))}
            </div>
          </div>
        ) : (
          <div className="w-[90%] lg:w-[75%] mx-auto flex-col  py-28 ">
            <FaFolderPlus className="text-4xl mx-auto text-[#d4d6da] text-center" />
            <h1 className="mt-4 text-center text-[18px] lg:text-[22px] text-[#abb8cb]">No Spaces yet</h1>
            <p className="mt-3 text-center text-[12px] lg:text-[14px] text-[#c1c2c4]">Create your first space to start collecting testimonials.</p>
              <button onClick={()=>{createSpaceHandler()}} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <IoIosAdd />
                Create a new space
              </button>
          </div>
        )}
      </div>
  }</>
  )
}
export default Dashboard
