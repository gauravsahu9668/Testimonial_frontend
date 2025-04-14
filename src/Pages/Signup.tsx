import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import google from '../assets/google.png'
import axiosConnect, { BACKEND_URL } from "../server/axiosConnect"
import axios from "axios"
import toast from "react-hot-toast"
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from '../server/firebase'
import { useState } from "react"
const auth=getAuth(app)
const Signup = () => {
    type FormValues = {
        firstname:string
        email: string
        password: string
      }
    const {
        register,handleSubmit,
        formState:{errors}
    }=useForm<FormValues>()
    const [sendotp,setsendotp]=useState(false);
    const [useremail,setemail]=useState("");
    const [userpassword,setpassword]=useState("");
    const [firstname,setfirstname]=useState("");
    const [generatedotp,setgeneratedotp]=useState("");
    const [userotp, setOtp] = useState("");
    const navigator=useNavigate();
    const handleChange = (e:any) => {
      const value = e.target.value;
      // Allow only numeric values and limit to 6 digits
      if (/^\d{0,6}$/.test(value)) {
        setOtp(value);
      }
    };
    const submitFormHandler=async(data:FormValues)=>{
    console.log(data)
    try{
      const toastId=toast.loading("Loading....");
      await axios({
        url:`${BACKEND_URL}/user/send-otp`,
        method:"POST",
        data:{
          email:data.email
        }
      }).then((res:any)=>{
        toast.dismiss(toastId)
        console.log(res.data.otp)
          setgeneratedotp(res.data.otp);
          toast.success(res.data.message)
      })
    }catch(e){
      console.log(e);
    }
    setsendotp(true);
    setemail(data.email);
    setfirstname(data.firstname)
    setpassword(data.password);
    }
    const submitsignup=async()=>{
      const toastId=toast.loading("Loading...");
      if(generatedotp===userotp){
        createUserWithEmailAndPassword(auth,useremail,userpassword).then((response)=>{
          if(response){
            try{
              axiosConnect("/user/signup","POST",{firstName:firstname,email:useremail,password:userpassword},"").then((result)=>{
                  console.log(result?.data)
                  toast.dismiss(toastId)
                  toast.success("Account has been created")
                  navigator("/signin")
            }) 
          }catch(e){
            toast.dismiss(toastId)
              console.log("error while signing up")
          }
           }
        }).catch((error)=>{
          toast.dismiss(toastId)
          console.log(error)
          alert(error)
        })
      }
      else{
        toast.dismiss(toastId);
        toast.error("Please signup after some time")
      }
    }
  return (
  <>{
    sendotp ?
    <div className="flex justify-center items-center mt-3 py-16 bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Enter OTP</h1>
      <form onSubmit={handleSubmit(submitsignup)} className="flex flex-col space-y-4">
        <input
          type="text"
          value={userotp}
          onChange={handleChange}
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="text-center text-lg px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-300 transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    :
    <div className="w-full bg-zinc-900 min-h-[100vh] flex flex-col">
  
  <div className="w-[90%] mt-24 mb-10 sm:w-[60%] md:w-[35%] mx-auto p-6 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300  md:mt-24">
    <div className="bg-black/40 flex cursor-pointer  hover:bg-black/60 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
      <div className="border-r pr-3 flex items-center justify-center">
        <img src={google} className="w-[20px] md:w-[25px]" alt="Google" />
      </div>
      <div className="w-full text-center text-[16px] md:text-[18px] text-[#495057]">
        Sign in with Google
      </div>
    </div>
    <div className="flex items-center mt-5 text-center gap-3 text-[14px] md:text-[16px] text-[#6C757D]">
      <div className="flex-grow h-[1px] bg-[#E9ECEF]"></div>
      <span>Or, sign in with your email</span>
      <div className="flex-grow h-[1px] bg-[#E9ECEF]"></div>
    </div>
    <form className="mt-6" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="flex flex-col items-start gap-y-1">
        <label
          htmlFor="firstname"
          className="text-[14px] md:text-[16px] text-[#495057]"
        >
          First Name
        </label>
        <input
          id="firstname"
          {...register("firstname")}
          placeholder="Enter first name"
          className="w-full p-3 text-[16px] bg-[#171515]  md:text-[18px]  rounded-lg outline-none focus:ring-2 focus:ring-[#22C55E] text-[#333333]"
        />
        {errors.firstname && (
          <span className="text-[12px] text-[#D9534F]">
            {errors.firstname.message}
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col items-start gap-y-1">
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
          placeholder="Enter email"
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
          className="text-[14px] md:text-[16px] text-[#495057]"
        >
          Password
        </label>
        <input
          id="password"
          {...register("password")}
          type="password"
          placeholder="Enter password"
          className="w-full p-3 text-[16px] bg-[#171515]  md:text-[18px]  rounded-lg outline-none focus:ring-2 focus:ring-[#22C55E] text-[#333333]"
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
        className="bg-gradient-to-r w-full items-center justify-center mt-5 gap-x-2 from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
      >
        Sign up
      </button>
    </form>
    <div className="flex justify-center gap-x-2 mt-4">
      <span className="text-[14px] md:text-[16px] text-[#6C757D]">
        Already have an account?
      </span>
      <Link
        to="/signin"
        className="text-[14px] md:text-[16px] text-[#007BFF] hover:underline"
      >
        Log in
      </Link>
    </div>
  </div>
  </div>
  }
  </>



  )
}
export default Signup