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
}
const initialState: AuthState = {
  loading: null,
  token: localStorage.getItem("AuthToken") || null,
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
    resetauthState() {
      // Simply return the initialState to reset the state
      return initialState;
    },
  },
});

export const {resetauthState, setToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
