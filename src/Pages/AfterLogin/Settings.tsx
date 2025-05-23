import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileDirectly } from "../../server/cloudinaryConnect";
import axios from "axios";
import { BACKEND_URL } from "../../server/axiosConnect";
import { setProfilePicture } from "../../slices/authReducer";
import toast from "react-hot-toast";
const Settings: React.FC = () => {
  const [name, setName] = useState("Gaurav Sahu");
  const { profilePicture}=useSelector((state:any)=>state.auth)
  const [imageString,setimageString]=useState("");
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file)
        if(file){
          uploadFileDirectly(file).then((result)=>{
            console.log(result?.data.secure_url)
            setimageString(result?.data.secure_url)
          })
        }
      };
      const dispatch=useDispatch()
  const handleSaveProfile = async() => {
    const toastId=toast.loading("Loading...");
      await axios({
        url:`${BACKEND_URL}/user/update-profile-picture`,
        method:"POST",
        data:{
          profileUrl:imageString,
          userId:localStorage.getItem("userId")
        }
      }).then((res)=>{
        console.log(res)
        dispatch(setProfilePicture(res.data.data));
        toast.dismiss(toastId)
        toast.success(res.data.message);
      })
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r">
        <ul className="py-6">
          <li className="px-6 py-3 text-sm font-semibold text-blue-600 border-l-4 border-blue-600">
            <span role="img" aria-label="profile" className="mr-2">
              👤
            </span>
            Profile
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="plan" className="mr-2">
              💳
            </span>
            Plan
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="billing" className="mr-2">
              🏦
            </span>
            Billing
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="signin" className="mr-2">
              🔑
            </span>
            Sign in methods
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="team" className="mr-2">
              👥
            </span>
            Team members
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="notifications" className="mr-2">
              🔔
            </span>
            Notifications
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="security" className="mr-2">
              🔒
            </span>
            Security
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-12 py-6">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profile</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile picture
              </label>
              <div className="flex  items-center">
                <img
                  src={imageString==="" ? profilePicture: imageString}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
               <input  onChange={(e:any)=>{handleFileChange(e)}} type="file" placeholder="Upload profile picture">
               </input>
              </div>
            </div>
            <button
            onClick={()=>handleSaveProfile()}
              type="button"
              className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save my profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
