import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface thankyouState {
  thankyougif: string | null;
  thankyouTitle: string;
  thankyouMessage: string;
}

const initialState: thankyouState = {
  thankyougif: "https://media1.giphy.com/media/g9582DNuQppxC/giphy.gif?cid=ecf05e47ibtkj6mhht2m6gpzy157hwtxvlxlzqlijwrfqh8i&rid=giphy.gif",
  thankyouTitle: "Thank you!",
  thankyouMessage:"Thank you so much for your shoutout! It means a ton for us! 🙏",
};

const thankyouSlice = createSlice({
  name: "thankyou",
  initialState,
  reducers: {
    setThankyougif(state, action: PayloadAction<string | null>) {
      state.thankyougif = action.payload;
    },
    setThankyouTitle(state, action: PayloadAction<string>) {
      state.thankyouTitle = action.payload;
    },
    setThankyouMessage(state, action: PayloadAction<string>) {
      state.thankyouMessage = action.payload;
    },
    setthankyouState(state,action:PayloadAction<thankyouState>){
          Object.assign(state, action.payload);
    },
    resetThankyouState() {
      // Simply return the initialState to reset the state
      return initialState;
    },
  },
});

export const {setthankyouState, setThankyouMessage,resetThankyouState,setThankyougif,setThankyouTitle } = thankyouSlice.actions;

export default thankyouSlice.reducer;