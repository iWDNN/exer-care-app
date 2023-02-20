import { createSlice } from "@reduxjs/toolkit";

export interface ExerciseState {
  id: string;
  exerName: string;
  exerCount: string;
  exerSetCount: string;
}

const initialState: ExerciseState[] = [];

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = exerciseSlice.actions;

export default exerciseSlice.reducer;
