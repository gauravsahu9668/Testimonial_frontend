import { useDispatch, useSelector } from "react-redux"
import { setConsentDisplay, setMaxCharacters, setMAxVideoDuration, setQuestioTag, settextButtonText, setTextSubmissionTitle, setVideoButtonText } from "../../slices/extraReducer"

const SettingRight = () => {
  const dispatch=useDispatch()
  const extraState=useSelector((state:any)=>{
      return state.extra
  })
  return (
    
    <div className="w-full mb-6  min-h-[100vh] p-8 bg-[#020203] mx-auto rounded-lg shadow-md">
  <h1 className="w-full text-[40px] font-bold text-center text-[#c9c9cb]">
    Some extra settings
  </h1>
  
  {/* Max video duration */}
  <div className="flex mt-12 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="max-video-duration" className="font-semibold">Max video duration</label>
    <select 
      value={extraState.maxVideoDuration}  
      onChange={(e) => dispatch(setMAxVideoDuration(e.target.value))}  
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      id="max-video-duration"
    >
      <option value="30">30 seconds</option>
      <option value="60">60 seconds</option>
      <option value="90">90 seconds</option>
      <option value="120" selected>120 seconds</option>
    </select>
  </div>

  {/* Max characters for text */}
  <div className="flex mt-6 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="max-characters" className="font-semibold">Max characters for the text testimonial</label>
    <input 
      value={extraState.maxCharacters} 
      type="number" 
      onChange={(e) => dispatch(setMaxCharacters(Number(e.target.value)))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2 rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      placeholder="0"
      id="max-characters"
    />
    <span className="text-[14px] text-[#c9c9cb]">Setting it to 0 will remove the max char limit</span>
  </div>

  {/* Video button text */}
  <div className="flex mt-6 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="video-button-text" className="font-semibold">Video button text</label>
    <input 
      value={extraState.videoButtonText} 
      onChange={(e) => dispatch(setVideoButtonText(e.target.value))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2 rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      placeholder="Record a video"
      id="video-button-text"
    />
  </div>

  {/* Text button text */}
  <div className="flex mt-6 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="text-button-text" className="font-semibold">Text button text</label>
    <input 
      value={extraState.textButtonText} 
      onChange={(e) => dispatch(settextButtonText(e.target.value))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2 rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      placeholder="Send in text"
      id="text-button-text"
    />
  </div>

  {/* Consent statement */}
  <div className="flex mt-6 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="consent-statement" className="font-semibold">Consent statement</label>
    <input 
      value={extraState.consentDisplay} 
      onChange={(e) => dispatch(setConsentDisplay(e.target.value))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      placeholder="Questions"
      id="consent-statement"
    />
  </div>

  {/* Text submission title */}
  <div className="flex mt-6 flex-col text-[#c9c9cb] w-full justify-center">
    <label htmlFor="text-submission-title" className="font-semibold">Text submission title</label>
    <input 
      value={extraState.textSubmissionTitle} 
      onChange={(e) => dispatch(setTextSubmissionTitle(e.target.value))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2 rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      placeholder="Title"
      id="text-submission-title"
    />
  </div>

  {/* Question label */}
  <div className="flex mt-6 flex-col  text-[#c9c9cb] w-full justify-center">
    <label htmlFor="question-label" className="font-semibold">Question label</label>
    <input 
      value={extraState.QuestionLabel} 
      onChange={(e) => dispatch(setQuestioTag(e.target.value))} 
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2 rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-white"
      type="text"
      placeholder="Questions"
      id="question-label"
    />
  </div>
</div>

  )
}

export default SettingRight
