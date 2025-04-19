import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetauthState, setToken } from "../slices/authReducer";
import { resetForm1State } from "../slices/form1Reducer";
import { resetExtraState } from "../slices/extraReducer";
import { resetThankyouState } from "../slices/thankyouReducer";
import { LogOut, Settings, LayoutDashboard, Rocket } from 'lucide-react';
import logo from '../assets/ReviewCraft_logo-removebg-preview.png'
function Navbar() {
    const [navBox,setnavbox] =useState(false);
    const navigate=useNavigate();
    const { token} = useSelector((state: any) => state.auth);
    const dispatch=useDispatch();
    const signoutFunction=async()=>{
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("userId");
      dispatch(resetauthState());
      dispatch(resetForm1State());
      dispatch(resetExtraState());
      dispatch(resetThankyouState());
      dispatch(setToken(null))
      navigate("/");
    }
    return (
      <nav className="fixed top-0 w-full bg-gradient-to-r from-black/90 to-zinc-900/90 backdrop-blur-md shadow-xl border-b border-white/5 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center space-x-2" onClick={() => navigate("/")}>
            <img src={logo} className="w-[180px] h-[40px]"></img>
            </div>

            {/* Desktop Navigation */}
            {
            token ? (
              <>
                 <div className="hidden md:flex items-center space-x-4">
             <NavLink link='/dashboard' icon={<LayoutDashboard size={18} />} text="Dashboard" />
             <NavLink link='/settings' icon={<Settings size={18} />} text="Settings" />
             <NavLink link='/upgrade' icon={<Rocket size={18} />} text="Upgrade" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" />
             <div className={`px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10`}  onClick={() => {
                    signoutFunction();
                    window.scrollTo(0, 0);
                  }}>
                <LogOut size={18}></LogOut>
                <span>Log Out</span>
             </div>
                 </div>
                 <div className="md:hidden">
              <button onClick={()=>setnavbox(!navBox)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
                 </div>
              </>
            ):(
              <div className="flex items-center space-x-4">
              <Link className={`px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10`} to='/signin'><span>Log in</span></Link>
              <Link className={`px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10`} to='/signup'>Sign up</Link>
              </div>
            )
            }
            </div>
          </div>
          {
            navBox && (
              <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink link='/dashboard' icon={<LayoutDashboard size={18} />} text="Dashboard" />
              <MobileNavLink link='/settings' icon={<Settings size={18} />} text="Settings" />
             <MobileNavLink link='/upgrade' icon={<Rocket size={18} />} text="Upgrade" />
              <MobileNavLink icon={<LogOut size={18} />} text="Sign Out" />
              </div>
              </div>
            )
          }
      </nav>
    );
}
const NavLink = ({ icon,link, text, className = "" }:any) => (
  <Link
    to={link}
    className={`px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-black/40 
    flex items-center space-x-2 transition-all duration-200 ease-in-out cursor-pointer
    hover:shadow-lg hover:shadow-emerald-500/10 ${className}`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);
const MobileNavLink = ({link, icon, text }:any) => (
  <Link
    to={link}
    className="text-gray-300 hover:text-white hover:bg-black/40  px-3 py-2 rounded-md text-base font-medium
    flex items-center space-x-2"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
