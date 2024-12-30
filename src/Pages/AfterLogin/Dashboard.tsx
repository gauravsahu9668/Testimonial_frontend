import pagebuilder from "../../assets/pagebuilder.webp"
import { IoIosAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoCheckboxOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBullseye } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { BACKEND_URL } from "../../server/axiosConnect";
import toast from "react-hot-toast";
import { Bar,Line} from "react-chartjs-2";
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
const { token,payment,credits} = useSelector((state: any) => state.auth);
const [manageOpener,setManageOpener]=useState({check:false,value:-1})
const [loader,setLoader]=useState(false)
const [lineData,setLineData]=useState<any>(null);
const [barData,setBardata]=useState<any>(null)
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
     if(credits>0){
      navigate("/create-space/new")
     }
     else{
       if(payment){
        navigate("/create-space/new");
       }
       else{
          toast.error("No more credits")
          navigate("/upgrade")
       }
     }
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
    }).then((res)=>{
      if(res){
       setLineData(res.data.data)
       const data=Object.values(res.data.data)
       setLineData({
        labels:["Text reviews","Video Reviews"],
        datasets: [
          {
            label: "Number of reviews",
            data,
            backgroundColor: [
              "#FF6384",
              "#FFCE56",
            ], // Colors for bars
            borderColor: "#000",
            borderWidth: 1,
          },
        ],
       });
       setBardata({
        labels:["Text","Videos"],
        datasets:[
          {
          label: "Number of Courses", // Label for the graph
          data, // Assign values dynamically
          fill: true, // Don't fill under the line
          borderColor: "#36A2EB", // Line color
          tension: 0.2, // Smoothness of the curve
          pointBackgroundColor: "#FF6384", // Point colors
          pointBorderColor: "#36A2EB",
          pointHoverBackgroundColor: "#FFCE56",
          pointHoverBorderColor: "#FF9F40",
          }
        ]
      })
      }
    })
  }catch(error){
    console.log(error);
  }
}
useEffect(() => {
    getallSpaces();
    gettextvideodata();
}, []); 
  return (
  <> {
    loader ?
      <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#F9FAFB]">
        <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
      </div> :
      <div className="flex flex-col w-full min-h-[100vh] bg-[#F9FAFB] text-[#374151]">
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:pb-0">
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
        </div>
        <div className="w-[80%] m-10 p-8 flex flex-row justify-between gap-x-6 mx-auto h-[420px] bg-[#1e1e2f] rounded-xl shadow-lg">
              <div className="w-[45%] h-full rounded-lg bg-gradient-to-r from-[#4a5568] to-[#2d3748] flex flex-col p-4">
    <h2 className="text-white text-lg font-semibold mb-4">Review Type Distribution</h2>
    {lineData?.labels?.length > 0 && (
      <Bar
        data={lineData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#CBD5E0",
                font: {
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `Reviews: ${tooltipItem.raw}`;
                },
              },
            },
          },
          scales: {
            x: {
              grid: { color: "#4A5568" },
              ticks: { color: "#E2E8F0" },
              title: {
                display: true,
                text: "Review Type",
                color: "#E2E8F0",
                font: {
                  size: 14,
                },
              },
            },
            y: {
              grid: { color: "#4A5568" },
              beginAtZero: true,
              ticks: { color: "#E2E8F0" },
              title: {
                display: true,
                text: "Number of Reviews",
                color: "#E2E8F0",
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
      />
    )}
              </div>
              <div className="w-[45%] h-full rounded-lg bg-gradient-to-r from-[#2d3748] to-[#1a202c] flex flex-col p-4">
    <h2 className="text-white text-lg font-semibold mb-4">Category Analysis</h2>
    {barData?.labels?.length > 0 && (
      <Line
        data={barData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#A0AEC0",
                font: {
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Courses: ${context.raw}`;
                },
              },
            },
          },
          scales: {
            x: {
              grid: { color: "#4A5568" },
              ticks: { color: "#E2E8F0" },
              title: {
                display: true,
                text: "Category",
                color: "#E2E8F0",
                font: {
                  size: 14,
                },
              },
            },
            y: {
              grid: { color: "#4A5568" },
              beginAtZero: true,
              ticks: { color: "#E2E8F0" },
              title: {
                display: true,
                text: "Number of Courses",
                color: "#E2E8F0",
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
      />
    )}
              </div>
        </div>
        <div className="w-[90%] lg:w-[75%] mx-auto my-6">
          <h1 className="text-[28px] lg:text-[35px] font-bold text-[#1F2937] my-4">Overview</h1>
          <div className="flex flex-wrap gap-4 justify-between mb-10">
            <div className="flex-1 min-w-[200px] p-6 rounded-md border border-[#E5E7EB] bg-[#FFFFFF] shadow-md">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#374151]">Total credits</p>
                <CiVideoOn className="text-[#9CA3AF]" />
              </div>
              <div className="text-[20px] lg:text-[24px] text-[#1F2937] font-semibold mt-4">{credits}</div>
            </div>
            <div className="flex-1 min-w-[200px] p-6 rounded-md border border-[#E5E7EB] bg-[#FFFFFF] shadow-md">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#374151]">Total Spaces</p>
                <BsStars className="text-[#9CA3AF]" />
              </div>
              <div className="text-[20px] lg:text-[24px] text-[#1F2937] font-semibold mt-4">{totalSpaces}</div>
            </div>
            <div className="flex-1 min-w-[200px] p-6 rounded-md border border-[#E5E7EB] bg-[#FFFFFF] shadow-md">
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-[#374151]">Current Plan</p>
                <IoCheckboxOutline className="text-[#9CA3AF]" />
              </div>
              <div className="flex justify-between mt-2 items-center">
                <p className="text-[20px] lg:text-[24px] text-[#1F2937] font-semibold">Starter</p>
                <button className="px-3 py-2 text-sm rounded-md bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE]">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
        {spaces.length !== 0 ? (
          <div className="w-[90%] lg:w-[75%] mx-auto pb-32">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[24px] lg:text-[32px] font-bold text-[#1F2937]">Spaces</h1>
                <button onClick={()=>{createSpaceHandler()}} className="flex items-center gap-x-2 rounded-md px-4 py-2 text-white text-[14px] lg:text-[18px] bg-[#2563EB] hover:bg-[#1E40AF]">
                  <IoIosAdd />
                  Create a new space
                </button>
            </div>
            <div className="w-full h-[40px] flex items-center border border-[#E5E7EB] mt-5 mb-5 rounded-md bg-[#FFFFFF] focus-within:border-[#2563EB]">
              <div className="w-[10%] lg:w-[5%] flex items-center justify-center">
                <IoMdSearch className="text-[#6B7280]" />
              </div>
              <input
                type="text"
                placeholder="Search testimonials by name, email, or keywords"
                className="w-full p-2 text-[14px] lg:text-[18px] bg-[#FFFFFF] text-[#374151] outline-none"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {spaces.map((data: any, index) => (
                <div key={index} className="relative rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] shadow-md p-4">
                  <div className="flex items-center mb-4">
                    <img src={data.spaceLogo} alt={`${data.spaceName} Logo`} className="w-[50px] h-[50px] rounded-full object-cover mr-4" />
                    <div className="flex-1">
                      <span className="block text-lg font-semibold text-[#1F2937]">{data.spaceName}</span>
                    </div>
                    <BsThreeDotsVertical 
                      onClick={() => setManageOpener({ check: !manageOpener.check, value: index })}
                      className="text-[#9CA3AF] cursor-pointer" 
                    />
                  </div>
                  <div className="text-sm flex justify-end text-[#6B7280]">
                    {/* <Link to={`/create-space/${data.space_id}`} className="flex items-center py-2 px-3 hover:bg-[#F3F4F6]">
                      <FaRegEdit className="mr-2 text-[#2563EB]" />
                      Edit the Space
                    </Link> */}
                    <div 
                      onClick={() => deleteHandler(data.space_id)} 
                      className="flex items-center py-2 px-3 hover:bg-[#FEF2F2] text-[#B91C1C] cursor-pointer">
                      <RiDeleteBinLine className="mr-2" />
                      Delete the Space
                    </div>
                  </div>
                  {manageOpener.check && manageOpener.value === index && (
                    <div className="absolute  top-12 right-3 bg-[#FFFFFF] border border-[#E5E7EB] mt-2 rounded-md shadow-lg z-50">
                      <Link to={`/manage-testimonial/${data.space_id}`} className="block py-2 px-4 hover:bg-[#F3F4F6]">
                        <FaBullseye className="mr-2 text-[#2563EB]" />
                        Manage Testimonials
                      </Link>
                      <div 
                        onClick={() => copyHandler(data.space_id)} 
                        className="block py-2 px-4 hover:bg-[#F3F4F6]">
                        <IoIosLink className="mr-2 text-[#10B981]" />
                        Get the spaceid
                      </div>
                      <div 
                        onClick={() => copylink()} 
                        className="block py-2 px-4 hover:bg-[#F3F4F6]">
                        <IoIosLink className="mr-2 text-[#10B981]" />
                        Get the link
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-[90%] lg:w-[75%] mx-auto flex-col  py-28 ">
            <FaFolderPlus className="text-4xl mx-auto text-[#9CA3AF] text-center" />
            <h1 className="mt-4 text-center text-[18px] lg:text-[22px] text-[#1F2937]">No Spaces yet</h1>
            <p className="mt-3 text-center text-[12px] lg:text-[14px] text-[#6B7280]">Create your first space to start collecting testimonials.</p>
              <button onClick={()=>{createSpaceHandler()}} className="flex mx-auto items-center gap-x-2 mt-4 px-4 py-2 bg-[#2563EB] text-[14px] lg:text-[18px] rounded-md text-white hover:bg-[#1E40AF]">
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
