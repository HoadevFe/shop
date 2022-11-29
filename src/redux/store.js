import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cartttt: cartSlice,
  },
});

export default store;
