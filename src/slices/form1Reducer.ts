import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Form1State {
  spaceName: string | null;
  headerTitle: string;
  customMessage: string;
  spaceLogo:string;
  questions: string[];
}

const initialState: Form1State = {
  spaceName: null,
  headerTitle: "Header goes here...",
  spaceLogo:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VweXdveHM5YnRreHdyaHRpeG5kem16ejBvNndmOGxiMXpwZ2pyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C9LrjUYoJ5OBu0eQqE/giphy.webp",
  customMessage: "Your custom message goes here",
  questions: [],
};

const form1Slice = createSlice({
  name: "form1",
  initialState,
  reducers: {
    setSpaceName(state, action: PayloadAction<string | null>) {
      state.spaceName = action.payload;
    },
    setHeaderTitle(state, action: PayloadAction<string>) {
      state.headerTitle = action.payload;
    },
    setCustomMessage(state, action: PayloadAction<string>) {
      state.customMessage = action.payload;
    },
    setQuestions(state, action: PayloadAction<string[]>) {
      state.questions = action.payload;
    },
    setSpaceLogo(state,action:PayloadAction<string>){
        state.spaceLogo=action.payload
    },
    setForm1State(state,action:PayloadAction<Form1State>){
      Object.assign(state, action.payload);
    },
    resetForm1State() {
      // Simply return the initialState to reset the state
      return initialState;
    },
  },
});

export const { setSpaceName,setForm1State,resetForm1State, setHeaderTitle,setSpaceLogo, setCustomMessage, setQuestions } = form1Slice.actions;

export default form1Slice.reducer;
