// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCart: [],
};

const counterSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
   
  },
});

// export const { } = counterSlice.actions;

export default counterSlice.reducer;
