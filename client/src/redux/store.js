import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authRedux"
import dataReducer from "./dataRedux"

const store = configureStore({
  reducer: { auth: authReducer, data: dataReducer },
});
export default store;