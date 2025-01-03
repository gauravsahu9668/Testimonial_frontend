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
    // <>{
    //   loader ?
    //   <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#F9FAFB]">
    //   <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
    // </div> : 
    //       <div className="w-full min-h-[100vh] flex flex-col bg-[#EEF3F6]">
    //       <div className="w-full text-center text-[#151719] mt-16 font-bold text-[35px] sm:text-[28px]">
    //         Welcome back
    //       </div> 
    //       <div className="w-[90%] sm:w-[60%] md:w-[40%] mx-auto p-5 bg-white mt-16">
    //         <div onClick={signinwithgoogle} className="w-full cursor-pointer p-3 bg-[#F5F8FA] border-[1px] rounded-sm flex flex-row">
    //           <div className="border-r-[1px] rounded-sm flex items-center justify-center w-[15%] sm:w-[10%]">
    //             <img src={google} className="w-[23px]"></img>
    //           </div>
    //           <div className="w-full text-center text-[20px] sm:text-[18px] text-[#78909C]">
    //             Sign in with Google
    //           </div>
    //         </div>
    //         <div className="flex mt-5 flex-row items-center justify-between text-center text-[16px] sm:text-[14px] text-[#78909C]">
    //           <div className="h-[1px] w-[25%] bg-gray-500"></div>
    //           <p>Or, sign in with your email</p>
    //           <div className="h-[1px] w-[25%] bg-gray-500"></div>
    //         </div>
    //         <div>
    //           <form onSubmit={handleSubmit(submitFormHandler)}>
    //             <div className="mt-10 flex flex-col items-start gap-y-1">
    //               <label htmlFor="email" className="text-[16px] sm:text-[14px] text-[#78909C]">Email</label>
    //               <input id="email" {...register("email")} type="email" placeholder="Your email" className="outline-none w-full p-2 text-[20px] sm:text-[18px] focus:border-2 focus:border-blue-500 text-[#78909C] border-[1px] border-gray-600"></input>
    //               {errors.email && <span>Enter email</span>}
    //             </div>
    //             <div className="mt-3 flex flex-col items-start gap-y-1">
    //               <label htmlFor="password" className="text-[16px] sm:text-[14px] text-[#78909C]">Password</label>
    //               <input id="password" {...register("password")} type="password" placeholder="Enter password" className="outline-none w-full p-2 text-[20px] sm:text-[18px] focus:border-2 focus:border-blue-500 text-[#78909C] border-[1px] border-gray-600"></input>
    //               {errors.password && <span>Enter password</span>}
    //             </div>
    //             <p className="mt-2 text-[16px] sm:text-[14px] text-[#78909C]">Forgot password?</p>
    //             <button type="submit" className="text-white mt-6 rounded-sm font-semibold text-[16px] sm:text-[14px] w-full py-2 bg-[#5D5DFF] hover:bg-[#4b4bfb]">
    //               Sign in
    //             </button>
    //           </form>
    //           <div className="w-full flex items-center gap-x-1 justify-center flex-row mt-4">
    //             <p className="text-[#757D86]">Don't have an account?</p>
    //             <Link to="/signup" className="text-[#5377c3] hover:text-[#738cc1]">Sign up</Link>
    //           </div>
    //         </div>
    //       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    //   </div>
    //   }
    //  </>
    <>
  {loader ? (
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#F9FAFB]">
      <div className="h-12 w-12 border-4 border-t-[#007BFF] border-[#E9ECEF] rounded-full animate-spin"></div>
    </div>
  ) : (
    <div className="w-full min-h-[100vh] flex flex-col bg-[#F9FAFB]">
      <div className="w-full text-center text-[#212529] mt-16 font-semibold text-[28px] md:text-[35px]">
        Welcome back
      </div>
      <div className="w-[90%] sm:w-[60%] md:w-[40%] mx-auto p-6 bg-white mt-10 md:mt-16 shadow-md rounded-lg">
        <div
          onClick={signinwithgoogle}
          className="w-full cursor-pointer p-3 bg-[#F1F3F5] border rounded-lg flex items-center hover:shadow-md"
        >
          <div className="border-r pr-3 flex items-center justify-center">
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
              className="text-[14px] md:text-[16px] text-[#495057]"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-[16px] md:text-[18px] border rounded-lg outline-none focus:ring-2 focus:ring-[#007BFF] text-[#495057]"
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
              className="text-[14px] md:text-[16px] text-[#495057]"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 text-[16px] md:text-[18px] border rounded-lg outline-none focus:ring-2 focus:ring-[#007BFF] text-[#495057]"
            />
            {errors.password && (
              <span className="text-[12px] text-[#D9534F]">
                {errors.password.message}
              </span>
            )}
          </div>
          <p className="mt-3 text-[14px] md:text-[16px] text-[#007BFF] cursor-pointer hover:underline">
            Forgot password?
          </p>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-[16px] md:text-[18px] font-semibold text-white bg-[#007BFF] hover:bg-[#0056B3] rounded-lg shadow-sm"
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
            className="text-[14px] md:text-[16px] text-[#007BFF] hover:underline"
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
