import { useDispatch } from "react-redux"
import { setNotifyMessage, setNotifySubject } from "../../slices/extraReducer"
import { useSelector } from "react-redux"
const NotifyRight = () => {
  const dispatch=useDispatch()
  const extraState = useSelector((state: any) => {
    return state.extra;
  });
  return (

    <div className="w-full mb-6 p-8 bg-[#020203] mx-auto rounded-lg shadow-md">
  {/* Notification Header */}
  <h1 className="w-full text-[40px] font-bold text-center text-[#dedfe1]">
    Notification
  </h1>

  {/* Subject Input Field */}
  <div className="flex mt-6 flex-col text-[#dedfe1] w-full justify-center">
    <label id="header">Subject*</label>
    <input
      value={extraState.notifySubject}
      onChange={(e) => { dispatch(setNotifySubject(e.target.value)) }}
      className="w-full p-3 text-[16px] bg-[#171515] md:text-[18px] mt-2  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-[#d4d2d2]"
      type="text"
      placeholder="Add your subject here"
      id="header"
    />
  </div>

  {/* Message Input Field */}
  <div className="flex mt-6 flex-col  text-[#dedfe1] w-full justify-center">
    <label id="header">Message</label>
    <input
      value={extraState.notifyMessage}
      onChange={(e) => { dispatch(setNotifyMessage(e.target.value)) }}
      className="w-full p-3 text-[16px] mt-3 bg-[#171515] md:text-[18px]  rounded-lg outline-none focus:ring-1 focus:ring-[#83e3e1] text-[#d4d2d2]"
      type="text"
      placeholder="Add your message here"
      id="header"
    />
  </div>
</div>

  )
}

export default NotifyRight
