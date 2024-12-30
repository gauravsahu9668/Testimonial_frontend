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
    // <div className="w-[45%] p-5 min-h-[100vh] border-t-2 mb-24 rounded-md  absolute right-32 top-10">
    //      <h1 className="w-full text-[40px] font-bold text-center text-[#25282C]">Create a new Space</h1>
    //      <p className="text-center text-[20px] w-[90%] mt-4 mx-auto text-[#55595F]">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
    //      <div className="flex flex-col text-[#55595F] w-full justify-center mt-20">
    //      <label  htmlFor="space-name">
    //       Space name *
    //      </label>
    //      <input value={form1State.spaceName} onChange={(e)=>{dispatch(setSpaceName(e.target.value))}} className="outline-none focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" type="text" id="space-name" required></input>
    //      </div>
    //      <div className="mt-4 flex flex-col ">
    //        <label htmlFor="image-file" className="text-[#55595F]">Space logo *</label>
    //         <div className="flex flex-row w-fit mt-4 items-center gap-x-6">
    //         <div className=" w-[80px] h-[50px] rounded-md  bg-[#EBF1F5]">
    //         {imageString && <img  src={imageString} className="w-full h-full rounded-md" alt="logo"></img>}
    //         </div>
    //         <input onChange={handleFileChange} id="image-file" accept="image/*" type="file"></input>
    //         </div>
    //      </div>
    //      <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //         <label id="header">Header title*</label>
    //         <input value={form1State.headerTitle}  onChange={(e)=>{dispatch(setHeaderTitle(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" type="text" placeholder="Would you like to give a shoutout for xyz" id="header"></input>
    //      </div>
    //      <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //         <label htmlFor="message">Your custom message</label>
    //         <textarea value={form1State.customMessage} onChange={(e)=>{dispatch(setCustomMessage(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" id="message" rows={4} cols={50} required placeholder="Write a warm message to your customers, give them simple directions on how to make the best testimonials"></textarea>
    //      </div>
    //      <div className="flex flex-col w-full items-start mt-4">
    //         <h2 className="text-[20px] text-[#4E4F54] flex items-center">Questions
    //          <LiaQuestionSolid ></LiaQuestionSolid>
    //         </h2>
    //         <div className="w-full flex ">
    //         <input className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] w-[70%] border-[#E2E8ED]" type="text" value={currentQuestion} onChange={handleInputChange} placeholder="Enter your question" />
    //         <button className="flex items-center ml-4 gap-x-2 " onClick={handleAddQuestion}><IoIosAddCircleOutline></IoIosAddCircleOutline>Add One (up to 5)</button>
    //         </div>
    //         <div className="flex flex-col py-2 mt-6 w-full items-start">
    //             {allquestions.map((question, index) => (
    //                 <div key={index} className="flex flex-row w-full mt-3 text-[#1b4256]  items-center gap-x-4 ">
    //                     <div className="w-[10px] h-[10px] rounded-md bg-[#8a8a8e]">
    //                     </div>
    //                     <div className="w-[80%]">{question}</div>
    //                     <button onClick={() => handleDeleteQuestion(index)}><RiDeleteBin6Line></RiDeleteBin6Line></button>
    //                 </div>
    //             ))}
    //         </div>
    //      </div>
    //      {
    //       paths[2]==='new'?  
    //       <button onClick={submitFormHandler}  className="text-center w-full rounded-md mt-10 mb-10 py-3 bg-[#4B4ACF] ">
    //       Create new space
    //       </button>
    //       :
    //       <button onClick={updateSpace}   className="text-center w-full rounded-md mt-10 mb-10 py-3 bg-[#4B4ACF] ">
    //        Update Space
    //       </button>
    //      }
    // </div>
    <div className="w-[45%] max-w-[700px] min-h-[100vh] p-6  mt-16 absolute right-32 top-10 rounded-lg bg-white shadow-md">
  <h1 className="text-[36px] font-bold text-center text-[#1F2937] mb-4">
    Create a New Space
  </h1>
  <p className="text-[18px] text-center text-[#4B5563] mb-8">
    After the Space is created, it will generate a dedicated page for collecting testimonials.
  </p>

  {/* Space Name */}
  <div className="flex flex-col mb-6">
    <label htmlFor="space-name" className="text-[#374151] font-medium mb-2">
      Space Name *
    </label>
    <input
      value={form1State.spaceName}
      onChange={(e) => dispatch(setSpaceName(e.target.value))}
      className="w-full p-3 border-[1px] rounded-md text-[#4B5563] focus:border-[#2563EB] focus:ring focus:ring-blue-200 outline-none"
      type="text"
      id="space-name"
      placeholder="Enter space name"
      required
    />
  </div>

  {/* Space Logo */}
  <div className="flex flex-col mb-6">
    <label htmlFor="image-file" className="text-[#374151] font-medium mb-2">
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
    <label htmlFor="header-title" className="text-[#374151] font-medium mb-2">
      Header Title *
    </label>
    <input
      value={form1State.headerTitle}
      onChange={(e) => dispatch(setHeaderTitle(e.target.value))}
      className="w-full p-3 border-[1px] rounded-md text-[#4B5563] focus:border-[#2563EB] focus:ring focus:ring-blue-200 outline-none"
      type="text"
      id="header-title"
      placeholder="E.g., Would you like to give a shoutout for xyz"
    />
  </div>

  {/* Custom Message */}
  <div className="flex flex-col mb-6">
    <label htmlFor="message" className="text-[#374151] font-medium mb-2">
      Your Custom Message
    </label>
    <textarea
      value={form1State.customMessage}
      onChange={(e) => dispatch(setCustomMessage(e.target.value))}
      className="w-full p-3 border-[1px] rounded-md text-[#4B5563] focus:border-[#2563EB] focus:ring focus:ring-blue-200 outline-none"
      id="message"
      rows={4}
      placeholder="Write a warm message to your customers, giving them simple directions on making the best testimonials."
      required
    />
  </div>

  {/* Questions Section */}
  <div className="mb-6">
    <h2 className="text-[20px] text-[#374151] font-medium flex items-center gap-2">
      Questions <LiaQuestionSolid />
    </h2>
    <div className="flex mt-3 gap-4">
      <input
        className="flex-grow p-3 border-[1px] rounded-md text-[#4B5563] focus:border-[#2563EB] focus:ring focus:ring-blue-200 outline-none"
        type="text"
        value={currentQuestion}
        onChange={handleInputChange}
        placeholder="Enter your question"
      />
      <button
        className="px-4 py-2 bg-[#2563EB] text-white rounded-md flex items-center gap-2 hover:bg-blue-600 transition-all"
        onClick={handleAddQuestion}
      >
        <IoIosAddCircleOutline /> Add (up to 5)
      </button>
    </div>

    {/* Added Questions */}
    <div className="mt-4">
      {allquestions.map((question, index) => (
        <div
          key={index}
          className="flex items-center gap-4 py-2 border-b-[1px] text-[#1F2937]"
        >
          <div className="w-3 h-3 bg-[#6B7280] rounded-full"></div>
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
      className="w-full py-3 text-white bg-[#2563EB] rounded-md hover:bg-blue-600 transition-all"
    >
      Create New Space
    </button>
  ) : (
    <button
      onClick={updateSpace}
      className="w-full py-3 text-white bg-[#2563EB] rounded-md hover:bg-blue-600 transition-all"
    >
      Update Space
    </button>
  )}
</div>

  )
}

export default BasicRight