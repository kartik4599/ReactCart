import { createSlice } from "@reduxjs/toolkit";

const initialItem = { items: [] };

const ItemSlice = createSlice({
  name: "CartItem",
  initialState: initialItem,
  reducers: {
    addItem: (state, action) => {
      if (state.items.length > 0) {
        let find = true;
        state.items.forEach((element) => {
          if (element.title === action.payload.title) {
            element.quantity++;
            find = false;
          }
        });
        console.log(find);
        if (find) {
          state.items = [action.payload, ...state.items];
          console.log("inside out");
        }
      } else {
        state.items = [action.payload, ...state.items];
        console.log("outside");
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
    addCart:(state,action)=>{
      state.items=action.payload;
    }
  },
});

export const itemAction = ItemSlice.actions;

export default ItemSlice.reducer;
