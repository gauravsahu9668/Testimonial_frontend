import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import rootReducer from './reducer/reducer.ts'
import { BrowserRouter } from 'react-router-dom'
import authReducer from './slices/authReducer.ts'
import form1Reducer from "./slices/form1Reducer.ts"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './Components/Scrolltotop.tsx'
import thankyouReducer from "./slices/thankyouReducer.ts"
import extraReducer from "./slices/extraReducer.ts"
const store=configureStore({
  reducer:{
    auth: authReducer,
    form1: form1Reducer,
    thankyou:thankyouReducer,
    extra:extraReducer
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
      <ScrollToTop></ScrollToTop>
       <Provider store={store}>
       <App />
       <Toaster></Toaster>
       </Provider>
   </BrowserRouter>
  </StrictMode>,
)
