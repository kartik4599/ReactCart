import { createSlice } from "@reduxjs/toolkit";

const initialToggle = { isCart: false };

const CartToggle = createSlice({
  name: "toggleCart",
  initialState: initialToggle,
  reducers: {
    showCart: (state) => {
      state.isCart = !state.isCart;
    },
  },
});

export const toggleAction = CartToggle.actions;

export default CartToggle.reducer;
