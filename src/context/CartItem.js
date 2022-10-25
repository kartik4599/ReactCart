import { createSlice } from "@reduxjs/toolkit";

const initialItem = { items: [] };

const ItemSlice = createSlice({
  name: "CartItem",
  initialState: initialItem,
  reducers: {
    addItem: (state, action) => {
      if (state.items.length > 0) {
        state.items.forEach((element) => {
          if (element.title === action.payload.title) {
            element.quantity++;
            return;
          } else {
            state.items = [action.payload, ...state.items];
          }
        });
      } else {
        state.items = [action.payload, ...state.items];
      }
    },
    removeItem: (state, action) => {
      state.items.forEach((element) => {
        if (element.title === action.payload.title) {
            console.log(element.quantity);
          if (element.quantity === 1) {
            state.items = state.items.filter(
              (element) => element.title !== action.payload.title
            );
          } else {
            element.quantity--;
          }
        }
      });
    },
  },
});

export const itemAction = ItemSlice.actions;

export default ItemSlice.reducer;
