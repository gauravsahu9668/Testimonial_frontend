import { useDispatch } from "react-redux";
import { setForm1State } from "../../slices/form1Reducer";
import { setextraState } from "../../slices/extraReducer";
import { setthankyouState } from "../../slices/thankyouReducer";
import { useNavigate } from "react-router-dom";
interface AuthState {
    maxVideoDuration: string | null; 
    maxCharacters: number;
    videoButtonText:string;
    textButtonText:string;
    consentDisplay:string;
    textSubmissionTitle:string;
    QuestionLabel:string;
    notifySubject:string;
    notifyMessage:string
}
type spaceData ={
    spaceName: string | null;
    headerTitle: string;
    customMessage: string;
    spaceLogo:string;
    questions: string[];
  }
interface Notification {
  notifySubject:string;
  notifyMessage:string
}
interface thankyouState {
    thankyougif: string | null;
    thankyouTitle: string;
    thankyouMessage: string;
  }
interface editspaceprops {
    Extras:AuthState,
    notification:Notification,
    thankyou:thankyouState,
    space:spaceData,
    spaceId:number
}
const EditSpace:React.FC<editspaceprops>=({Extras,notification,thankyou,space,spaceId}) => {
    const extrainitialState= {
        maxVideoDuration:Extras.maxVideoDuration,
        maxCharacters:Extras.maxCharacters,
        videoButtonText:Extras.videoButtonText,
        textButtonText:Extras.textButtonText,
        consentDisplay:Extras.consentDisplay,
        textSubmissionTitle:Extras.textSubmissionTitle,
        QuestionLabel:Extras.QuestionLabel,
        notifySubject:notification.notifySubject,
        notifyMessage:notification.notifyMessage
    };
    const thankyouState={
        thankyougif: thankyou.thankyougif,
        thankyouTitle: thankyou.thankyouTitle,
        thankyouMessage: thankyou.thankyouMessage
    }
    const spaceState={
        spaceName: space.spaceName,
        headerTitle: space.headerTitle,
        customMessage: space.customMessage,
        spaceLogo:space.spaceLogo,
        questions: space.questions
    }
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const editHandler=()=>{
        console.log(spaceState)
        console.log(extrainitialState)
        console.log(thankyouState)
        dispatch(setForm1State(spaceState))
        dispatch(setextraState(extrainitialState))
        dispatch(setthankyouState(thankyouState))
        navigate(`/create-space/${spaceId}`)
    }
  return (
      <>
       <button onClick={editHandler} className="px-4 py-2 border text-black border-[#858282] rounded-lg hover:bg-teal-600 hover:text-white">
        Edit Space
       </button>
      </>
  )
}

export default EditSpace
