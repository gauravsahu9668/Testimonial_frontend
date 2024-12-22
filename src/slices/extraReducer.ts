import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: AuthState = {
    maxVideoDuration: "120 seconds",
    maxCharacters:0,
    videoButtonText:"Record a video",
    textButtonText:"Send in text",
    consentDisplay:"I gave permission to use this testimonial,",
    textSubmissionTitle:"Write text testimonial to",
    QuestionLabel:"Questions",
    notifySubject:"You just made a testimonial 🥳",
    notifyMessage:"Here goes the message of your notification"
};
const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    setMAxVideoDuration(state, action: PayloadAction<string|null>) {
      // Replace `any` with your specific user data type if known
      state.maxVideoDuration = action.payload;
    },
    setMaxCharacters(state, action: PayloadAction<number>) {
      state.maxCharacters = action.payload;
    },
    setVideoButtonText(state, action: PayloadAction<string>) {
      state.videoButtonText = action.payload;
    },
    settextButtonText(state, action: PayloadAction<string>) {
      state.textButtonText = action.payload;
    },
    setConsentDisplay(state, action: PayloadAction<string>) {
      state.consentDisplay = action.payload;
    },
    setTextSubmissionTitle(state, action: PayloadAction<string>) {
      state.textSubmissionTitle = action.payload;
    },
    setQuestioTag(state, action: PayloadAction<string>) {
      state.QuestionLabel = action.payload;
    },
    setNotifySubject(state, action: PayloadAction<string>) {
      state.notifySubject = action.payload;
    },
    setNotifyMessage(state, action: PayloadAction<string>) {
      state.notifyMessage = action.payload;
    },
    setextraState(state, action: PayloadAction<AuthState>) {
      Object.assign(state, action.payload);
    },
    resetExtraState() {
      // Simply return the initialState to reset the state
      return initialState;
    },
  },
});

export const {resetExtraState,setextraState, setNotifyMessage,setNotifySubject,setMAxVideoDuration,setMaxCharacters,setVideoButtonText,settextButtonText,setConsentDisplay,setTextSubmissionTitle,setQuestioTag } = extraSlice.actions;

export default extraSlice.reducer;