
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Intregations from './Pages/Intregations'
import Pricing from './Pages/Pricing'
import Features from './Pages/Features'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import DashBoard from './Pages/AfterLogin/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Error from './Pages/Error'
import SpaceCreation from './Pages/AfterLogin/SpaceCreation'
import { resetExtraState } from './slices/extraReducer'
import { resetForm1State } from './slices/form1Reducer'
import { resetThankyouState } from './slices/thankyouReducer'
import Manage from './Pages/AfterLogin/Manage'
import Settings from './Pages/AfterLogin/Settings'
import WallOfLove from './Pages/AfterLogin/WallofLove'
import Upgrade from './Pages/AfterLogin/Upgrade'
import Analytics from './Pages/AfterLogin/Analytics'
// import VideoPopUp from './Pages/Testimonials/videoPopUp''
// import VideoReview from './Pages/Testimonials/VideoReview'
function App() {
     const {token}=useSelector((state:any)=>state.auth)
     const location=useLocation();
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const cancleClicHandler=()=>{
         dispatch(resetForm1State())
         dispatch(resetExtraState())
         dispatch(resetThankyouState())
         navigate("/dashboard")
     }
  return (
  <>
  <div className="w-full min-h-[100vh] ">
    {
      (location.pathname === "/create-space/new") && token ? 
        <div onClick={cancleClicHandler} className="w-full flex items-center justify-end pr-16 pt-3 h-[60px]">
          <div className='text-[#d22727 hover:bg-[#ddacac90] border-[#a12323] border-[1px] flex items-center justify-center cursor-pointer w-[100px] h-[50px] rounded-md '>cancel</div>
        </div> : 
        location.pathname.startsWith('/testimonial/') ? null : <Navbar /> // Show Navbar except on "/testimonial/:id"
    }

    <Routes>
      {/* Token-independent route */}
      {/* <Route path='/testimonial/:id' element={<Testimonial/>} /> */}

      {/* Conditional routing based on token */}
      {
        token ?
        <>
          <Route path='/*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/create-space/:id' element={<SpaceCreation />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/upgrade' element={<Upgrade/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/affiliates' element={<DashBoard />} />
          <Route path='/rewardaccount' element={<DashBoard />} />
          <Route path='/manage-testimonial/:id' element={<Manage />} />
          <Route path='/walloflove' element={<WallOfLove></WallOfLove>} />
          <Route path='/analytics/:id' element={<Analytics></Analytics>}></Route>
        </>
        :
        <>
          <Route path='/*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/features' element={<Features />} />
          <Route path='/intregations' element={<Intregations />} />
          <Route path='/pricing' element={<Pricing />} />
        </>
      }
    </Routes>
  </div>
</>


  )
}

export default App
