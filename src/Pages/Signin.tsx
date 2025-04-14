import google from "../assets/google.png"
import { Link, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import {  setCredits, setPayment, setProfilePicture, setToken } from "../slices/authReducer"
import axiosConnect from "../server/axiosConnect"
import toast from "react-hot-toast"
import { useState } from "react"
import { signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from "../server/firebase"
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider();
const Signin = () => {
    type FormValues = {
        email: string
        password: string
    }
    const [loader,setLoader]=useState(false)
    const navigator=useNavigate();
    const dispatch=useDispatch();
    const {
        register,reset,handleSubmit,
        formState:{errors}
    }=useForm<FormValues>()
    const submitFormHandler=(data:FormValues)=>{
      signInWithEmailAndPassword(auth,data.email,data.password).then(()=>{
        setLoader(true)
        axiosConnect("/user/signin","POST",{email:data.email},"").then((response)=>{
          console.log(response)
          if(response?.data.success){
            localStorage.setItem("AuthToken",response.data.token)
            localStorage.setItem("userId",response.data.userId)
            dispatch(setToken(response.data.token))
            dispatch(setCredits(response.data.user.credits));
            dispatch(setProfilePicture(response.data.user.profilepicture));
            dispatch(setPayment(response.data.user.payment))
            setLoader(false)
            toast.success(response.data.message)
            navigator("/")
          }
          else{
          setLoader(false)
           toast.error(response?.data.message)
          }
          })
      }).catch((error)=>{
        alert(error)
      })
      reset();
    }
    const signinwithgoogle=()=>{
      signInWithPopup(auth,googleProvider).then((response)=>{
        console.log(response.user.email)
        setLoader(true)
        axiosConnect("/user/signin","POST",{email:response.user.email},"").then((response)=>{
          if(response?.data.success){
            console.log(response.data.user)
            localStorage.setItem("AuthToken",response.data.token)
            localStorage.setItem("userId",response.data.userId)
            dispatch(setCredits(response.data.user.credits));
            dispatch(setProfilePicture(response.data.user.profilepicture));
            dispatch(setPayment(response.data.user.payment))
            dispatch(setToken(response.data.token))
            setLoader(false)
            toast.success(response.data.message)
            navigator("/")
          }
          else{
          setLoader(false)
           toast.error(response?.data.message)
          }
        })
      })
    }
  return (
    <>
  {loader ? (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#F9FAFB]">
      <div className="h-12 w-12 border-4 border-t-[#007BFF] border-[#E9ECEF] rounded-full animate-spin"></div>
    </div>
  ) : (
    <div className="w-full min-h-[100vh] flex flex-col bg-zinc-900">
      <div className="w-[90%] mt-24 sm:w-[60%] md:w-[35%] mx-auto p-6 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300  md:mt-24">
        <div
          onClick={signinwithgoogle}
          className="bg-black/40 flex cursor-pointer  hover:bg-black/60 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          <div className=" pr-3 flex items-center justify-center">
            <img src={google} className="w-[20px] md:w-[25px]" alt="Google" />
          </div>
          <div className="w-full text-center text-[16px] md:text-[18px] text-[#495057]">
            Sign in with Google
          </div>
        </div>
        <div className="flex mt-6 items-center text-center gap-3 text-[14px] md:text-[16px] text-[#6C757D]">
          <div className="flex-grow h-[1px] bg-[#E9ECEF]"></div>
          <span>Or, sign in with your email</span>
          <div className="flex-grow h-[1px] bg-[#E9ECEF]"></div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit(submitFormHandler)}>
          <div className="flex flex-col items-start gap-y-1">
            <label
              htmlFor="email"
              className="text-[14px] md:text-[16px] text-[#747678]"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-[16px] bg-[#171515]  md:text-[18px]  rounded-lg outline-none focus:ring-2 focus:ring-[#22C55E] text-[#333333]"
            />
            {errors.email && (
              <span className="text-[12px] text-[#D9534F]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mt-4 flex flex-col items-start gap-y-1">
            <label
              htmlFor="password"
              className="text-[14px] md:text-[16px] text-[#747678]"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-2 focus:ring-[#22C55E] text-[#333333]"
            />
            {errors.password && (
              <span className="text-[12px] text-[#D9534F]">
                {errors.password.message}
              </span>
            )}
          </div>
          <p className="mt-3 text-[14px] md:text-[16px] text-[#22C55E] cursor-pointer hover:underline">
            Forgot password?
          </p>
          <button
            type="submit"
            className="bg-gradient-to-r w-full items-center justify-center mt-5 gap-x-2 from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            Sign in
          </button>
        </form>
        <div className="flex justify-center gap-x-2 mt-6">
          <span className="text-[14px] md:text-[16px] text-[#6C757D]">
            Don't have an account?
          </span>
          <Link
            to="/signup"
            className="text-[14px] md:text-[16px] text-[#22C55E] hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )}
</>

  )
}
export default Signin
