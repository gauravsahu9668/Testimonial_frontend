import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setThankyougif, setThankyouMessage, setThankyouTitle } from "../../slices/thankyouReducer";
import { useSelector } from "react-redux";
import { uploadFileDirectly } from "../../server/cloudinaryConnect";
const ThankRight = () => {
  const [imagestring,setString] =useState<string>("");
  const {thankyougif}=useSelector((state:any)=>state.thankyou)
      const dispatch=useDispatch()
      const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file)
      if(file){
        uploadFileDirectly(file).then((result)=>{
          setString(result?.data.secure_url);
         dispatch(setThankyougif(result?.data.secure_url))
        })
      }
      };
      const thankyouState = useSelector((state: any) => {
        return state.thankyou;
      });
      useEffect(()=>{
        setString(thankyougif)
      })
  return (
    // <div className="w-[45%] p-5 min-h-[100vh] border-t-2 mb-16 rounded-md  absolute right-32 top-10">
    //        <h1 className="w-full text-[40px] font-bold text-center text-[#25282C]">Customize thank you page</h1>
    //        <p className="text-center text-[20px] w-[90%] mt-4 mx-auto text-[#55595F]">Add your personalized message to show your appreciate</p>
    //        <div className="mt-20 flex flex-col">
    //        <label htmlFor="image-file" className="text-[#55595F]">Image</label>
    //         <div className="flex flex-row w-fit mt-4 items-center gap-x-6">
    //         <div className=" w-[80px] h-[50px] rounded-md  bg-[#EBF1F5]">
    //         {imagestring && <img  src={imagestring} className="w-full h-full rounded-md" alt="logo"></img>}
    //         </div>
    //         <input onChange={handleFileChange}  id="image-file" accept="image/*" type="file"></input>
    //         </div>
    //         <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //                     <label id="header">Thank you title</label>
    //                     <input value={thankyouState.thankyouTitle} onChange={(e)=>{dispatch(setThankyouTitle(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" type="text" placeholder="Would you like to give a shoutout for xyz" id="header"></input>
    //         </div>
    //         <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //                     <label htmlFor="message">Your custom message</label>
    //                     <textarea value={thankyouState.thankyouMessage}  onChange={(e)=>{dispatch(setThankyouMessage(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" id="message" rows={4} cols={50} required placeholder="Write a warm message to your customers, give them simple directions on how to make the best testimonials"></textarea>
    //         </div>
    //      </div>
    // </div>
    <div className="w-[45%] p-5 min-h-[100vh] border-t-2 mb-16 rounded-md absolute right-32 top-10">
  <h1 className="text-[40px] font-bold text-center text-[#25282C]">
    Customize thank you page
  </h1>
  <p className="text-center text-[20px] w-[90%] mt-4 mx-auto text-[#55595F]">
    Add your personalized message to show your appreciation.
  </p>

  <div className="mt-20 flex flex-col">
    <label htmlFor="image-file" className="text-[#55595F]">Image</label>
    <div className="flex flex-row w-fit mt-4 items-center gap-x-6">
      <div className="w-[80px] h-[50px] rounded-md bg-[#EBF1F5]">
        {imagestring && <img src={imagestring} className="w-full h-full rounded-md" alt="logo" />}
      </div>
      <input
        onChange={handleFileChange}
        id="image-file"
        accept="image/*"
        type="file"
        className="outline-none"
      />
    </div>

    <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
      <label htmlFor="header">Thank you title</label>
      <input
        value={thankyouState.thankyouTitle}
        onChange={(e) => dispatch(setThankyouTitle(e.target.value))}
        className="outline-none focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]"
        type="text"
        placeholder="Would you like to give a shoutout for xyz?"
        id="header"
      />
    </div>

    <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
      <label htmlFor="message">Your custom message</label>
      <textarea
        value={thankyouState.thankyouMessage}
        onChange={(e) => dispatch(setThankyouMessage(e.target.value))}
        className="outline-none focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]"
        id="message"
        rows={4}
        required
        placeholder="Write a warm message to your customers, give them simple directions on how to make the best testimonials"
      />
    </div>
  </div>
</div>

  )
}

export default ThankRight
