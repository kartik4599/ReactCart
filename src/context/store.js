import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./ShowCart";
import ItemReducer from "./CartItem";

const shop = configureStore({
  reducer: { toggle: ToggleReducer, item: ItemReducer },
});

export default shop;
