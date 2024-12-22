import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import google from '../assets/google.png'
import axiosConnect from "../server/axiosConnect"
import toast from "react-hot-toast"
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from '../server/firebase'
const auth=getAuth(app)
const Signup = () => {
    type FormValues = {
        firstname:string
        email: string
        password: string
      }
    const {
        register,reset,handleSubmit,
        formState:{errors}
    }=useForm<FormValues>()
    const navigator=useNavigate();
    const submitFormHandler=async(data:FormValues)=>{
        createUserWithEmailAndPassword(auth,data.email,data.password).then((response)=>{
          if(response){
            try{
              axiosConnect("/user/signup","POST",{firstName:data.firstname,email:data.email,password:data.password},"").then((result)=>{
                  console.log(result?.data)
                  toast.success("Account has been created")
                  navigator("/signin")
            }) 
          }catch(e){
              console.log("error while signing up")
          }
          reset();
           }
        }).catch((error)=>{
          console.log(error)
          alert(error)
        })
    }
  return (
  //   <div className="w-full min-h-[100vh] flex flex-col bg-[#EEF3F6]">
  // <div className="w-full text-center text-[#151719] mt-8 md:mt-16 font-bold text-[28px] md:text-[35px]">
  //   Sign up for free
  // </div>
  // <div className="w-full text-center text-[18px] md:text-[22px] text-[#53575C]">
  //   You will get 2 video and 10 text testimonial credits for FREE!
  // </div>
  // <div className="w-[90%] md:w-[60%] lg:w-[40%] xl:w-[32%] mx-auto p-5 mb-10 bg-white mt-10 md:mt-16">
  //   <div className="flex gap-x-2">
  //     <input
  //       className="w-[20px] md:w-[25px] focus:border-blue-500"
  //       type="checkbox"
  //       id="check-box"
  //     ></input>
  //     <div className="text-[14px] md:text-[16px] text-[#78909C]">
  //       I agree to the Testimonial Terms of Service and I'm aware my personal
  //       data is processed in accordance with our Privacy Policy. Please read
  //       it carefully.
  //     </div>
  //   </div>
  //   <div className="w-full mt-5 cursor-pointer p-3 bg-[#F5F8FA] border-[1px] rounded-sm flex flex-row">
  //     <div className="border-r-[1px] rounded-sm flex items-center justify-center w-[15%]">
  //       <img src={google} className="w-[18px] md:w-[23px]"></img>
  //     </div>
  //     <div className="w-full text-center text-[16px] md:text-[20px] text-[#78909C]">
  //       Sign in with Google
  //     </div>
  //   </div>
  //   <div className="flex mt-5 flex-row items-center justify-between text-center text-[14px] md:text-[16px] text-[#78909C]">
  //     <div className="h-[1px] w-[20%] md:w-[25%] bg-gray-500"></div>
  //     <p>Or, sign in with your email</p>
  //     <div className="h-[1px] w-[20%] md:w-[25%] bg-gray-500"></div>
  //   </div>
  //   <div>
  //     <form onSubmit={handleSubmit(submitFormHandler)}>
  //       <div className="mt-6 flex flex-col items-start gap-y-1">
  //         <label
  //           htmlFor="firstname"
  //           className="text-[14px] md:text-[16px] text-[#78909C]"
  //         >
  //           First Name
  //         </label>
  //         <input
  //           id="firstname"
  //           {...register("firstname")}
  //           placeholder="Enter first name"
  //           className="outline-none w-full p-2 text-[16px] md:text-[20px] focus:border-2 focus:border-blue-500 text-[#78909C] border-[1px] border-gray-600"
  //         ></input>
  //         {errors.password && <span>Your first name</span>}
  //       </div>
  //       <div className="mt-3 flex flex-col items-start gap-y-1">
  //         <label
  //           htmlFor="email"
  //           className="text-[14px] md:text-[16px] text-[#78909C]"
  //         >
  //           Email
  //         </label>
  //         <input
  //           id="email"
  //           {...register("email")}
  //           type="email"
  //           placeholder="Your email"
  //           className="outline-none w-full p-2 text-[16px] md:text-[20px] focus:border-2 focus:border-blue-500 text-[#78909C] border-[1px] border-gray-600"
  //         ></input>
  //         {errors.email && <span>Enter email</span>}
  //       </div>
  //       <div className="mt-3 flex flex-col items-start gap-y-1">
  //         <label
  //           htmlFor="password"
  //           className="text-[14px] md:text-[16px] text-[#78909C]"
  //         >
  //           Password
  //         </label>
  //         <input
  //           id="password"
  //           {...register("password")}
  //           type="password"
  //           placeholder="Enter password"
  //           className="outline-none w-full p-2 text-[16px] md:text-[20px] focus:border-2 focus:border-blue-500 text-[#78909C] border-[1px] border-gray-600"
  //         ></input>
  //         {errors.password && <span>Enter password</span>}
  //       </div>
  //       <p className="mt-2 text-[14px] md:text-[16px] text-[#78909C]">
  //         Forgot password?
  //       </p>
  //       <button
  //         type="submit"
  //         className="text-white mt-6 rounded-sm font-semibold text-[14px] md:text-[16px] w-full py-2 bg-[#5D5DFF] hover:bg-[#4b4bfb]"
  //       >
  //         Sign up
  //       </button>
  //     </form>
  //     <div className="w-full flex items-center gap-x-1 justify-center flex-row mt-4">
  //       <p className="text-[14px] md:text-[16px] text-[#757D86]">
  //         Already have an account?
  //       </p>
  //       <Link
  //         to="/signin"
  //         className="text-[14px] md:text-[16px] text-[#5377c3] hover:text-[#738cc1]"
  //       >
  //         Log in
  //       </Link>
  //     </div>
  //   </div>
  // </div>
  //   </div>
  <div className="w-full min-h-[100vh] flex flex-col bg-[#F9FAFB]">
  <div className="w-full text-center text-[#212529] mt-8 md:mt-16 font-semibold text-[28px] md:text-[35px]">
    Sign up for free
  </div>
  <div className="w-full text-center text-[16px] md:text-[20px] text-[#6C757D]">
    You will get 2 video and 10 text testimonial credits for FREE!
  </div>
  <div className="w-[90%] md:w-[60%] lg:w-[40%] xl:w-[32%] mx-auto p-6 mb-10 bg-white mt-10 md:mt-16 shadow-md rounded-lg">
    <div className="flex items-start gap-x-3">
      <input
        className="w-[18px] md:w-[20px] accent-[#007BFF]"
        type="checkbox"
        id="check-box"
      />
      <p className="text-[14px] md:text-[16px] text-[#495057]">
        I agree to the Testimonial Terms of Service and I'm aware my personal
        data is processed in accordance with our Privacy Policy. Please read it
        carefully.
      </p>
    </div>
    <div className="w-full mt-5 cursor-pointer p-3 bg-[#F1F3F5] border rounded-lg flex items-center hover:shadow-md">
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
          className="w-full p-3 text-[16px] md:text-[18px] border rounded-lg outline-none focus:ring-2 focus:ring-[#007BFF] text-[#495057]"
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
          placeholder="Enter password"
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



  )
}
export default Signup