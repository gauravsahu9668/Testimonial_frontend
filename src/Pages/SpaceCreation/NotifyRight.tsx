import { useDispatch } from "react-redux"
import { setNotifyMessage, setNotifySubject } from "../../slices/extraReducer"
import { useSelector } from "react-redux"
const NotifyRight = () => {
  const dispatch=useDispatch()
  const extraState = useSelector((state: any) => {
    return state.extra;
  });
  return (
    // <div className="w-[45%] p-5 min-h-[100vh] border-t-2 mb-24 rounded-md  absolute right-32 top-10">
    //   <h1 className="w-full text-[40px] font-bold text-center text-[#25282C]">Notification</h1>
    //    <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //       <label id="header">Subject*</label>
    //       <input value={extraState.notifySubject} onChange={(e)=>{dispatch(setNotifySubject(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" type="text" placeholder="Add your subject here" id="header"></input>
    //    </div>
    //     <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    //       <label id="header">Message</label>
    //       <input value={extraState.notifyMessage} onChange={(e)=>{dispatch(setNotifyMessage(e.target.value))}} className="outline-none  focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED]" type="text" placeholder="Add your message here" id="header"></input>
    //     </div>
    // </div>
    <div className="w-[45%] p-5 min-h-[100vh] border-t-2 mb-24 rounded-md absolute right-32 top-10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
  {/* Notification Header */}
  <h1 className="w-full text-[40px] font-bold text-center text-[#25282C]">
    Notification
  </h1>

  {/* Subject Input Field */}
  <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    <label id="header">Subject*</label>
    <input
      value={extraState.notifySubject}
      onChange={(e) => { dispatch(setNotifySubject(e.target.value)) }}
      className="outline-none focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED] transition-all duration-200"
      type="text"
      placeholder="Add your subject here"
      id="header"
    />
  </div>

  {/* Message Input Field */}
  <div className="flex mt-6 flex-col text-[#55595F] w-full justify-center">
    <label id="header">Message</label>
    <input
      value={extraState.notifyMessage}
      onChange={(e) => { dispatch(setNotifyMessage(e.target.value)) }}
      className="outline-none focus:border-[#2563EB] focus:border-[2px] p-2 rounded-md mt-3 border-[1px] border-[#E2E8ED] transition-all duration-200"
      type="text"
      placeholder="Add your message here"
      id="header"
    />
  </div>
</div>

  )
}

export default NotifyRight
