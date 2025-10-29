import { createSlice } from "@reduxjs/toolkit";

//init
const initialState = {
  cart: [],
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = appStateSlice.actions;

export default appStateSlice.reducer;
