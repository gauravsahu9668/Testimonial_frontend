import axios from "axios"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  setCredits } from "../../slices/authReducer"
import { BACKEND_URL } from "../../server/axiosConnect";
const Upgrade = () => {
  const userId=localStorage.getItem("userId")
  const [credits,setcredits]=useState(0);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const options = {
    key: "rzp_test_f9jmD3i6pHEM3U",  // Not secret!
    amount: 0,
    currency: "INR",
    order_id: "",
    name: "ReviewCraft",
    description: "Get more credits",
    image: "",
    credits:credits,
    handler: async function (response:any) {
    const data = {
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      userId:userId
    };
    const reso=await axios({
      method:"POST",
      url:"https://testnomial-express.vercel.app/verifyPayment",
      data:data
    })
     console.log(userId)
     console.log(credits);
     if(reso.data.success){
      const toastId=toast.loading("loading...")
             try {
      const answer = await axios.post(
      `${BACKEND_URL}/user/addcredits`,
       {
         userId,
         credits:options.credits,
       },
       {
        headers: {
         "Content-Type": "application/json",
        },
       }
  );

  console.log("Response from backend:", answer.data);

  if (answer.data.success) {
    toast.dismiss(toastId)
    toast.success("Credits added successfully");
    dispatch(setCredits(answer.data.updatedCredits.credits));
    navigate("/dashboard")
  }
             } catch (error: any) {
              toast.dismiss(toastId)
             console.error("Backend error:", error.response?.data || error.message);
             toast.error("Failed to add credits. Check console for details.");
             }
     }
    }
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const openRazorpay=async()=>{
    const res=await loadRazorpayScript();
    if(!res){
      alert("Razorpay sdk failed to load,are you online")
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }
  const buyCredits=async(amount:number,credits:number)=>{
    setcredits(credits)
    console.log(credits)
    try{
      const toastId=toast.loading("Loading..")
      const response= await axios({
        method:"POST",
        url:"https://testnomial-express.vercel.app/create-order",
        data:{
          userId,
          amount
        }
      })
      console.log(response.data)
      if(response.data.success){
        toast.dismiss(toastId)
        options.amount=response.data.amount,
        options.currency=response.data.currency,
        options.order_id=response.data.orderid
        options.credits=credits
        openRazorpay();
      }
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
  },[credits])
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto pt-10 gap-10 mt-20 px-4">
        <div className="max-w-sm w-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg transition-all duration-300 p-6 group hover:scale-[1.01]">
  {/* Title */}
  <h2 className="text-lg font-semibold text-white">Premium Credits</h2>

  {/* Pricing */}
  <p className="text-3xl font-bold text-white mt-2">₹499</p>
  <p className="text-sm text-neutral-400">For 50 credits — no time restriction</p>

  {/* Call to Action */}
  <button
    onClick={() => buyCredits(499,50)}
    className="mt-4 px-4 py-2 border border-white text-white text-sm rounded-md hover:bg-white hover:text-black transition-all duration-200"
  >
    Buy Now
  </button>

  {/* Divider */}
  <hr className="my-6 border-neutral-700" />

  {/* Benefits Header */}
  <p className="text-sm text-neutral-400 mb-2">Includes:</p>

  {/* Benefits */}
  <ul className="text-neutral-300 text-sm space-y-2">
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      Get credits to create more spaces
    </li>
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      No time restrictions on usage
    </li>
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      Buy extra time anytime, even with credits left
    </li>
  </ul>
        </div>
        <div className="max-w-sm mb-6 w-full mt-6 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg transition-all duration-300 p-6 group hover:scale-[1.01]">
  {/* Title */}
  <h2 className="text-lg font-semibold text-white">Premium Credits</h2>

  {/* Pricing */}
  <p className="text-3xl font-bold text-white mt-2">₹799</p>
  <p className="text-sm text-neutral-400">For 100 credits — no time restriction</p>

  {/* Call to Action */}
  <button
    onClick={() =>buyCredits(799,100)}
    className="mt-4 px-4 py-2 border border-white text-white text-sm rounded-md hover:bg-white hover:text-black transition-all duration-200"
  >
    Buy Now
  </button>

  {/* Divider */}
  <hr className="my-6 border-neutral-700" />

  {/* Benefits Header */}
  <p className="text-sm text-neutral-400 mb-2">Includes:</p>

  {/* Benefits */}
  <ul className="text-neutral-300 text-sm space-y-2">
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      Get credits to create more spaces
    </li>
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      No time restrictions on usage
    </li>
    <li className="flex items-start gap-2">
      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-white inline-block"></span>
      Buy extra time anytime, even with credits left
    </li>
  </ul>
        </div>
    </div>
  )
}

export default Upgrade
