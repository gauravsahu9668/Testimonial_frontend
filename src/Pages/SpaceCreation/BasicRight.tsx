import { LiaQuestionSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { setCustomMessage, setHeaderTitle, setQuestions, setSpaceLogo, setSpaceName } from "../../slices/form1Reducer";
import { useDispatch, useSelector } from "react-redux";
import  { BACKEND_URL } from "../../server/axiosConnect";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadFileDirectly } from "../../server/cloudinaryConnect";
import { resetForm1State } from "../../slices/form1Reducer";
import { resetExtraState } from "../../slices/extraReducer";
import { resetThankyouState } from "../../slices/thankyouReducer";
import { setCredits } from "../../slices/authReducer";
const BasicRight = () => {
    const [imageString, setImageString] = useState<string>("");
    const {spaceLogo}=useSelector((state:any)=>state.form1)
    const questionLimit:number=5;
    const [allquestions, setallQuestions] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const location=useLocation();
    const path=location.pathname;
    const paths=path.split('/');
    const id=Number(paths[2]);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentQuestion(event.target.value);
    };
    const dispatch=useDispatch();
    const handleAddQuestion = () => {
        if (currentQuestion.trim() !== '' && allquestions.length < questionLimit) {
            setallQuestions([...allquestions, currentQuestion]);
            setCurrentQuestion('');
            dispatch(setQuestions([...allquestions, currentQuestion]))
        }
    };
    const handleDeleteQuestion = (index: number) => {
        setallQuestions(allquestions.filter((_, i) => i !== index));
        dispatch(setQuestions(allquestions.filter((_, i) => i !== index)))
    };
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file)
      if(file){
        uploadFileDirectly(file).then((result)=>{
          console.log(result?.data.secure_url)
          setImageString(result?.data.secure_url)
          dispatch(setSpaceLogo(result?.data.secure_url))
        })
      }
    };
    const form1State = useSelector((state: any) => {
      return state.form1;
    });
    const extraState = useSelector((state: any) => {
      return state.extra;
    });
    const thankyouState = useSelector((state: any) => {
      return state.thankyou;
    });
    const userId=localStorage.getItem('userId')
    const data={
        form1State:form1State,
        extraSpace:extraState,
        thankState:thankyouState,user_id:userId
    }
    const {token}=useSelector((state:any)=>state.auth)
    const navigate=useNavigate()
    const submitFormHandler=async()=> {
      const toastId=toast.loading("Loading...")
      console.log(userId)
      await axios({
        url:`${BACKEND_URL}/space/create-newSpace`,
        method:"POST",
        data:data,
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then((result)=>{
        if(result?.data.success){
          toast.dismiss(toastId)
          console.log(result)
          toast.success("Space created successfully")
          dispatch(setCredits(result.data.credits))
          dispatch(resetForm1State())
          dispatch(resetExtraState())
          dispatch(resetThankyouState())
          navigate("/dashboard")
        }
        console.log(result)
      }).catch((e)=>{
        console.log(e);
      })
    };
    const updateSpace=async()=>{
      const toastId=toast.loading("Loading...");
      try{
        const response=await axios({
            url:`${BACKEND_URL}/space/update-space`,
            method:"PUT",
            data:{
              data,
              spaceId:id
            },
            headers:{
              Authorization:`Bearer ${token}`
            }
        })
        toast.dismiss(toastId)
        console.log(response)
        navigate('/dashboard')
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      setImageString(spaceLogo)
      setallQuestions(form1State.questions)
    })
  return (
    <div className="w-full mb-7  min-h-[100vh] p-4 md:p-8 bg-[#020203] mx-auto rounded-lg shadow-md">
  <h1 className="text-[36px] font-bold text-center text-[#c9cacd] mb-4">
    Create a New Space
  </h1>
  <p className="text-[18px] text-center text-[#adaeae] mb-8">
    After the Space is created, it will generate a dedicated page for collecting testimonials.
  </p>

  {/* Space Name */}
  <div className="flex flex-col mb-6">
    <label htmlFor="space-name" className="text-[#c9cacd] font-medium mb-2">
      Space Name *
    </label>
    <input
      value={form1State.spaceName}
      onChange={(e) => dispatch(setSpaceName(e.target.value))}
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      id="space-name"
      placeholder="Enter space name"
      required
    />
  </div>

  {/* Space Logo */}
  <div className="flex flex-col mb-6">
    <label htmlFor="image-file" className="text-[#c9cacd] font-medium mb-2">
      Space Logo *
    </label>
    <div className="flex items-center gap-4">
      <div className="w-20 h-16 rounded-md bg-[#F3F4F6] flex items-center justify-center">
        {imageString && (
          <img
            src={imageString}
            alt="logo"
            className="w-full h-full rounded-md"
          />
        )}
      </div>
      <input
        onChange={handleFileChange}
        id="image-file"
        accept="image/*"
        type="file"
        className="text-sm"
      />
    </div>
  </div>

  {/* Header Title */}
  <div className="flex flex-col mb-6">
    <label htmlFor="header-title" className="text-[#c9cacd] font-medium mb-2">
      Header Title *
    </label>
    <input
      value={form1State.headerTitle}
      onChange={(e) => dispatch(setHeaderTitle(e.target.value))}
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      id="header-title"
      placeholder="E.g., Would you like to give a shoutout for xyz"
    />
  </div>

  {/* Custom Message */}
  <div className="flex flex-col mb-6">
    <label htmlFor="message" className="text-[#c9cacd] font-medium mb-2">
      Your Custom Message
    </label>
    <textarea
      value={form1State.customMessage}
      onChange={(e) => dispatch(setCustomMessage(e.target.value))}
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      id="message"
      rows={4}
      placeholder="Write a warm message to your customers, giving them simple directions on making the best testimonials."
      required
    />
  </div>

  {/* Questions Section */}
  <div className="mb-6">
    <h2 className="text-[20px] text-[#c9cacd] font-medium flex items-center gap-2">
      Questions <LiaQuestionSolid />
    </h2>
    <div className="flex mt-3 gap-4">
      <input
        className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
        type="text"
        value={currentQuestion}
        onChange={handleInputChange}
        placeholder="Enter your question"
      />
      <button
        className="md:px-1 md:py-2 bg-[#10b888] w-[25%] justify-center text-white rounded-md flex items-center gap-2  transition-all"
        onClick={handleAddQuestion}
      >
        <IoIosAddCircleOutline /> Add (5)
      </button>
    </div>

    {/* Added Questions */}
    <div className="mt-4">
      {allquestions.map((question, index) => (
        <div
          key={index}
          className="flex items-center gap-4 py-2  text-[#c9cacd]"
        >
          <div className="w-3 h-3 bg-[#c9cacd] rounded-full"></div>
          <span className="flex-grow">{question}</span>
          <button onClick={() => handleDeleteQuestion(index)}>
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Submit Button */}
  {paths[2] === "new" ? (
    <button
      onClick={submitFormHandler}
      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    >
      Create New Space
    </button>
  ) : (
    <button
      onClick={updateSpace}
      className="bg-gradient-to-r w-full flex items-center justify-center from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    >
      Update Space
    </button>
  )}
</div>

  )
}

export default BasicRight