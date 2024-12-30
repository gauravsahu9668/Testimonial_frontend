import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// type userdata ={
//   user_id:number
//   email:string
//   firstName:string
//   password:string
// }
interface AuthState {
  loading: boolean | null;
  token: string | null;
  profilePicture :string | null;
  credits:number
  payment:boolean
}
const initialState: AuthState = {
  loading: null,
  token: localStorage.getItem("AuthToken") || null,
  profilePicture : "",
  credits:0,
  payment:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean | null>) {
      state.loading = action.payload;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setProfilePicture(state, action: PayloadAction<string | null>) {
      state.profilePicture = action.payload;
    },
    setCredits(state, action: PayloadAction<number>) {
      state.credits = action.payload;
    },
    setPayment(state, action: PayloadAction<boolean>) {
      state.payment = action.payload;
    },
    resetauthState() {
      // Simply return the initialState to reset the state
      return initialState;
    },
  },
});

export const {resetauthState, setToken, setLoading ,setProfilePicture,setCredits,setPayment} = authSlice.actions;

export default authSlice.reducer;
