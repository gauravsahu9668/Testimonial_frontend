import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import likeLogo from "../assets/like.png"
import { useDispatch, useSelector } from "react-redux";
import {navData} from "../data/navlinks"
import { useState } from "react";
import { resetauthState, setToken } from "../slices/authReducer";
import { resetForm1State } from "../slices/form1Reducer";
import { resetExtraState } from "../slices/extraReducer";
import { resetThankyouState } from "../slices/thankyouReducer";
function Navbar() {
    const [linkBox,setlinkbox] =useState(false);
    const navigate=useNavigate();
    const setnavBar:any=()=>{
        setlinkbox(!linkBox)
    }
    const { token,profilePicture} = useSelector((state: any) => state.auth);
    const dispatch=useDispatch();
    const signoutFunction=async()=>{
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("userId");
    
      // Clear Redux state
      dispatch(resetauthState());
      dispatch(resetForm1State());
      dispatch(resetExtraState());
      dispatch(resetThankyouState());
      dispatch(setToken(null))
      // Navigate back to login
      navigate("/");
    }
    return (
    // <nav className="h-[75px] flex justify-between items-center px-10 border-b-[1px] border-[#ECF1F4]">
    //         <div className="flex items-center cursor-pointer" onClick={()=>{navigate('/')}}>
    //             <img src={likeLogo} alt="Logo" className="h-10 mr-4" />
    //             <div  className="text-[20px] font-semibold text-[#545454] ">Testimonials</div>
    //         </div>
    //          {
    //             token? null : 
    //             <div className="flex flex-row gap-x-12 items-center">
    //         <div className="flex items-center">
    //            <div className="text-gray-700 hover:text-black text-[20px] font-semibold ">Customers</div>
    //            <RiArrowDropDownLine className="w-[50px] h-[50px]" />
    //         </div>
    //         <ul className="hidden md:flex space-x-8">
    //                 <li className="text-gray-700 cursor-pointer hover:text-black text-[20px] font-semibold "><Link to={"/features"}>Features</Link></li>
    //                 <li className="text-gray-700 cursor-pointer hover:text-black text-[20px] font-semibold "><Link to={"/intregations"}>Intregations</Link></li>
    //                 <li className="text-gray-700 cursor-pointer hover:text-black text-[20px] font-semibold "><Link to={"/pricing"}>Pricing</Link></li>
    //         </ul>
    //         </div>
    //          } 
    //         {
    //             token? 
    //             <div 
    //             className="w-[50px] h-full flex items-center justify-center rounded-md relative bg-white cursor-pointer z-[50]" 
    //             onClick={setnavBar}
    //         >
    //             <img src={google} className="w-[50px] h-[50px] rounded-full" alt="Profile" />
    //             {linkBox && (
    //                 <div className="absolute py-2 right-2 top-16 w-[200px] bg-white rounded-md border-[1px] shadow-md z-[100]">
    //                     {navData.map((data) => {
    //                         return data.id === 6 ? (
    //                             <div 
    //                                 className="px-3 py-2 cursor-pointer hover:bg-[#c7cee7] border-t-[1px]" 
    //                                 onClick={() => {
    //                                     signoutFunction();
    //                                     window.scrollTo(0, 0);
    //                                 }}
    //                             >
    //                                 Sign out
    //                             </div>
    //                         ) : (
    //                             <Link 
    //                                 to={`${data.link}`} 
    //                                 onClick={() => window.scrollTo(0, 0)}
    //                             >
    //                                 <div className="px-3 py-2 hover:bg-[#c7cee7]">
    //                                     {`${data.linkName}`}
    //                                 </div>
    //                             </Link>
    //                         );
    //                     })}
    //                 </div>
    //             )}
    //             </div> :
    //             <div className="flex space-x-4">
    //             <button className="text-black px-4 py-2"><Link to="/signin">Log in</Link></button>
    //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"><Link to="/signup">Sign up</Link></button>
    //             </div>
    //         }
    // </nav>
    <nav className="h-[75px] w-full flex justify-between items-center px-6 md:px-10 bg-[#F9FAFB] border-b-[1px] border-[#ECF1F4] shadow-sm">
    <div
      className="flex items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={likeLogo} alt="Logo" className="h-10 mr-3" />
      <div className="text-[22px] md:text-[24px] font-semibold text-[#495057]">
        Testimonials
      </div>
    </div>
  
    {/* Navigation Links */}
    {token ? null : (
      <div className="hidden md:flex flex-row gap-x-8 items-center">
        <div className="relative group">
          <div className="flex items-center text-[16px] md:text-[18px] font-semibold text-[#495057] hover:text-[#212529] cursor-pointer">
            Customers
            <RiArrowDropDownLine className="w-8 h-8 text-[#6C757D] group-hover:text-[#212529]" />
          </div>
          <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-md border text-sm mt-2 py-2">
            <ul className="space-y-2 px-4">
              <li className="hover:text-[#007BFF] cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:text-[#007BFF] cursor-pointer">Case Studies</li>
              <li className="hover:text-[#007BFF] cursor-pointer">Success Metrics</li>
            </ul>
          </div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to={"/features"}
              className="text-[16px] md:text-[18px] font-semibold text-[#495057] hover:text-[#007BFF]"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to={"/intregations"}
              className="text-[16px] md:text-[18px] font-semibold text-[#495057] hover:text-[#007BFF]"
            >
              Integrations
            </Link>
          </li>
          <li>
            <Link
              to={"/pricing"}
              className="text-[16px] md:text-[18px] font-semibold text-[#495057] hover:text-[#007BFF]"
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    )}
  
    {/* Profile and Authentication */}
    {token ? (
      <div
        className="relative w-[45px] h-[45px] bg-white rounded-full border cursor-pointer flex items-center justify-center"
        onClick={setnavBar}
      >
        <img
          src={profilePicture}
          alt="Profile"
          className="w-full h-full rounded-full"
        />
        {linkBox && (
          <div className="absolute top-14 right-0 w-[200px] bg-white rounded-md border shadow-lg z-50">
            {navData.map((data) => (
              data.id === 6 ? (
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-[#E9ECEF] border-t"
                  onClick={() => {
                    signoutFunction();
                    window.scrollTo(0, 0);
                  }}
                >
                  Sign out
                </div>
              ) : (
                <Link
                  to={`${data.link}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="px-4 py-2 hover:bg-[#E9ECEF]">
                    {`${data.linkName}`}
                  </div>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className="flex space-x-4">
        <button className="text-[#007BFF] hover:underline text-[16px] md:text-[18px] font-medium">
          <Link to="/signin">Log in</Link>
        </button>
        <button className="bg-[#007BFF] text-white px-4 py-2 rounded-md text-[16px] md:text-[18px] hover:bg-[#0056B3] shadow">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    )}
  </nav>
  



    );
}

export default Navbar;
